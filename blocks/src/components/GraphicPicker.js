const { Component } = wp.element;
const { MediaUpload } = wp.blockEditor;
const { IconButton } = wp.components;

export default class GraphicPicker extends Component {

    constructor() {
        super(...arguments);
    }

    getImageButton(openEvent, url, alt, onChange) {
        if(url) {
            return (
                <div className='graphic-picker'>
                    <img
                        src={ url }
                        className="image"
                        alt={alt}
                    />
                    <div className="sg-toolbar">
                        <IconButton
                            icon="edit"
                            label="Edit"
                            onClick={ openEvent }
                        />
                        <IconButton
                            icon="trash"
                            label="Delete"
                            onClick={ (media) => onChange('')     }
                        />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="graphic-picker-no-image"  >
                    <IconButton
                        onClick={ openEvent }
                        icon="format-image"
                        label="Agregar"
                    />
                </div>

            );
        }
    };

    render() {
        const {url, alt, onChange} = this.props;

        return (
            <MediaUpload
                className="center-align"
                onSelect={ (media) => onChange(media) }
                type="image"
                render={ ({ open }) => this.getImageButton(open, url, alt, onChange) }
            />
        )
    }
}