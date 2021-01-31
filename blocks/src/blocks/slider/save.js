const { Component } = wp.element;

export default class Save extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {attributes} = this.props;
        return (
            <div>
                <div
                    className="sg-slider slider"
                    data-indicators={attributes.indicators}
                    data-height={attributes.height}
                    data-duration={attributes.duration}
                    data-interval={attributes.interval}
                >
                    <ul className="slides">
                        {
                            attributes.items.map( item => {

                                return(
                                    <li>
                                        <img src={item.graphic.src} alt={item.graphic.alt} />
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

        )
    }


}