const { Component } = wp.element;

class SlothGeekTabs extends Component {

    constructor() {
        super(...arguments);
    }

    render() {

        const itemList = this.props.attributes.items.map(function(item) {

            return(
                <li className="tab item col s4" data-index={item.index}>
                    <a className="" href={`#tab${item.index}`}>
                        <i className={`tab-icon fas ${item.icon}`} data-icon={item.icon}></i>
                        <h5 className="tab-title">{item.title}</h5>
                        <p className="tab-actiontext">{item.actionText}</p>
                    </a>
                </li>
            )
        });

        const itemBody = this.props.attributes.bodyItems.map(function(item) {

            return(
                <div id={`tab${item.index}`} className="tab-content col s12" data-index={item.index}>
                    <div className="tab-body-graphic col s4" data-img={item.imageUrl} style={ { backgroundImage:`url(${item.imageUrl})` } }></div>
                    <div className="tab-body col s6 offset-s2">
                        <div className="tab-body-title">{item.title}</div>
                        <div className="tab-body-subtitle">
                            {item.subtitle}
                        </div>
                        <div className="tab-body-content">
                            {item.body}
                        </div>
                        <div className="tab-body-action">
                            <a href={item.buttonAction} className="tab-body-button btn waves-effect waves-light" type="submit" name="action">
                                {item.buttonText}
                            </a>
                        </div>
                    </div>
                </div>

            )
        });

        return(
            <div className="col s12">
                <ul className="tabs">
                    {itemList}
                </ul>
                {itemBody}
            </div>
        );
    }
}

export default ( SlothGeekTabs );