import CommonStyle from "./helpers/CommonStyle";

const { Component } = wp.element;


export default class Box extends Component {

    constructor() {
        super(...arguments);

        this.state = {
            style: {},
            classes:'col s12',
            panel:{
                shape:{height:0},
                font:{height:0},
                margin:{height:0},
                padding:{height:0},
                background:{height:0},
                classes:{height:0},
                animation:{height:0}
            },
            animation: {
                title:'none',
                titleDuration:1,
                item:'none',
                itemDuration:1,
                itemDurationBetween:1
            }
        }
    }

    componentDidMount(){
        const { style, classes, animation } = this.props;

        if(style){
            this.setState( {style: style} );
        }

        console.log(classes)
        if(classes){
            this.setState( { classes: classes} );
        }

        if(typeof animation !== 'undefined'){
            this.setState( {animation: animation} );
        }
    }

    render(){

        const { render, className} = this.props;

        const  { style } = this.state;

        const inspectorControls = CommonStyle(this.state, this.props, this.setState.bind(this));

        return([
                inspectorControls,
                <div className={className} style={style}>
                    {render}
                </div>
            ]
        )

    }
}

