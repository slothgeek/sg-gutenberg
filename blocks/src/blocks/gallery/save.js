const { Component } = wp.element;

export default class SlothGeekGallerySave extends Component {
    constructor() {
        super( ...arguments );
    }

    renderItem(item, index){

        const columnWidth = ( 100/this.props.attributes.grid_count );

        return(
            <div className="sg-item" data-index={index} style={ { width:`${columnWidth}%` } } >
                <a className="sg-item-link" href={item.url} target="_blank" rel="noopener noreferrer">
                    <img className="sg-item-graphic" src={item.imageUrl} alt={item.imageAlt}/>
                </a>
            </div>
        )
    }

    render(){
        const {attributes} = this.props;

        return (
            <div className="sg-gallery col s12">
                <div className="sg-gallery-inner" data-count={attributes.grid_count}>
                    {
                        attributes.items.map((item, index) => this.renderItem(item, index))
                    }
                </div>
            </div>
        )
    }


}