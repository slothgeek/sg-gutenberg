import IconPicker from "../../components/IconPicker";
import GraphicPicker from "../../components/GraphicPicker";

const { RichText, BlockControls, InspectorControls } = wp.editor;
const { Component } = wp.element;
const { IconButton, Button, PanelBody, SelectControl  } = wp.components;

export default class TabEdit extends Component {
    constructor() {
        super( ...arguments );

    }

    pushNewItem(){
        const { attributes, setAttributes } = this.props;

        let item = {
            index: attributes.items.length,
            name: `tab${attributes.items.length}`,
            tabIcon: '',
            tabGraphic:'',
            tabGraphicAlt:'',
            tabTitle: 'Nombre',
            panelTitle: 'Title',
            panelGraphic: '',
            panelGraphicAlt: '',
            panelBody:'',
            display: attributes.items.length === 0 ? 'block' : 'none',
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

    activeTab(index){
        const { setAttributes } = this.props;

        let flag = this.props.attributes.items;

        flag.map( item => {
            if(item.display === 'block'){
                item.display = 'none'
            }
            if(item.index === index){
                item.display = 'block'
            }

        } );

        console.log(flag)

        return setAttributes({items: [].concat(flag)});
    }

    render(){

        const { attributes, setAttributes } = this.props;

        if(attributes.items.length == 0){
            this.pushNewItem();
        };

        const inspectorControls = (
            <InspectorControls>
                <PanelBody title="Configuraciones" initialOpen={false}>
                    <SelectControl
                        label="Tipo de tab"
                        value={ attributes.type }
                        options={
                            [
                                {label: 'Column', value:'column'},
                                {label: 'Row', value:'row'}
                            ]
                        }
                        onChange={ ( value ) => setAttributes( { type: value } ) }
                    />
                    <SelectControl
                        label="Alineación del tab"
                        value={ attributes.tabAlign }
                        options={
                            [
                                {label: 'Column', value:'column'},
                                {label: 'Row', value:'row'}
                            ]
                        }
                        onChange={ ( value ) => setAttributes( { tabAlign: value } ) }
                    />
                    <SelectControl
                        label="Alineación del panel"
                        value={ attributes.panelAlign }
                        options={
                            [
                                {label: 'Column', value:'column'},
                                {label: 'Row', value:'row'}
                            ]
                        }
                        onChange={ ( value ) => setAttributes( { panelAlign: value } ) }
                    />

                </PanelBody>
            </InspectorControls>
        );

        const showTabGraphicIcon = (item) => {
            if(item.tabGraphic == '' && item.tabIcon == ''){
                return([
                    <IconPicker
                        value={item.tabIcon}
                        onChange={ ( value ) => this.updateItem( {...item, tabIcon:value } ) }
                    />,
                    <GraphicPicker
                        className=""
                        onChange={ ( value ) => this.updateItem( {...item, tabGraphic:value.url, tabGraphicAlt: value.alt } ) }                                                url={item.graphicUrl}
                        url={item.tabGraphic}
                        alt={item.tabGraphicAlt}
                    />

                ])

            }

            if(item.tabIcon !== ''){
                return(
                    <IconPicker
                        value={item.tabIcon}
                        onChange={ ( value ) => this.updateItem( {...item, tabIcon:value } ) }
                    />
                )
            }

            if(item.tabGraphic !== ''){
                return(
                    <GraphicPicker
                        className=""
                        onChange={ ( value ) => this.updateItem( {...item, tabGraphic:value.url, tabGraphicAlt: value.alt } ) }                                                url={item.graphicUrl}
                        url={item.tabGraphic}
                        alt={item.tabGraphicAlt}
                    />
                )
            }
        }


        return ([
                <BlockControls>
                    <IconButton
                        className = "sg-toobal-button"
                        onClick={ () => this.pushNewItem() }
                        icon="plus"
                        label="Agregar"
                    />
                </BlockControls>,
                inspectorControls,
                <div className={`wp-block-sg-tabs ${attributes.type}`}>
                    <div className="tab-toolbar">
                        {
                            attributes.items.sort(function(a , b) {
                                return a.index - b.index;
                            }).map(item => {
                                return (
                                    <div className={`tab ${attributes.tabAlign}`}>
                                        <div className="graphic-picker">
                                            {
                                                showTabGraphicIcon(item)
                                            }
                                        </div>
                                        <Button isTertiary onClick={ () => this.activeTab(item.index)}>
                                            <RichText
                                                multiline={false}
                                                tagName="h4"
                                                value={ item.tabTitle }
                                                formattingControls={ [ 'bold', 'italic' ] }
                                                onChange={ ( value ) => this.updateItem( {...item, tabTitle:value } ) }
                                                placeholder='Nombre'
                                            />
                                        </Button>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="tab-panels">
                        {
                            attributes.items.sort(function(a , b) {
                                return a.index - b.index;
                            }).map(item => {
                                return (
                                    <div id={item.name} className="tab" style={{display: item.display}}>
                                        <div className="tab-content">
                                            <div className="graphic">
                                                <GraphicPicker
                                                    className=""
                                                    onChange={ ( value ) => this.updateItem( {...item, panelGraphic:value.url, panelGraphicAlt: value.alt } ) }                                                url={item.graphicUrl}
                                                    url={item.panelGraphic}
                                                />
                                            </div>
                                            <div className="content">
                                                <RichText
                                                    multiline={false}
                                                    tagName="h5"
                                                    value={ item.panelTitle }
                                                    formattingControls={ [ 'bold', 'italic' ] }
                                                    onChange={ ( value ) => this.updateItem( {...item, panelTitle:value } ) }
                                                    placeholder='Título del cuerpo'
                                                />
                                                <RichText
                                                    multiline
                                                    tagName="p"
                                                    value={ item.panelBody }
                                                    formattingControls={ [ 'bold', 'italic' ] }
                                                    onChange={ ( value ) => this.updateItem( {...item, panelBody:value } ) }
                                                    placeholder='Cuerpo'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            ]
        )
    }


}
