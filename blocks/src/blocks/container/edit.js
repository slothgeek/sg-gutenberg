import Box from "../../components/Box";

const { InnerBlocks } = wp.editor;
const { Component } = wp.element;

export default class SlothGeekGalleryEdit extends Component {
    constructor() {
        super( ...arguments );
    }

    render(){
        const {attributes, setAttributes, className} = this.props;

        return (
            [
                <div className={ className } >
                    <Box
                        className="sg-container"
                        panelTitle="Estilo"
                        onChangeStyle={ value =>
                        {
                            setAttributes({style:value})
                        }}
                        onChangeClasses = { value => setAttributes( {classes:value} )}
                        render={ (
                            <InnerBlocks
                                renderAppender={
                                    InnerBlocks.ButtonBlockAppender
                                }
                            />
                        ) }
                        onChangeAnimation = { value => {setAttributes( {animation:value} ); } }
                        style={ attributes.style }
                        animation = { attributes.animation }
                        classes = { attributes.classes }
                    />

                </div>
            ]
        )
    }
}