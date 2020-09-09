const { TextControl } = wp.components;

import { sanitizeStyle } from '../helpers/utilities';

export default function EditSpaceDimension({attributes, setAttributes}){

    return(
        <div>
            <label htmlFor="title-spacing">Espaciado</label>
            <div className="dimension-control title-spacing">
                <div className="margin">
                    <div className="dimension-input top">
                        <TextControl
                            value = { attributes.style.marginTop }
                            onChange={ ( value ) => {
                                setAttributes( { style : { ...attributes.style, marginTop:value } });
                                sanitizeStyle({attributes, setAttributes}, 'marginTop', value);
                            } }
                        />
                    </div>
                    <div className="dimension-input right">
                        <TextControl
                            value = { attributes.style.marginRight }
                            onChange={ ( value ) => {
                                setAttributes( { style : { ...attributes.style, marginRight:value } });
                                sanitizeStyle({attributes, setAttributes}, 'marginRight', value);
                            } }
                        />
                    </div>
                    <div className="dimension-input bottom">
                        <TextControl
                            value = { attributes.style.marginBottom }
                            onChange={ ( value ) => {
                                setAttributes( { style : { ...attributes.style, marginBottom:value } });
                                sanitizeStyle({attributes, setAttributes}, 'marginBottom', value);
                            } }
                        />
                    </div>
                    <div className="dimension-input left">
                        <TextControl
                            value = { attributes.style.marginLeft }
                            onChange={ ( value ) => {
                                setAttributes( { style : { ...attributes.style, marginLeft:value } });
                                sanitizeStyle({attributes, setAttributes}, 'marginLeft', value);
                            } }
                        />
                    </div>
                    <div className="padding">
                        <div className="dimension-input top">
                            <TextControl
                                value = { attributes.style.paddingTop }
                                onChange={ ( value ) => {
                                    setAttributes( { style : { ...attributes.style, paddingTop:value } });
                                    sanitizeStyle({attributes, setAttributes}, 'paddingTop', value);
                                } }
                            />
                        </div>
                        <div className="dimension-input right">
                            <TextControl
                                value = { attributes.style.paddingRight }
                                onChange={ ( value ) => {
                                    setAttributes( { style : { ...attributes.style, paddingRight:value } });
                                    sanitizeStyle({attributes, setAttributes}, 'paddingRight', value);
                                } }
                            />
                        </div>
                        <div className="dimension-input bottom">
                            <TextControl
                                value = { attributes.style.paddingBottom }
                                onChange={ ( value ) => {
                                    setAttributes( { style : { ...attributes.style, paddingBottom:value } });
                                    sanitizeStyle({attributes, setAttributes}, 'paddingBottom', value);
                                } }
                            />
                        </div>
                        <div className="dimension-input left">
                            <TextControl
                                value = { attributes.style.paddingLeft }
                                onChange={ ( value ) => {
                                    setAttributes( { style : { ...attributes.style, paddingLeft:value } });
                                    sanitizeStyle({attributes, setAttributes}, 'paddingLeft', value);
                                } }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}