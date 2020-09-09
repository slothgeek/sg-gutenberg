const { Button, SelectControl, IconButton, ColorPalette } = wp.components;
const { MediaUpload } = wp.blockEditor;

import { sanitizeStyle } from '../helpers/utilities';
import MainColors from '../helpers/colors';

export default function EditBackground({attributes, setAttributes}){

    /**
     * Renderiza el botón o la imagen en el sidebar de edición
     *
     * @param open
     * @returns {JSX.Element|JSX.Element[]}
     */
    const backgroundImageButtons = (open) => {

        if (attributes.style.backgroundImage !== '' && attributes.style.backgroundImage !== undefined) {
            return (
                <div className="components-base-control">
                    <img src={attributes.style.backgroundImage.slice(4,-1)} alt="" style={{width:'100%'}}/>
                    <div className="sg-toolbar">
                        <IconButton
                            icon="edit"
                            label="Edit"
                            onClick={ open }
                        />
                        <IconButton
                            icon="trash"
                            label="Delete"
                            onClick={()=>{
                                let newStyle = { ...attributes.style, backgroundImage:'' };
                                setAttributes( { style : newStyle } );
                            }}
                        />
                    </div>

                </div>
            )
        }else{
            sanitizeStyle({attributes, setAttributes}, 'backgroundImage');

            return(
                <div className="components-base-control">
                    <div className="no-image"></div>
                    <Button
                        onClick={ open }
                        className="sg-button full button"
                    >
                        Agregar
                    </Button>
                </div>
            )
        }
    }

    return(
        <div className='sg-style-edit-background'>
            <div>
                <label>Color de Fondo</label>
                <ColorPalette
                    colors = { MainColors }
                    value={attributes.style.backgroundColor}
                    onChange={(value) => {
                        setAttributes({style: {...attributes.style, backgroundColor: `${value}`}});
                        sanitizeStyle({attributes, setAttributes}, 'backgroundColor', value);
                    }}
                />
            </div>
            <div>
                <label>Imagen de Fondo</label>
                <MediaUpload
                    type="Imagen"
                    value={ attributes.style.backgroundImage }
                    onSelect={ media => {
                        setAttributes(  { style: {...attributes.style, backgroundImage:`url(${media.url})` } } );
                    }
                    }
                    render={ ({ open }) => backgroundImageButtons(open)}
                />
            </div>

            <SelectControl
                label="Tamaño"
                value={ attributes.style.backgroundSize }
                options={ [
                    { label: '', value: '' },
                    { label: 'cover', value: 'cover' },
                    { label: 'contain', value: 'contain' },
                    { label: 'auto', value: 'auto' },
                ] }
                onChange={ ( value ) => {
                    setAttributes({ style: { ...attributes.style, backgroundSize:value } });
                    sanitizeStyle({attributes, setAttributes}, 'backgroundSize', value);
                    }
                }
            />
            <SelectControl
                label="Repetir"
                value={ attributes.style.backgroundRepeat }
                options={ [
                    { label: '', value: '' },
                    { label: 'no-repeat', value: 'no-repeat' },
                    { label: 'repeat', value: 'repeat' },
                ] }
                onChange={ ( value ) => {
                    setAttributes({ style: { ...attributes.style, backgroundRepeat:value } });
                    sanitizeStyle({attributes, setAttributes},'backgroundRepeat', value);
                } }
            />
            <SelectControl
                label="Posición"
                value={ attributes.style.backgroundPosition }
                options={ [
                    { label: '', value: '' },
                    { label: 'center', value: 'center' },
                    { label: 'top ', value: 'top' },
                    { label: 'right', value: 'right' },
                    { label: 'left ', value: 'left' },

                    { label: 'center top', value: 'center top' },
                    { label: 'center right', value: 'center right' },
                    { label: 'center bottom', value: 'center bottom' },
                    { label: 'center left', value: 'center left' },

                    { label: 'top right', value: 'top right' },
                    { label: 'top left', value: 'top left' },
                    { label: 'top center', value: 'top center' },

                    { label: 'bottom right', value: 'bottom right' },
                    { label: 'bottom left', value: 'bottom left' },
                    { label: 'bottom center', value: 'bottom center' },

                    { label: 'left center', value: 'left center' },
                    { label: 'left top', value: 'left top' },
                    { label: 'left bottom', value: 'left bottom' },

                    { label: 'right center', value: 'right center' },
                    { label: 'right top', value: 'right top' },
                    { label: 'right bottom', value: 'right bottom' },

                ] }
                onChange={ ( value ) => {
                    setAttributes({ style: { ...attributes.style, backgroundPosition:value } });
                    sanitizeStyle({attributes, setAttributes},'backgroundPosition', value);
                } }
            />
            <SelectControl
                label="Fijación"
                value={ attributes.style.backgroundAttachment }
                options={ [
                    { label: '', value: '' },
                    { label: 'fixed', value: 'fixed' },
                ] }
                onChange={ ( value ) => {
                    setAttributes({ style: { ...attributes.style, backgroundAttachment:value } });
                    sanitizeStyle({attributes, setAttributes},'backgroundAttachment', value);
                } }
            />
        </div>
    )
}