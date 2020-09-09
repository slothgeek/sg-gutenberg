import GraphicPicker from "../../components/GraphicPicker";

const { BlockControls, InspectorControls } = wp.blockEditor;
const { Component } = wp.element;
const { IconButton, RangeControl, PanelBody, TextControl } =wp.components;

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

        if(attributes.items.length == 0) {
            return ([
                blockControls,
                <div className="wp-block-sg-ganimation">
                    <div className="no-data">
                        Haz clic en el botón
                        <IconButton
                            onClick={
                                () => this.pushNewItem()
                            }
                            icon="plus"
                            label="Agregar"
                        />
                        para agregar la primera imagen
                    </div>
                </div>
            ])
        }

        const inspectorControls = () => {

            return (
                <InspectorControls>
                    <PanelBody title="Graphic Stack" initialOpen={false}>
                        <RangeControl
                            label="Alto"
                            value={ parseInt(attributes.height+'') }
                            onChange={ ( value ) => this.props.setAttributes({height: `${value}px` }) }
                            min={ 1 }
                            max={ 1000 }
                        />
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
                    {
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
                    }

                </InspectorControls>
            )
        }

        return ([
            inspectorControls(),
            blockControls,
            <div className="wp-block-sg-ganimation sg-items" style={{height:attributes.height}}>
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
