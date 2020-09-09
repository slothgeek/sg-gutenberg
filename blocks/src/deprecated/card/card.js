const { RichText } = wp.editor;
const { registerBlockType } = wp.blocks;

import  GraphicPicker  from '../../components/GraphicPicker';
import  Title  from '../../components/Title';
import  Paragraph  from '../../components/Paragraph';
import  Box  from '../../components/Box';
import  TheButton  from '../../components/TheButton';

import './style.scss';
import './editor.scss';


registerBlockType('sg/card', {
    title: 'Card',
    icon: 'star-empty',
    category: 'sg',
    attributes: {
        title: {
            type:'string',
            selector: '.sg-item-body-content-title'
        },
        titleStyle:{
            attribute: 'object',
        },
        body: {
            type: 'array',
            source: 'children',
            selector: '.sg-item-body-content'
        },
        bodyStyle:{
            attribute: 'object',
        },
        graphicAlt: {
            attribute: 'alt',
            selector: '.sg-item-graphic'
        },
        graphicUrl: {
            attribute: 'src',
            selector: '.sg-item-graphic'
        },
        actionText:{
            type:'string',
            source: 'html',
            selector:'.sg-item-action'
        },
        actionUrl:{
            type:'string',
            attribute: 'href',
            selector:'.sg-item-action'
        },
        boxStyle:{
            attribute: 'object',
        },
        actionStyle:{
            attribute: 'object',
        },
    },

    edit({ attributes, setAttributes }) {

        const boxContent =  (
            <div>
                <Title
                    panelTitle="Título"
                    type="div"
                    onChange={value => setAttributes({ title: value })}
                    onChangeStyle={ value =>
                    {
                        setAttributes({titleStyle:value})
                    }}
                    value={ attributes.title }
                    placeholder="Título"
                    style={ attributes.titleStyle }
                />
                <Paragraph
                    panelTitle="Párrafo"
                    type="div"
                    onChange={value => setAttributes({ body: value })}
                    onChangeStyle={ value =>
                    {
                        setAttributes({bodyStyle:value})
                    }}
                    value={ attributes.body }
                    placeholder="Párrafo"
                    style={ attributes.bodyStyle }
                />
                <div className="sg-item-action">
                   <TheButton
                       panelTitle="Botón"
                       label={attributes.actionText}
                       url={attributes.actionUrl}
                       style={attributes.actionStyle}
                       target=""
                       onChangeText = { value => setAttributes({ actionText:value })}
                       onChangeUrl = { value => setAttributes({ actionUrl:value })}
                       onChangeStyle={ value =>
                       {
                           setAttributes({actionStyle:value})
                       }}
                   />
                </div>
            </div>

        );

        return (
            <div className="wp-block-sg-card">
                <div className="sg-item">
                    <div className="sg-item-graphic">
                        <GraphicPicker
                            className="sg-item-graphic"
                            onChange={ media => setAttributes({ graphicUrl: media.url, graphicAlt: media.alt }) }
                            url={attributes.graphicUrl}
                            alt={attributes.graphicAlt}
                        />
                    </div>
                    <Box
                        className="sg-item-body"
                        panelTitle="Box"
                        onChangeStyle={ value =>
                        {
                            setAttributes({boxStyle:value})
                        }}
                        render={ boxContent }
                        style={ attributes.boxStyle }
                    />
                </div>
            </div>
        );

    },

    save({ attributes }) {

        return(
            <div className="sg-item">
                <div className="sg-item-graphic">
                    <img
                        className="sg-item-graphic"
                        src={attributes.graphicUrl}
                        alt={attributes.graphicAlt}
                    />
                </div>
                <div className="sg-item-body" style={attributes.boxStyle}>
                    <RichText.Content className="sg-item-body-title" tagName='div' value={ attributes.title } style={attributes.titleStyle}/>
                    <div className="sg-item-body-content">
                        <RichText.Content value={ attributes.body } />
                    </div>
                    <a className="btn waves-effect waves-light sg-item-action" href={attributes.actionUrl} style={attributes.actionStyle} >{attributes.actionText}</a>
                </div>

            </div>
        )
    }
});

