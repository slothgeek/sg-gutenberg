const { RichText,PlainText,InspectorControls,MediaUpload } = wp.blockEditor;
const { Component } = wp.element;
const { PanelBody,ToggleControl,RangeControl,TextControl,SelectControl,Button,IconButton } = wp.components;

import {cloneArray} from '../../helpers/utilities';

export default class Edit extends Component {
    constructor() {
        super( ...arguments );
    }

    Controls(){
        const { attributes, setAttributes }  = this.props;

        return(
            <InspectorControls>
                <PanelBody>
                    <ToggleControl
                        label="Mostrar indicadores"
                        checked={ attributes.indicators }
                        onChange={ (state) => setAttributes( { indicators: state } ) }
                    />
                    <div>
                        <label>Alto del slider</label>
                        <div style={{display:"flex", alignItems:"flex-start"}}>
                            <div style={{flex:"70%"}}>
                                <RangeControl
                                    value={ attributes.height }
                                    onChange={ ( value ) => setAttributes( { height: value } ) }
                                    min={ 10 }
                                    max={ 1000 }
                                />
                            </div>
                            <div style={{flex:"10%"}}>
                                <SelectControl
                                    value={ attributes.unitHeight }
                                    options={ [
                                        { label: 'px', value: 'px' },
                                        { label: 'em', value: 'em' },
                                        { label: 'rem', value: 'rem' },
                                        { label: 'vh', value: 'vh' },
                                    ] }
                                    onChange={ ( value ) => setAttributes( { unitHeight: value } ) }
                                />
                            </div>
                        </div>
                    </div>
                    <TextControl
                        label="Duración"
                        help="1s es igual a 1000"
                        value={ attributes.duration }
                        onChange={ ( value ) => setAttributes( { duration: value } ) }
                    />
                    <TextControl
                        label="Intervalo entre sliders"
                        help="1s es igual a 1000"
                        value={ attributes.interval }
                        onChange={ ( value ) => setAttributes( { interval: value } ) }
                    />
                </PanelBody>
                <PanelBody title="Images">
                        {this.RenderSlidesControl()}
                        <Button
                            class="sg-button full"
                            isSecondary
                            onClick={ () => this.addNewSlide() }
                        >Agregar diapositiva</Button>
                </PanelBody>
            </InspectorControls>
        )
    }

    addNewSlide(){
        const {attributes, setAttributes} = this.props;

        return setAttributes({
            items: [].concat(cloneArray(attributes.items), [{
                index: attributes.items.length,
                graphic:{
                    src:'',
                    alt:''
                },
                caption:'',
                captionPosition:'', //center-align left-align right-align
            }])
        });

    }

    updateSlide(item, model){
        var newObject = Object.assign({}, item, model);

        return this.props.setAttributes({
            items: [].concat(cloneArray(this.props.attributes.items.filter(function (itemFilter) {
                return itemFilter.index != item.index;
            })), [newObject])
        });
    }

    deleteSlide(){

    }

    RenderSlidesControl(){
        const {attributes} = this.props;

        if(attributes.items.length > 0){
            return attributes.items.sort(function(a , b) {
                return a.index - b.index;
            }).map((item, index) => {

                return(
                    <div key={index}>
                        <label> {`Slide ${index}`} </label>
                        <MediaUpload
                            type="Imagen"
                            value={ item.graphic.src }
                            onSelect={ media => this.updateSlide(item, { graphic: { src:media.url, alt:media.alt} }) }
                            render={ ({ open }) =>
                                item.graphic.src !== '' ?
                                    (
                                        <div className="components-base-control">
                                            <img src={item.graphic.src} alt="" style={{width:'100%'}}/>
                                            <div className="sg-toolbar">
                                                <IconButton
                                                    icon="edit"
                                                    label="Edit"
                                                    onClick={ open }
                                                />
                                                <IconButton
                                                    icon="trash"
                                                    label="Delete"
                                                    onClick={()=> this.deleteSlide(index) }
                                                />
                                            </div>

                                        </div>
                                    ):
                                    (
                                        <div className="components-base-control">
                                            <div className="no-image"></div>
                                            <Button
                                                onClick={ open }
                                                className="sg-button full button"
                                            >
                                                Seleccionar imagen
                                            </Button>
                                        </div>
                                    )

                            }
                        />
                    </div>
                )
            })
        }else {
            return (<span>No hay item para mostrar</span>)
        }
    }

    render(){
       const {attributes} = this.props;
       return (
           <div>
               { this.Controls() }
               <div
                   className="sg-slider slider"
                   data-indicators={attributes.indicators}
                   data-height={attributes.height}
                   data-duration={attributes.duration}
                   data-interval={attributes.interval}
               >
                   <ul className="slides">
                       {
                           attributes.items.map( item => {

                               return(
                                   <li>
                                       <img src={item.graphic.src} alt={item.graphic.alt} />
                                   </li>
                               )
                           })
                       }

                   </ul>
               </div>
           </div>

       )
    }

}

const item = {
    graphic:{
        src:'',
        alt:''
    },
    caption:'',
    captionPosition:'', //center-align left-align right-align
}
