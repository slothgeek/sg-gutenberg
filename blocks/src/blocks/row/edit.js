const { InnerBlocks, InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl, TabPanel } = wp.components;
const { Component } = wp.element;
const { createHigherOrderComponent } = wp.compose;

import EditBackground from "../../style/EditBackground";
import EditSpaceDimension from "../../style/EditSpaceDimension";

const rowCustomClassName = createHigherOrderComponent((BlockListBlock) => {
    return props => {
        if(props.name == "sg/row"){
            return <BlockListBlock { ...props } className={ 'row' } />
        }

        return <BlockListBlock { ...props } />
    }
}, 'rowCustomClassName');

wp.hooks.addFilter('editor.BlockListBlock', 'sg/row', rowCustomClassName);

export default class RowEdit extends Component {
    constructor() {
        super( ...arguments );
    }


    render(){
        const ALLOWED_BLOCKS = [ 'sg/column'];

        const { clientId, attributes, setAttributes } = this.props;
        const { select } = wp.data;

        const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
        const childBlocks = parentBlock.innerBlocks;

        const emptyBlock = () => {
            if ( childBlocks.length == 0){

                return(
                    [
                        <div className="sg-empty-inner-block">
                            <div className="sg-block-name">
                                <span className="dashicons dashicons-screenoptions"></span>
                                Row
                            </div>
                            Agrega una o más columnas presionando el botón de abajo con el símbolo de más...
                        </div>
                    ]
                )
            }
        }

        const onSelect = ( tabName ) => {
            //console.log( 'Selecting tab', tabName );
        };

        const renderTab1 =  (
            <div>
                <ToggleControl
                    label="Activar sección"
                    help={ attributes.itsSection ? 'Sección.' : 'Solo fila.' }
                    checked={ attributes.itsSection }
                    onChange={ (value) => setAttributes( { itsSection: value } ) }
                />
                <ToggleControl
                    label="Activar contenedor?"
                    help={ attributes.hasContainer ? 'Contenedor.' : 'Solo fila.' }
                    checked={ attributes.hasContainer }
                    onChange={ (value) => setAttributes( { hasContainer: value } ) }
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
                                      onSelect={ onSelect }
                                      tabs={ [
                                          {
                                              name: 'tab1',
                                              title: 'General',
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
                <div className="row-container" style={ attributes.style} >
                    <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                        renderAppender={ () => (
                            <div class="apender-container">
                                <div className="block-editor-text-block-appender">
                                    <i>
                                        <div className="sg-block-name">
                                            <span className="dashicons dashicons-screenoptions"></span>
                                            Row
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