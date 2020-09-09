const { registerBlockType } = wp.blocks;
const { TextControl, IconButton, PanelBody, SelectControl, CheckboxControl, ColorPalette } = wp.components;
const { RichText, InspectorControls } = wp.blockEditor;

import  Title  from '../../components/Title';
import  Paragraph  from '../../components/Paragraph';
import  GraphicPicker  from '../../components/GraphicPicker';
import MainColors from '../../helpers/colors'
import './style.scss';
import './editor.scss';


registerBlockType('sg/card', {
    title: 'Card',
    icon: 'star-empty',
    category: 'sg',
    attributes: {
        type:{
            type:'string',
            default: 'basic'
        },
        cardInverse:{
            type:'boolean',
            default:false
        },
        title:{
            type: 'object',
            default: {
                val:'Lorem Ipsum',
                style:{}
            }
        },
        paragraph:{
            type: 'object',
            default: {
                val:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat enim vel ligula suscipit semper. Nunc blandit, magna vitae euismod molestie, nibh neque pulvinar erat, dictum egestas magna urna id arcu.',
                style:{}
            }
        },
        image:{
            type: 'object',
            default: {
                url:'',
                alt:''
            }
        },
        buttons:{
            type: 'array',
            default: []
        },
        floatings:{
            type: 'array',
            default: []
        },
        style:{
            type:'object',
            default:{}
        }
    },

    edit( {attributes, setAttributes} ) {

        const updateButton = (button) => {

            return setAttributes({
                buttons: [].concat(cloneArray(attributes.buttons.filter(function (itemFilter) {
                    return itemFilter.index != button.index;
                })), [button])
            });

        }

        const updateFloating = (button) => {

            return setAttributes({
                floatings: [].concat(cloneArray(attributes.floatings.filter(function (itemFilter) {
                    return itemFilter.index != button.index;
                })), [button])
            });

        }

        const removeFloatingButton = (val) => {
            return setAttributes({
                floatings: attributes.floatings.filter(function (itemFilter) {
                    return itemFilter.index != val;
                })
            });
        }

        const renderFloatings = () => {
            return attributes.floatings.sort(function(a , b) {
                return a.index - b.index;
            }).map( btn => {
                return(
                    <div className="sg-floating">
                        <RichText
                            className="sg-button-label"
                            value={ btn.label }
                            onChange={ value => updateFloating( {...btn, label: value } ) }
                            placeholder='Texto del botón'
                            multiline = {false}
                        />
                        <IconButton
                            icon="admin-links"
                            label="Link"
                            onClick={ () => {
                                let val = btn.displayLink == 'none' ? 'block' : 'none';
                                updateFloating({...btn, displayLink: val} )
                            }
                            }
                        />
                        <IconButton
                            icon="trash"
                            label="Delete"
                            onClick={ () => removeFloatingButton(btn.index)}
                        />
                        <TextControl
                            className="sg-button-href"
                            onChange={ value => updateFloating( {...btn, href: value } ) }
                            value={ btn.href }
                            style={ {display: btn.displayLink} }
                        />
                    </div>
                )
            } )
        }

        const renderButtons = () => {
            return attributes.buttons.sort(function(a , b) {
                return a.index - b.index;
            }).map( btn => {
                return(
                    <div className="sg-button">
                        <RichText
                            className="sg-button-label"
                            value={ btn.label }
                            onChange={ value => updateButton( {...btn, label: value } ) }
                            placeholder='Texto del botón'
                            multiline = {false}
                        />
                        <IconButton
                            icon="admin-links"
                            label="Link"
                            onClick={ () => {
                                let val = btn.displayLink == 'none' ? 'block' : 'none';
                                updateButton({...btn, displayLink: val} )
                            }
                            }
                        />
                        <IconButton
                            icon="trash"
                            label="Delete"
                            onClick={ () => removeLinkButton(btn.index)}
                        />
                        <TextControl
                            className="sg-button-href"
                            onChange={ value => updateButton( {...btn, href: value } ) }
                            value={ btn.href }
                            style={ {display: btn.displayLink} }
                        />
                    </div>
                )
            } )
        }

        const addFloatingButton = () => {
            let btnlink = {
                index: attributes.floatings.length,
                label: 'Add label',
                href:'#',
                displayLink: 'none'
            }

            return setAttributes({
                floatings: [].concat(cloneArray(attributes.floatings), [btnlink])
            });
        }

        const removeLinkButton = (val) => {
            return setAttributes({
                buttons: attributes.buttons.filter(function (itemFilter) {
                    return itemFilter.index != val;
                })
            });
        }

        const addLinkButton = () => {
            let btnlink = {
                index: attributes.buttons.length,
                label: 'Add label',
                href:'#',
                displayLink: 'none'
            }

            return setAttributes({
                buttons: [].concat(cloneArray(attributes.buttons), [btnlink])
            });
        }

        const cloneArray = (arr) => {
            if (Array.isArray(arr)) {
                for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            } else {
                return Array.from(arr);
            }
        }

        const inspectorControl = () =>{

            return(
                <InspectorControls>
                    <PanelBody title='Diseño' initialOpen={false}>
                        <SelectControl
                            label='Card style'
                            value={ attributes.type }
                            onChange={ ( value ) => { setAttributes( { type: value } ) } }
                            options={ [
                                { value: 'basic', label: 'Basic Card' },
                                { value: 'image', label: 'Image Card' },
                            ] }
                        />
                        <CheckboxControl
                            label="Inverse"
                            checked={ attributes.cardInverse }
                            onChange={ (value) => setAttributes( { cardInverse: value } ) }
                        />
                        <ColorPalette
                            colors = { MainColors }
                            value={ attributes.style.backgroundColor }
                            onChange={ ( value ) => {
                                setAttributes( { style : { ...attributes.style, backgroundColor:`${value}` } });
                            } }
                        />
                    </PanelBody>
                </InspectorControls>
            )
        }

        const getBasicCard = () => {

            return (
                <div className="card" style={attributes.style}>
                    <div className="card-content">
                        <Title
                            className="card-title"
                            type="h3"
                            onChange={value => setAttributes({ title: value })}
                            value={ attributes.title.val }
                            style={ attributes.title.style }
                            placeholder="Agrega un título"
                        />
                        <Paragraph
                            type="p"
                            onChange={value => setAttributes({ paragraph: value })}
                            value={ attributes.paragraph.val }
                            style={ attributes.paragraph.style }
                            placeholder="Agrega aquí el cuerpo de la tarjeta"
                        />
                    </div>
                    <div className="card-action">
                        <IconButton
                            className="add-card-action"
                            icon="plus-alt"
                            label="More"
                            onClick={ () => addLinkButton()}
                        />
                        {
                            attributes.buttons.sort(function(a , b) {
                                return a.index - b.index;
                            }).map( btn => {
                                return(
                                    <div className="sg-button">
                                        <RichText
                                            className="sg-button-label"
                                            value={ btn.label }
                                            onChange={ value => updateButton( {...btn, label: value } ) }
                                            placeholder='Texto del botón'
                                            multiline = {false}
                                        />
                                        <IconButton
                                            icon="admin-links"
                                            label="Link"
                                            onClick={ () => {
                                                let val = btn.displayLink == 'none' ? 'block' : 'none';
                                                updateButton({...btn, displayLink: val} )
                                            }
                                            }
                                        />
                                        <IconButton
                                            icon="trash"
                                            label="Delete"
                                            onClick={ () => removeLinkButton(btn.index)}
                                        />
                                        <TextControl
                                            className="sg-button-href"
                                            onChange={ value => updateButton( {...btn, href: value } ) }
                                            value={ btn.href }
                                            style={ {display: btn.displayLink} }
                                        />
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>
            )
        }

        const getImageCard = () => {
            const cardImage = (
                <div className="card-image">
                    <GraphicPicker
                        onChange={ media => setAttributes( { image: media } ) }
                        url={attributes.image.url}
                        alt={attributes.image.alt}
                    />
                    <div className="floating-area">
                        <IconButton
                            className="add-floating-action"
                            icon="plus-alt"
                            label="More"
                            onClick={ () => addFloatingButton()}
                        />
                        {renderFloatings()}
                    </div>

                </div>
            )

            const cardContent = (
                <div className="card-content">
                    <Title
                        className="card-title"
                        type="h3"
                        onChange={value => setAttributes({ title: value })}
                        value={ attributes.title.val }
                        style={ attributes.title.style }
                        placeholder="Agrega un título"
                    />
                    <Paragraph
                        type="p"
                        onChange={value => setAttributes({ paragraph: value })}
                        value={ attributes.paragraph.val }
                        style={ attributes.paragraph.style }
                        placeholder="Agrega aquí el cuerpo de la tarjeta"
                    />
                </div>
            )

            const renderContent = () => {
                if(attributes.cardInverse){
                    return ([
                        cardContent,
                        cardImage
                    ])
                }else{
                    return ([
                        cardImage,
                        cardContent

                    ])
                }
            }

            return (
                <div className="card" style={attributes.style}>
                    { renderContent() }
                    <div className="card-action">
                        <IconButton
                            className="add-card-action"
                            icon="plus-alt"
                            label="More"
                            onClick={ () => addLinkButton()}
                        />
                        {
                            renderButtons()
                        }
                    </div>
                </div>
            )
        }

        const getCard = () => {

            switch (attributes.type){
                case 'basic':
                    return getBasicCard();
                    break
                case 'image':
                    return getImageCard();
                    break
                default:
                    break;
            }
        }

        return ([
                inspectorControl(),
                <div className="wp-block-sg-card">
                    { getCard() }
                </div>
            ]

        );
    },

    save({attributes}) {

        const getCardActions = () => {

            if(attributes.buttons.length > 0){
                return(
                    <div className="card-action">
                        {
                            attributes.buttons.map(button => {
                                return (
                                    <a href={button.href}>{button.label}</a>
                                )
                            })
                        }
                    </div>
                )
            }

        }

        const getFloatingActions = () => {

            if(attributes.floatings.length > 0){
                return(

                    attributes.floatings.map(button => {
                        return (
                            <a className={ `btn-floating halfway-fab waves-effect waves-light no-radius auto-width ${ attributes.cardInverse ? 'top' : ''}` } href={button.href}>{button.label}</a>
                        )
                    })

                )
            }

        }

        const getBasicCard = () => {
            return(
                <div className="card" style={attributes.style}>
                    <div className="card-content">
                        <RichText.Content
                            tagName='h3'
                            className='card-title'
                            value={ attributes.title.val }
                            style={attributes.title.style}
                        />
                        <div style={attributes.paragraph.style}>
                            <RichText.Content
                                value={ attributes.paragraph.val }
                            />
                        </div>

                    </div>
                    { getCardActions() }
                </div>
            )
        }

        const getImageCard = () => {
            const cardImage = (
                <div className="card-image">
                    <img src={attributes.image.url} alt={attributes.image.alt}/>
                    {getFloatingActions()}
                </div>
            )

            const cardContent = (
                <div className="card-content">
                    <RichText.Content
                        tagName='h3'
                        className='card-title'
                        value={ attributes.title.val }
                        style={attributes.title.style}
                    />
                    <div style={attributes.paragraph.style}>
                        <RichText.Content
                            value={ attributes.paragraph.val }
                        />
                    </div>
                </div>
            )

            const renderContent = () => {
                if(attributes.cardInverse){
                    return ([
                        cardContent,
                        cardImage
                    ])
                }else{
                    return ([
                        cardImage,
                        cardContent

                    ])
                }
            }

            return(
                <div className="card" style={attributes.style}>
                    {
                        [
                            renderContent(),
                            getCardActions()
                        ]
                    }
                </div>
            )
        }

        const getCard = () => {

            switch (attributes.type){
                case 'basic':
                    return getBasicCard();
                    break
                case 'image':
                    return getImageCard();
                    break
                default:
                    break;
            }
        }

        return(
            getCard()
        )
    }
});



