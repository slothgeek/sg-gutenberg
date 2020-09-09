const { BlockControls,InspectorControls,PlainText } = wp.blockEditor;
const { Component } = wp.element;
const { IconButton, PanelBody, RangeControl } = wp.components;

import GraphicPicker  from '../../components/GraphicPicker';

export default class SlothGeekGalleryEdit extends Component {
    constructor() {
        super( ...arguments );
    }

    componentDidMount(){
        console.log("grid_count: "+this.props.attributes.grid_count);
    }

    onChangeEvent(item, model){
        var newObject = Object.assign({}, item, model);

        return this.props.setAttributes({
            items: [].concat(this.cloneArray(this.props.attributes.items.filter(function (itemFilter) {
                return itemFilter.index != item.index;
            })), [newObject])
        });
    };

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

    renderEditItem(item){

        const columnWidth = ( 100/this.props.attributes.grid_count );

        return(
            <div className="sg-item" style={ { width:`${columnWidth}%` } }>
                <GraphicPicker
                    onChange={ media => this.onChangeEvent(item, { imageUrl: media.url }) }
                    url={item.imageUrl}
                    alt={item.imageAlt}
                />
                <PlainText
                    onChange={
                        ( value ) => this.onChangeEvent(item, {url: value})
                    }
                    value={ item.url }
                    placeholder="url"
                />
            </div>
        )
    }

    render() {

        const {attributes, setAttributes} = this.props;

        const renderItems = () => {
            if(attributes.items.length > 0){
                return attributes.items.sort(function(a , b) {
                    return a.index - b.index;
                }).map((item) => this.renderEditItem(item))
            }else {
                return (<span>No hay item para mostrar</span>)
            }
        }

        const inspectorControls = (
            <InspectorControls>
                <PanelBody title="Ajustes">
                    <RangeControl
                        label="Número de columnas"
                        value={ attributes.grid_count }
                        onChange={ ( value ) => setAttributes( { grid_count: value } ) }
                        min={ 1 }
                        max={ 12 }
                        required
                    />
                </PanelBody>
            </InspectorControls>
        );

        return (
            <div>
                {
                    <BlockControls>
                        <IconButton
                            onClick={
                                () => {
                                    return setAttributes({
                                        items: [].concat(this.cloneArray(attributes.items), [{
                                            index: attributes.items.length,
                                            imageUrl: "",
                                            imageAlt:"",
                                            url: ""
                                        }])
                                    });
                                }
                            }
                            icon="plus"
                            label="Agregar"
                        />
                    </BlockControls>
                }
                {
                    inspectorControls
                }
                <div className="sg-gallery">
                    <div className="sg-gallery-inner">
                        {
                            renderItems()
                        }
                    </div>
                </div>
            </div>
        )
    }


}
