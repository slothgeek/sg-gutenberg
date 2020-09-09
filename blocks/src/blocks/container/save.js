const { Component } = wp.element;
const { InnerBlocks} = wp.editor;


export default class SlothGeekGallerySave extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {attributes} = this.props;
        const title = typeof attributes.animation.title !== 'undefined' ?  attributes.animation.title : '';
        const titleDuration =  typeof attributes.animation.titleDuration !== 'undefined' ?  attributes.animation.titleDuration : '';
        const item = typeof attributes.animation.item !== 'undefined' ?  attributes.animation.item : '';
        const itemDuration = typeof attributes.animation.itemDuration !== 'undefined' ?  attributes.animation.itemDuration : '';
        const itemDurationBetween = typeof attributes.animation.itemDurationBetween !== 'undefined' ?  attributes.animation.itemDurationBetween : '';

        return (
            <div
                className="col s12"
                style={attributes.style}
                data-title={ title }
                data-titleDuration={ titleDuration }
                data-item={ item }
                data-itemDuration={ itemDuration }
                data-itemDurationBetween={ itemDurationBetween }
            >
                <div className="filterImage" style={{backgroundColor:attributes.filterBackgroundImage}}></div>
                <div id="sg-block" className={attributes.classes}>
                    <InnerBlocks.Content />
                </div>

            </div>
        );
    }


}