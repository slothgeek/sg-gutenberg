<?php


class Class_SG_Gutenberg
{
    var $plugin_url;

    public function __construct()
    {
        $this->sg_hooks();
        $this->plugin_url = plugin_dir_url(dirname(__FILE__));
    }

    public function sg_hooks(){
        add_filter('block_categories', array($this, 'sg_custom_gutenberg_categories'), 10, 2);
        add_action('enqueue_block_editor_assets', array($this, 'sg_gutenberg_components'));
        add_action('wp_enqueue_scripts', array($this, 'sg_gutenberg_styles'));
        add_action('after_setup_theme', array($this, 'sg_setup_theme_supported_features' ));
        add_action('after_setup_theme', array($this, 'add_materialize_to_gutenberg'));
    }

    public function sg_custom_gutenberg_categories($categories)
    {
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'sg',
                    'title' => __('SlothGeek Componentes', 'sg'),
                ),
            )
        );
    }

    function sg_gutenberg_components()
    {
        wp_enqueue_script(
            'sg-blocks',
            $this->plugin_url . 'blocks/dist/blocks.build.js',
            array('wp-blocks', 'wp-block-editor', 'wp-element', 'wp-i18n', 'wp-data', 'wp-api-fetch', 'wp-url', 'wp-compose'),
            true
        );
        if (is_admin()) {
            wp_enqueue_style(
                'sg-blocks-edit-style',
                $this->plugin_url . 'blocks/dist/blocks.editor.build.css',
                array('wp-edit-blocks')
            );
            wp_enqueue_script(
                'fontawesome',
                'https://kit.fontawesome.com/726fdc7259.js',
                array('jquery'), '5.12.0',
                false);
        }
    }

    public function sg_gutenberg_styles()
    {
        wp_enqueue_style(
            'sg-blocks-style',
            $this->plugin_url . 'blocks/dist/blocks.style.build.css',
            false
        );
    }

    function sg_setup_theme_supported_features() {
        add_theme_support( 'editor-color-palette', array(
            array(
                'name' => __( 'Transparente', 'sg' ),
                'slug' => 'transparent',
                'color' => 'transparent',
            ),
            array(
                'name' => __( 'Color primario', 'sg' ),
                'slug' => 'sg-dark',
                'color' => '#2a2f3f',
            ),
            array(
                'name' => __( 'Color secundario', 'sg' ),
                'slug' => 'sg-green',
                'color' => '#27e29a',
            ),
            array(
                'name' => __( 'Blanco', 'sg' ),
                'slug' => 'white',
                'color' => '#ffffff',
            ),
            array(
                'name' => __( 'Negro', 'sg' ),
                'slug' => 'black',
                'color' => '#000000',
            ),
        ) );
    }

    public function add_materialize_to_gutenberg(){
        $upload_dir = wp_upload_dir();
        add_theme_support( 'editor-styles' ); // if you don't add this line, your stylesheet won't be added
        add_editor_style( $upload_dir['baseurl'] . "/sg/".'/style.css' );
    }

}

new Class_SG_Gutenberg();