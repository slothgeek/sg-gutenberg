const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/posts', {
    title: "Últimas entradas",
    icon: 'star-empty',
    category: 'sg',
    keywords: [
        __( 'load' ),
        __( 'Load Post' ),
        __( 'guten-load-post' ),
    ],
    attributes:{
        type: {
            type: 'string',
            default: 1
        },
        columns:{
            type:"number",
            default: 3
        },
        post_per_page: {
            type: "number",
            default: 6
        },
        height: {
            type: "number",
            default: 200
        },
        category_selected: {
            type: "array",
            default: []
        },
        action_post:{
            type:"string",
            default:"Ver más..."
        },
        filter:{
            type:"string",
            default:""
        }
    },

    edit,

    save(){
        return null
    }

});