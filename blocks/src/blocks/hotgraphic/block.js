const { registerBlockType } = wp.blocks;

const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/hotgraphic', {
    title: 'HotGraphic',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
        height:{
            type:'string',
            default: '400px'
        },
        items: {
            type: 'array',
            default:[]
        }
    },

    edit,

    save

});