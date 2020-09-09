import EditBackground from "../../style/EditBackground";
import EditSpaceDimension from "../../style/EditSpaceDimension";

const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { SelectControl, PanelBody, PanelRow, TabPanel } = wp.components;
const { Component } = wp.element;

const { createHigherOrderComponent } = wp.compose;

let classes = "";

export default class ColumnEdit extends Component {

    constructor() {
        super( ...arguments );
    }

    render(){
        const { clientId } = this.props;
        const { select } = wp.data;

        const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
        const childBlocks = parentBlock.innerBlocks;

        const emptyBlock = () => {
            if ( childBlocks.length == 0){

                return(
                    <div className="sg-empty-inner-block">
                        <div className="sg-block-name">
                            <span class="dashicons dashicons-screenoptions"></span>
                            Column
                        </div>
                        Comienza a armar tu contenido con uno o más bloques de la librería presionando en el botón más.
                    </div>
                )
            }
        }

        const {className, attributes, setAttributes} = this.props;

        classes = attributes.small;

        const renderTab1 =  (
            <div>
                <SelectControl
                    label="Small"
                    value={ attributes.small }
                    options={ [
                        { label: 's1', value: 's1' },
                        { label: 's2', value: 's2' },
                        { label: 's3', value: 's3' },
                        { label: 's4', value: 's4' },
                        { label: 's5', value: 's5' },
                        { label: 's6', value: 's6' },
                        { label: 's7', value: 's7' },
                        { label: 's8', value: 's8' },
                        { label: 's9', value: 's9' },
                        { label: 's10', value: 's10' },
                        { label: 's11', value: 's11' },
                        { label: 's12', value: 's12' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { small: value } );
                        wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
                    } }
                />
                <SelectControl
                    label="Medium"
                    value={ attributes.medium }
                    options={ [
                        { label: '-', value: '' },
                        { label: 'm1', value: 'm1' },
                        { label: 'm2', value: 'm2' },
                        { label: 'm3', value: 'm3' },
                        { label: 'm4', value: 'm4' },
                        { label: 'm5', value: 'm5' },
                        { label: 'm6', value: 'm6' },
                        { label: 'm7', value: 'm7' },
                        { label: 'm8', value: 'm8' },
                        { label: 'm9', value: 'm9' },
                        { label: 'm10', value: 'm10' },
                        { label: 'm11', value: 'm11' },
                        { label: 'm12', value: 'm12' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { medium: value } );
                        wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
                    } }
                />
                <SelectControl
                    label="Large"
                    value={ attributes.large }
                    options={ [
                        { label: '-', value: '' },
                        { label: 'l1', value: 'l1' },
                        { label: 'l2', value: 'l2' },
                        { label: 'l3', value: 'l3' },
                        { label: 'l4', value: 'l4' },
                        { label: 'l5', value: 'l5' },
                        { label: 'l6', value: 'l6' },
                        { label: 'l7', value: 'l7' },
                        { label: 'l8', value: 'l8' },
                        { label: 'l9', value: 'l9' },
                        { label: 'l10', value: 'l10' },
                        { label: 'l11', value: 'l11' },
                        { label: 'l12', value: 'l12' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { large: value } );
                        wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
                    } }
                />
                <SelectControl
                    label="Offset small"
                    value={ attributes.offsetSmall }
                    options={ [
                        { label: '-', value: '' },
                        { label: 'offset-s1', value: 'offset-s1' },
                        { label: 'offset-s2', value: 'offset-s2' },
                        { label: 'offset-s3', value: 'offset-s3' },
                        { label: 'offset-s4', value: 'offset-s4' },
                        { label: 'offset-s5', value: 'offset-s5' },
                        { label: 'offset-s6', value: 'offset-s6' },
                        { label: 'offset-s7', value: 'offset-s7' },
                        { label: 'offset-s8', value: 'offset-s8' },
                        { label: 'offset-s9', value: 'offset-s9' },
                        { label: 'offset-s10', value: 'offset-s10' },
                        { label: 'offset-s11', value: 'offset-s11' },
                        { label: 'offset-s12', value: 'offset-s12' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { offsetSmall: value } );
                        wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
                    } }
                />
                <SelectControl
                    label="Offset medium"
                    value={ attributes.offsetMedium }
                    options={ [
                        { label: '-', value: '' },
                        { label: 'offset-m1', value: 'offset-m1' },
                        { label: 'offset-m2', value: 'offset-m2' },
                        { label: 'offset-m3', value: 'offset-m3' },
                        { label: 'offset-m4', value: 'offset-m4' },
                        { label: 'offset-m5', value: 'offset-m5' },
                        { label: 'offset-m6', value: 'offset-m6' },
                        { label: 'offset-m7', value: 'offset-m7' },
                        { label: 'offset-m8', value: 'offset-m8' },
                        { label: 'offset-m9', value: 'offset-m9' },
                        { label: 'offset-m10', value: 'offset-m10' },
                        { label: 'offset-m11', value: 'offset-m11' },
                        { label: 'offset-m12', value: 'offset-m12' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { offsetMedium: value } );
                        wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
                    } }
                />
                <SelectControl
                    label="Offset large"
                    value={ attributes.offsetLarge }
                    options={ [
                        { label: '-', value: '' },
                        { label: 'offset-l1', value: 'offset-l1' },
                        { label: 'offset-l2', value: 'offset-l2' },
                        { label: 'offset-l3', value: 'offset-l3' },
                        { label: 'offset-l4', value: 'offset-l4' },
                        { label: 'offset-l5', value: 'offset-l5' },
                        { label: 'offset-l6', value: 'offset-l6' },
                        { label: 'offset-l7', value: 'offset-l7' },
                        { label: 'offset-l8', value: 'offset-l8' },
                        { label: 'offset-l9', value: 'offset-l9' },
                        { label: 'offset-l10', value: 'offset-l10' },
                        { label: 'offset-l11', value: 'offset-l11' },
                        { label: 'offset-l12', value: 'offset-l12' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { offsetLarge: value } );
                        wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
                    } }
                />
            </div>


        )

        const renderTab2 =  (
            <div>
                { EditBackground(this.props) }
            </div>
        )

        const renderTab3 =  (
            <div>
                { EditSpaceDimension(this.props) }
            </div>
        )

        const renderTab = (tabName) =>{
            switch (tabName){

                case 'tab1':
                    return renderTab1;
                    break;

                case 'tab2':
                    return renderTab2;
                    break;

                case 'tab3':
                    return renderTab3;
                    break;

                default:
                    return renderTab1;
                    break;
            }
        }

        return (
            [
                <InspectorControls>
                    <PanelBody title="Ajustes">
                        <PanelRow>
                            <TabPanel className="sg-tab-panel"
                                      activeClass="active-tab"
                                      tabs={ [
                                          {
                                              name: 'tab1',
                                              title: 'Grid',
                                              className: 'tab-one',
                                          },
                                          {
                                              name: 'tab2',
                                              title: 'BG',
                                              className: 'tab-two',
                                          },
                                          {
                                              name: 'tab3',
                                              title: 'Dim',
                                              className: 'tab-three',
                                          },
                                      ] }>
                                {
                                    ( tab ) => renderTab(tab.name)
                                }
                            </TabPanel>
                        </PanelRow>

                    </PanelBody>
                </InspectorControls>,
                emptyBlock(),
                <div className="col-content" style={ attributes.style }>
                    <InnerBlocks
                        renderAppender={ () => (
                            <div class="apender-container">
                                <div className="block-editor-text-block-appender">
                                    <i>
                                        <div className="sg-block-name">
                                            <span className="dashicons dashicons-screenoptions"></span>
                                            Column
                                        </div>
                                    </i>
                                </div>
                                <InnerBlocks.ButtonBlockAppender />
                            </div>

                        ) }
                    />
                </div>
            ]

        )
    }
}
const columnCustomClassName = createHigherOrderComponent((BlockListBlock) => {
    return props => {
        if(props.name == "sg/column") {
            return <BlockListBlock {...props} className={`col ${props.attributes.small} ${props.attributes.medium} ${props.attributes.large} ${props.attributes.offsetSmall} ${props.attributes.offsetMedium} ${props.attributes.offsetLarge}`}/>
        }

        return <BlockListBlock {...props}/>
    }
}, 'columnCustomClassName');

wp.hooks.addFilter('editor.BlockListBlock', 'sg/column', columnCustomClassName);
