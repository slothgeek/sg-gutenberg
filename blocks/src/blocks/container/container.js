const { registerBlockType } = wp.blocks;

const className = 'col';

import edit from './edit';
import save from './save';

import './editor.scss'
import './style.scss'

registerBlockType( 'sg/cotainer', {
    title: 'Container',
    icon: 'star-empty',
    category: 'sg',
    attributes: {
        style:{
        },
        classes:{
        },
        animation: {
            default:{}
        }
    },

    edit,

    save
} );