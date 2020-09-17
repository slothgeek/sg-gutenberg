import GraphicPicker from "../../components/GraphicPicker";

const { BlockControls, InspectorControls, MediaUpload } = wp.blockEditor;
const { Component } = wp.element;
const { IconButton, RangeControl, PanelBody, TextControl, Button } =wp.components;

export default class SlothGeekGalleryEdit extends Component {
    constructor() {
        super( ...arguments );
    }

    pushNewItem(){
        const { attributes, setAttributes } = this.props;

        let item = {
            index: attributes.items.length,
            id:"",
            graphicUrl:"",
            gracphicAlt:"",
            animation:"",
            style:{
                width:"100%",
                bottom:"0",
                left:"0"
            }
        }

        return setAttributes({
            items: [].concat(this.cloneArray(attributes.items), [item])
        });
    }

    updateItem(item){
        const { setAttributes } = this.props;

        return setAttributes({
            items: [].concat(this.cloneArray(this.props.attributes.items.filter(function (itemFilter) {
                return itemFilter.index != item.index;
            })), [item])
        });
    }

    cloneArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    renderGraphic(open) {
        const {attributes, setAttributes} = this.props;

        if (attributes.graphic.url !== '' && attributes.graphic.url !== undefined) {
            return (
                <div className="components-base-control">
                    <img src={attributes.graphic.url} alt="" style={{width:'100%'}}/>
                    <div className="sg-toolbar">
                        <IconButton
                            icon="edit"
                            label="Edit"
                            onClick={ open }
                        />
                        <IconButton
                            icon="trash"
                            label="Delete"
                            onClick={()=>{
                                setAttributes( { graphic : { url:'', alt:'' } } );
                            }}
                        />
                    </div>

                </div>
            )
        }else{

            return(
                <div className="components-base-control">
                    <div className="no-image"></div>
                    <Button
                        onClick={ open }
                        className="sg-button full button"
                    >
                        Agregar
                    </Button>
                </div>
            )
        }
    }

    render(){
        const {attributes, setAttributes} = this.props;

        const blockControls = (
            <BlockControls>
                <IconButton
                    onClick={
                        () => this.pushNewItem()
                    }
                    icon="plus"
                    label="Agregar"
                />
            </BlockControls>
        );

        const mainControl = (
            <PanelBody title="Graphic Stack" initialOpen={false}>
                <div>
                    <label>Imagen de Fondo</label>
                    <MediaUpload
                        type="Imagen"
                        value={ attributes.graphic }
                        onSelect={ media => {
                            setAttributes(  { graphic: media } );
                        }
                        }
                        render={ ({ open }) => this.renderGraphic(open)}
                    />
                </div>
                <RangeControl
                    label="Ancho máximo"
                    value={ parseInt(attributes.maxWidth+'') }
                    onChange={ ( value ) => this.props.setAttributes({maxWidth: `${value}px` }) }
                    min={ 1 }
                    max={ 1000 }
                />
                <TextControl
                    label="Anclaje"
                    value={ attributes.id }
                    onChange={ ( value ) => this.props.setAttributes({id: value }) }
                />
            </PanelBody>
        )


        const itemsControl = (
            attributes.items.sort(function(a , b) {
                return a.index - b.index;
            }).map( ( item ) => (
                <PanelBody title={`Item ${item.index+1}`} initialOpen={false}>
                    <TextControl
                        label="Anclaje"
                        value={ item.id }
                        onChange={ ( value ) => this.updateItem({ ...item, id: value }) }
                    />
                    <TextControl
                        label="Animación"
                        value={ item.animation }
                        onChange={ ( value ) => this.updateItem({ ...item, animation: value }) }
                    />
                    <RangeControl
                        label="Width"
                        value={ parseInt(item.style.width) }
                        onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, width:`${value}%`} }) }
                        min={ 1 }
                        max={ 100 }
                    />
                    <RangeControl
                        label="bottom"
                        value={ parseInt(item.style.bottom) }
                        onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, bottom:`${value}%`} }) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <RangeControl
                        label="Left"
                        value={ parseInt(item.style.left) }
                        onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, left:`${value}%`} }) }
                        min={ 0 }
                        max={ 100 }
                    />
                    <TextControl
                        label="z-index"
                        value={ item.style.zIndex }
                        onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, zIndex: parseInt(value)} }) }
                    />
                </PanelBody>
            ) )

        )

        return ([

            blockControls,
            <InspectorControls>
                { mainControl }
                { itemsControl }
            </InspectorControls>,
            <div className="wp-block-sg-ganimation sg-items">
                <img src={attributes.graphic.url} alt={attributes.graphic.alt}/>
                {
                    attributes.items.sort(function(a , b) {
                        return a.index - b.index;
                    }).map( (item, index) => (
                        <div className="sg-item" data-index={index} style={item.style}>
                            <div className="sg-item-graphic-inner" >
                                <GraphicPicker
                                    className="sg-item-graphic"
                                    onChange={ media => this.updateItem({ ...item, graphicUrl: media.url, graphicAlt: media.alt }) }
                                    url={item.graphicUrl}
                                    alt={item.graphicAlt}
                                />
                            </div>

                        </div>
                    ) )
                }
            </div>
        ])
    }


}
