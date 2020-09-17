const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/pricingtable', {
    title: 'Pricing Table',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
        icon:{
            type: 'string'
        },
        title:{
            type: 'string',
            default: 'Plan'
        },
        currency:{
            type: 'string',
            default: '$'
        },
        price:{
            type: 'string',
            default: '10'
        },
        cents:{
            type: 'string',
            default: '99'
        },
        features:{
            type: 'array',
            default:[]
        }
    },

    edit,

    save

});