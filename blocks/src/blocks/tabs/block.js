const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/tabs', {
    title: 'Tabs',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
        type:{
            type:'string',
            default:'column'
        },
        tabAlign:{
            type:'string',
            default:'column'
        },
        panelAlign:{
            type:'string',
            default:'column'
        },
        items: {
            type: 'array',
            default:[]
        }
    },

    edit,

    save

});