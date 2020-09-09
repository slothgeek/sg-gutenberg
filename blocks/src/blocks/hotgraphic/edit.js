import GraphicPicker from "../../components/GraphicPicker";
const { Component } = wp.element;
const { BlockControls,InspectorControls  } = wp.blockEditor;
const { IconButton,PanelBody,TextControl,TextareaControl,RangeControl } = wp.components;

export default class SlothGeekGalleryEdit extends Component {
    constructor() {
        super( ...arguments );
    }

    pushNewItem(){
        const { attributes, setAttributes } = this.props;

        let item = {
            index: attributes.items.length,
            title:'',
            graphicUrl:'',
            graphicAlt:'',
            body:'',
            style: {
                position:'absolute',
                top: '0',
                left: '0',
                width: '30%',
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
        const { attributes } = this.props;

        if(attributes.items.length == 0){
            this.pushNewItem();
        }

        const inspectorControls = () => {

            return (
                <InspectorControls>
                    <PanelBody title="Hotgraphic" initialOpen={false}>
                        <RangeControl
                            label="Alto"
                            value={ parseInt(attributes.height+'') }
                            onChange={ ( value ) => this.props.setAttributes({height: `${value}px` }) }
                            min={ 1 }
                            max={ 1000 }
                        />
                    </PanelBody>
                    {
                        attributes.items.sort(function(a , b) {
                            return a.index - b.index;
                        }).map( ( item ) => (
                            <PanelBody title={`Item ${item.index+1}`} initialOpen={false}>
                                <TextControl
                                    label="Título"
                                    value={ item.title }
                                    onChange={ ( value ) => this.updateItem({ ...item, title: value }) }
                                />
                                <TextareaControl
                                    label="Cuerpo"
                                    help="Enter some text"
                                    value={ item.body }
                                    onChange={ ( value ) => this.updateItem({ ...item, body: value }) }
                                />
                                <RangeControl
                                    label="Width"
                                    value={ parseInt(item.style.width) }
                                    onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, width:`${value}%`} }) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Top"
                                    value={ parseInt(item.style.top) }
                                    onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, top:`${value}%`} }) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                                <RangeControl
                                    label="Left"
                                    value={ parseInt(item.style.left) }
                                    onChange={ ( value ) => this.updateItem({ ...item, style: {...item.style, left:`${value}%`} }) }
                                    min={ 1 }
                                    max={ 100 }
                                />
                            </PanelBody>
                        ) )
                    }

                </InspectorControls>
            )
        }


        return (
            [
                inspectorControls(),
                <BlockControls>
                    <IconButton
                        onClick={ () => this.pushNewItem() }
                        icon="plus"
                        label="Agregar"
                    />
                </BlockControls>,
                <div className="wp-block-sg-hotgraphic sg-items" style={{height:attributes.height}}>
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
            ]

        )
    }


}
