const { registerBlockType } = wp.blocks;

import edit from './edit';
import save from './save';

import './editor.scss'
import './style.scss'

registerBlockType( 'sg/column', {
    title: 'Column',
    icon: 'star-empty',
    category: 'sg',
    attributes: {
        hasContainer:{
            type:'boolean',
            default:false
        },
        small:{
            type:'string',
            default:'s12'
        },
        medium:{
            type:'string',
            default:''
        },
        large:{
            type:'string',
            default:''
        },
        offsetSmall:{
            type:'string',
            default:''
        },
        offsetMedium:{
            type:'string',
            default:''
        },
        offsetLarge:{
            type:'string',
            default:''
        },
        style:{
            type: 'object',
            default: {}
        }
    },

    edit,

    save
} );