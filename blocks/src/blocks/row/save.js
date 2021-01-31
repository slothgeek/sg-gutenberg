const { Component } = wp.element;
const { InnerBlocks} = wp.blockEditor;


export default class RowSave extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {className, attributes} = this.props;

        const classes = className != undefined ? className : '';

        const renderContainer = () => {
            return attributes.hasContainer ?
                (
                    <div id={ attributes.id } className="container" >
                        {
                            attributes.itsSection ?
                                (
                                    <section className="row" style={ attributes.style}>
                                        <InnerBlocks.Content />
                                    </section>
                                ) :

                                (
                                    <div className="row" style={ attributes.style}>
                                        <InnerBlocks.Content />
                                    </div>
                                )
                        }
                    </div>
                ) :
                (
                    attributes.itsSection ?
                        (
                            <section id={ attributes.id }  className={`row ${ classes }`} style={ attributes.style}>
                                <InnerBlocks.Content />
                            </section>
                        ) :

                        (
                            <div id={ attributes.id }  className={`row ${ classes }`} style={ attributes.style}>
                                <InnerBlocks.Content />
                            </div>
                        )
                )
        }

        const renderRow = () => {
            return
        }

        return ( renderContainer() );
    }


}