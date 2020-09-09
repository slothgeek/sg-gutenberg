const { Component } = wp.element;
const { RichText  } = wp.editor;
export default class TabSave extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){

        const { attributes } = this.props;

        const showTabGraphicIcon = (item) => {
            if(item.tabIcon !== ''){
                return(
                    <i className={`tab-icon fas ${item.icon}`} data-icon={item.icon}></i>
                )
            }

            if(item.tabGraphic !== ''){
                return(
                    <img src={item.tabGraphic} alt={item.tabGraphicAlt}  />
                )
            }

            return
        }

        const showPanelGraphic = (item) => {
            if(item.panelGraphic !== ''){
                return (
                    <div className="graphic">
                        <img src={item.panelGraphic} alt={item.panelGraphicAlt}  />
                    </div>
                )
            }

            return
        }


        return (

            <div className={`wp-block-sg-tabs ${attributes.type}`}>
                <ul className="tabs sg-tab-toolbar">
                    {
                        attributes.items.sort(function(a , b) {
                            return a.index - b.index;
                        }).map(item => {
                            return (
                                <li className="tab">
                                    <a href={`#${item.name}`} className={attributes.tabAlign}>
                                        <div className="sg-tabgraphic">
                                            {showTabGraphicIcon(item)}
                                        </div>
                                        <RichText.Content className="sg-tab-title" tagName="div" value={ item.tabTitle } />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="sg-tab-panel">
                    {
                        attributes.items.sort(function(a , b) {
                            return a.index - b.index;
                        }).map(item => {
                            return (
                                <div id={item.name} className="tab-content">
                                    { showPanelGraphic(item) }
                                    <div className="body">
                                        <RichText.Content tagName="h4" value={ item.panelTitle } />
                                        <RichText.Content tagName="p" value={ item.panelBody } />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        )
    }


}