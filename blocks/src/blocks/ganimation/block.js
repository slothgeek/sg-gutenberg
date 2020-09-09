const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/ganimation', {
    title: 'Graphic Stack',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
        id:{
            default:""
        },
        items: {
            default:[]
        },
        height:{
            default:"600px"
        },
        maxWidth:{
            default:"550px"
        },
        animation:{
            default:""
        },
        duration:{
            default:""
        },
        delay:{
            default:""
        },
    },

    edit,

    save

});