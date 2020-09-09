const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import edit from './edit';
import save from './save';

import './editor.scss';
import './style.scss';

registerBlockType( 'sg/block', {
    title: 'Block',
    icon: 'star-empty',
    category: 'sg',
    attributes:{
    },

    edit,

    save

});