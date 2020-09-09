const {Component} = wp.element;
const {InspectorControls, RichText, BlockControls, AlignmentToolbar} = wp.blockEditor;
const {PanelBody, RangeControl, ColorPalette, TextControl} = wp.components;

import MainColors from '../helpers/colors';

export default class Paragraph extends Component {

    constructor() {
        super();
        this.state = {
            val: '',
            style: {
                fontSize: '18px',
                color: '#00000',
                textAlign: 'left',
                margin: '0 0 0 0',
                padding: '0 0 0 0',
            },

        }
    }

    componentDidMount() {
        const {value, style} = this.props;

        this.setState({val: value});

        if (style.margin != undefined) {
            this.setState({style: style});
        }
    }

    updateMP(array, value, index) {
        let newValue = array.split(' ');
        newValue[index] = `${value}`;
        return newValue.join(' ');
    }

    render() {

        const {onChange, value, placeholder} = this.props;

        const {style} = this.state;

        return ([
                <BlockControls>
                    <AlignmentToolbar
                        value={style.textAlign}
                        onChange={value => {
                            this.setState({style: {...style, textAlign: value}}, () => onChange(this.state));
                        }}

                    />
                </BlockControls>,
                <InspectorControls>
                    <PanelBody title='Párrafo' initialOpen={false}>
                        <RangeControl
                            label="Tamaño"
                            value={parseInt(style.fontSize)}
                            onChange={(value) => {
                                this.setState({style: {...style, fontSize: `${value}px`}}, () => onChange(this.state));
                            }}
                            min={0}
                            max={100}
                        />
                        <label htmlFor="title-text-color">Color de texto</label>
                        <div className="title-text-color">
                            <ColorPalette
                                colors = { MainColors }
                                value={style.color}
                                onChange={(value) => {
                                    this.setState({style: {...style, color: `${value}`}}, () => onChange(this.state));
                                }}
                            />
                        </div>
                        <label htmlFor="title-spacing">Espaciado</label>
                        <div className="dimension-control title-spacing">
                            <div className="margin">
                                <div className="dimension-input top">
                                    <TextControl
                                        value={style.margin.split(' ')[0]}
                                        onChange={(value) => {
                                            this.setState({
                                                style: {
                                                    ...style,
                                                    margin: this.updateMP(style.margin, value, 0)
                                                }
                                            }, () => onChange(this.state));
                                        }}
                                    />
                                </div>
                                <div className="dimension-input right">
                                    <TextControl
                                        value={style.margin.split(' ')[1]}
                                        onChange={(value) => {
                                            this.setState({
                                                style: {
                                                    ...style,
                                                    margin: this.updateMP(style.margin, value, 1)
                                                }
                                            }, () => onChange(this.state));
                                        }}
                                    />
                                </div>
                                <div className="dimension-input bottom">
                                    <TextControl
                                        value={style.margin.split(' ')[2]}
                                        onChange={(value) => {
                                            this.setState({
                                                style: {
                                                    ...style,
                                                    margin: this.updateMP(style.margin, value, 2)
                                                }
                                            }, () => onChange(this.state));
                                        }}
                                    />
                                </div>
                                <div className="dimension-input left">
                                    <TextControl
                                        value={style.margin.split(' ')[3]}
                                        onChange={(value) => {
                                            this.setState({
                                                style: {
                                                    ...style,
                                                    margin: this.updateMP(style.margin, value, 3)
                                                }
                                            }, () => onChange(this.state));
                                        }}
                                    />
                                </div>
                                <div className="padding">
                                    <div className="dimension-input top">
                                        <TextControl
                                            value={style.padding.split(' ')[0]}
                                            onChange={(value) => {
                                                this.setState({
                                                    style: {
                                                        ...style,
                                                        padding: this.updateMP(style.padding, value, 0)
                                                    }
                                                }, () => onChange(this.state));
                                            }}
                                        />
                                    </div>
                                    <div className="dimension-input right">
                                        <TextControl
                                            value={style.padding.split(' ')[1]}
                                            onChange={(value) => {
                                                this.setState({
                                                    style: {
                                                        ...style,
                                                        padding: this.updateMP(style.padding, value, 1)
                                                    }
                                                }, () => onChange(this.state));
                                            }}
                                        />
                                    </div>
                                    <div className="dimension-input bottom">
                                        <TextControl
                                            value={style.padding.split(' ')[2]}
                                            onChange={(value) => {
                                                this.setState({
                                                    style: {
                                                        ...style,
                                                        padding: this.updateMP(style.padding, value, 2)
                                                    }
                                                }, () => onChange(this.state));
                                            }}
                                        />
                                    </div>
                                    <div className="dimension-input left">
                                        <TextControl
                                            value={style.padding.split(' ')[3]}
                                            onChange={(value) => {
                                                this.setState({
                                                    style: {
                                                        ...style,
                                                        padding: this.updateMP(style.padding, value, 3)
                                                    }
                                                }, () => onChange(this.state));
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>,
                <RichText
                    tagName="p"
                    onChange={(value) => {
                        this.setState({val: value}, () => onChange(this.state))
                        }
                    }
                    value={value}
                    style={style}
                    formattingControls={['bold', 'italic', 'underline']}
                    placeholder={ placeholder }
                />
            ]
        )

    }
}