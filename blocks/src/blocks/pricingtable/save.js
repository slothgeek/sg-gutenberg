const { Component } = wp.element;
const { RichText } = wp.blockEditor;

export default class PricingTableSave extends Component {
    constructor() {
        super( ...arguments );
    }

    render_features(){
        const {attributes, setAttributes } = this.props;

        return attributes.features.sort(function(a , b) {
            return a.index - b.index;
        }).map( feature => {

            return(
                <li className={`pricing-feature ${ feature.active ? '' : 'disabled'}`}>
                    { feature.active
                        ? ( <i className="material-icons">done</i> )
                        : ( <i className="material-icons">close</i> )
                    }
                    { feature.text }
                </li>
            )

        } )
    }

    render(){
        const {attributes, setAttributes } = this.props;

        return (
            <div className="pricing-table featured scale-in-out fade-in-out">
                <div className="pricing-header">
                    <div className="symbol">
                        <i className={ `fas ${attributes.icon}`}></i>
                    </div>
                    <RichText.Content
                        tagName="div"
                        className="title"
                        value={ attributes.title }
                    />
                    <div className="price">
                        <RichText.Content
                            tagName="span"
                            className="currency"
                            value={ attributes.currency }
                        />
                        <RichText.Content
                            tagName="span"
                            className="dollars"
                            value={ attributes.price }
                        />
                        <RichText.Content
                            tagName="span"
                            className="cents"
                            value={ attributes.cents }
                        />
                    </div>
                </div>
                <ul className="pricing-features">
                    { this.render_features() }
                </ul>
            </div>
        )
    }


}