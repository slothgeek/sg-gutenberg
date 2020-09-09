const { registerBlockType } = wp.blocks;

import edit from './edit';
import save from './save';

import './style.scss';
import './editor.scss';

registerBlockType('sg/tabs', {
    title: 'Tabs',
    icon: 'star-empty',
    category: 'sg',
    attributes: {
        items: {
            source: 'query',
            default: [],
            selector: '.tab',
            query: {
                index: {
                    type: 'number',
                    source: 'attribute',
                    attribute: 'data-index'
                },
                title: {
                    type: 'string',
                    source: 'text',
                    selector: '.tab-title'
                },
                icon: {
                    type: 'string',
                    source: 'attribute',
                    attribute: 'data-icon',
                    selector: '.tab-icon'
                },
                actionText: {
                    type: 'string',
                    source: 'text',
                    selector: '.tab-actiontext'
                }
            }
        },
        bodyItems:{
            source: 'query',
            default: [],
            selector: '.tab-content',
            query: {
                index: {
                    type: 'number',
                    source: 'attribute',
                    attribute: 'data-index'
                },
                title: {
                    type: 'string',
                    source: 'text',
                    selector: '.tab-body-title'
                },
                subtitle: {
                    type: 'string',
                    source: 'text',
                    selector: '.tab-body-subtitle'
                },
                body:{
                    type: 'array',
                    source: 'children',
                    selector: '.tab-body-content'
                },
                buttonText:{
                    type: 'string',
                    source: 'text',
                    selector: '.tab-body-button'
                },
                buttonAction:{
                    source: 'attribute',
                    attribute: 'href',
                    selector: '.tab-body-button'
                },
                imageUrl: {
                    source: 'attribute',
                    attribute: 'data-img',
                    selector: '.tab-body-graphic'
                },
            }
        }
    },

    edit,

    save
});

