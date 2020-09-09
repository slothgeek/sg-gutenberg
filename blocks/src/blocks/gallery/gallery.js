const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/gallery', {
    title: 'Gallery',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
        grid_count: {
            source: 'attribute',
            attribute: 'data-count',
            selector: '.sg-gallery-inner',
            default: 3
        },
        items: {
            source: 'query',
            default: [],
            selector: '.sg-item',
            query: {
                index: {
                    type: 'number',
                    source: 'attribute',
                    attribute: 'data-index'
                },
                url:{
                    source: 'attribute',
                    attribute: 'href',
                    selector: '.sg-item-link'
                },
                imageUrl: {
                    source: 'attribute',
                    attribute: 'src',
                    selector: '.sg-item-graphic'
                },
                imageAlt: {
                    source: 'attribute',
                    attribute: 'alt',
                    selector: '.sg-item-graphic'
                }
            }
        }
    },

    edit,

    save

});