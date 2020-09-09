const { Component } = wp.element;

export default class SlothGeekGallerySave extends Component {
    constructor() {
        super( ...arguments );
    }

    render() {

        const {attributes} = this.props;

        return (
            <div className="sg-items" style={{height: attributes.height}}>
                {
                    attributes.items.map(item => {

                        return(
                            [
                                <a className="sg-item modal-trigger" style={item.style} href={`#hg${item.index}`}>
                                    <img src={item.graphicUrl} alt={item.graphicAlt}/>
                                    <div className="pulse"></div>
                                </a>,
                                <div id={`hg${item.index}`} className="modal">
                                    <div className="modal-content sg-modal-content">
                                        <div className="sg-modal-content-body">
                                            <h4>{item.title}</h4>
                                            <p>{item.body}</p>
                                        </div>
                                        <div className="sg-modal-content-graphic">
                                            <img src={item.graphicUrl} alt={item.graphicAlt}/>
                                        </div>
                                    </div>
                                </div>

                            ]

                        )
                    })
                }
            </div>
        )
    }



}