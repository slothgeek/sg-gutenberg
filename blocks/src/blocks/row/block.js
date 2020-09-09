const { registerBlockType } = wp.blocks;

import edit from './edit';
import save from './save';

import './editor.scss'
import './style.scss'

registerBlockType( 'sg/row', {
    title: 'Row',
    icon: 'star-empty',
    category: 'sg',
    attributes: {
        itsSection:{
            type:'boolean',
            default:false
        },
        hasContainer:{
            type:'boolean',
            default:false
        },
        style:{
            type: 'object',
            default: {}
        }
    },

    edit,

    save
} );