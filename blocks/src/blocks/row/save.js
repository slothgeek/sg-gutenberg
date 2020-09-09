const { Component } = wp.element;
const { InnerBlocks} = wp.blockEditor;


export default class RowSave extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {className, attributes} = this.props;

        const renderContainer = () => {
            return attributes.hasContainer ?
                (
                    <div className="container">
                        {renderRow()}
                    </div>
                ) :
                (
                    renderRow()
                )
        }

        const renderRow = () => {
            return attributes.itsSection ?
                (
                    <section className={`row ${className}`} style={ attributes.style}>
                        <InnerBlocks.Content />
                    </section>
                ) :

                (
                    <div className={`row ${className}`} style={ attributes.style}>
                        <InnerBlocks.Content />
                    </div>
                )
        }

        return ( renderContainer() );
    }


}