const { Component } = wp.element;
const { RichText } = wp.editor;
const { TextControl, PanelBody, RangeControl, ColorPalette, Button, Icon } = wp.components;
const { InspectorControls } = wp.editor;

import CommonStyle from "./helpers/CommonStyle";

export default class TheButton extends Component {

    constructor() {
        super(...arguments);

        this.state = {
            style: {},
            panel:{
                shape:{height:0},
                font:{height:0},
                margin:{height:0},
                padding:{height:0},
            }
        }
    }

    componentDidMount(){
        const { style } = this.props;
        if(style){
            this.setState( {style: style} );
        }
    }

    render(){

        const { label, url, onChangeText, onChangeUrl } = this.props;

        const  { style } = this.state;

        const inspectorControls = CommonStyle(this.state, this.props, this.setState.bind(this));

        return ([
            inspectorControls,
            <div className="sg-action" style={style}>
                <RichText
                    value={ label }
                    onChange={ value => onChangeText(value) }
                    placeholder='Texto del botón'
                    multiline = {false}
                />
                <TextControl
                    className="sg-action-url"
                    onChange={ value => onChangeUrl(value) }
                    value={ url }
                />
            </div>
        ])
    }

}
