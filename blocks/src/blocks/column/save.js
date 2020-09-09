const { Component } = wp.element;
const { InnerBlocks} = wp.blockEditor;


export default class RowSave extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {className, attributes} = this.props;

        return (
            <div
                className={`col ${className} ${attributes.small} ${attributes.medium} ${attributes.large} ${attributes.offsetSmall} ${attributes.offsetMedium} ${attributes.offsetLarge}`}
                style={ attributes.style}
            >
                <InnerBlocks.Content />
            </div>

        );
    }


}