const { Component } = wp.element;

export default class SlothGeekGallerySave extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {attributes} = this.props;

        return (
            <div id={attributes.id} className="wp-block-sg-ganimation sg-items" style={{height: attributes.height, maxWidth: attributes.maxWidth}}>
                {
                    attributes.items.map((item,index) => {

                        return(
                            [
                                <div id={item.id} className="sg-item" style={item.style} data-animation={item.animation} >
                                    <img src={item.graphicUrl} alt={item.graphicAlt}/>
                                </div>
                            ]

                        )
                    })
                }
            </div>
        )
    }


}