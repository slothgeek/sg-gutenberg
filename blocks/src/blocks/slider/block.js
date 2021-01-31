const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/slider', {
    id:'',
    title: 'Slider',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
        indicators: {
            default:false
        },
        height:  {
            default:400
        },
        unitHeight:{
            default:"px"
        },
        duration: {
            default:500
        },
        interval: {
            default:6000
        },
        items: {
            type: 'array',
            default:[]
        }
    },

    edit,

    save

});