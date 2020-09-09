<?php


class Class_SG_Gutenberg_Block_Posts
{
    public function __construct()
    {

        register_block_type('sg/posts', array(
            'editor_script' => 'sg-blocks',
            'render_callback' => array($this, 'post_render_callback')
        ));

    }

    public function post_render_callback($attributes, $content)
    {
        $category = isset($attributes['category_selected']) ? $attributes['category_selected'] : -1;
        $post_per_page = isset($attributes['post_per_page']) ? $attributes['post_per_page'] : 3;
        $columns = isset($attributes['columns']) ? $attributes['columns'] : 3;
        $height = isset($attributes['height']) ? $attributes['height'] : 200;
        $type = isset($attributes['type']) ? $attributes['type'] : 1;
        $buttonText = isset($attributes['action_post']) ? $attributes['action_post'] : '';
        $filter_color = isset($attributes['filter']) ? $attributes['filter'] : 'transparent';


        $recent_posts = wp_get_recent_posts(array(
            'numberposts' => $post_per_page,
            'post_status' => 'publish',
            'category' => $category
        ));
        if (count($recent_posts) === 0) {
            return 'No posts';
        }

        $items = '';

        $column_width = (100 / $columns) . '%';

        foreach ($recent_posts as $p) {

            $post_thumbnail = get_the_post_thumbnail_url($p['ID']) != ''
                ? get_the_post_thumbnail_url($p['ID'])
                : plugin_dir_url(__FILE__) . '/assets/imgs/no-post-image-'.rand(0,2).'.jpg';

            $items .= $this->renderItem(
                $type,
                get_the_title($p['ID']),
                get_permalink($p['ID']),
                $post_thumbnail,
                $buttonText,
                $column_width,
                $height,
                $p['post_excerpt'],
                $filter_color
            );
        }

        return sprintf(
            '<div class="wp-block-sg-posts col s12">
                    <ul class="sg-items option%2$s">
                    %1$s
                    </ul>
                </div>',
            $items, //%1$s
            $type
        );

    }

    public function renderItem($type, $title, $permalink, $thumbnail, $actionText, $columnWidth, $height, $excerpt, $filter_color)
    {
        $output = '';

        switch ($type) {
            case 0:
                $output = sprintf(
                    '
                <li class="sg-item" style="width: %5$s">
                    <div class="card medium hoverable">
                        <div class="card-image">
                            <img src="%4$s" alt="post image"/>
                            <span class="card-title">%3$s</span>
                        </div>
                        <div class="card-content">
                            %6$s
                        </div>
                        <div class="card-action">
                            <a href=%2$s>
                                %1$s
                            </a>
                        </div>
                    </div>
                </li>
                ',
                    esc_html($actionText),//%1$s
                    esc_url($permalink),//%2$s
                    esc_html($title),//%3$s
                    esc_html($thumbnail),//%4$s
                    $columnWidth,//%5$s
                    esc_html($excerpt)//%6$s
                );
                break;

            case 1:
                $output = sprintf(
                    '
                <li class="sg-item" style="width: %5$s">
                    <div class="sg-item-content hoverable" style="background-image: url(%4$s); height: %7$spx">
                        <div class="sg-item-filter" style="background-color: %6$s"></div>
                        <div class="sg-item-title">
                            <h5>%3$s</h5>
                        </div>
                        <a class="btn waves-effect waves-light sg-item-action" href="%2$s">
                            %1$s
                        </a>
                    </div>
                </li>
                ',
                    esc_html($actionText),//%1$s
                    esc_url($permalink),//%2$s
                    esc_html($title),//%3$s
                    esc_html($thumbnail),//%4$s
                    $columnWidth,//%5$s
                    $filter_color,//%6$s
                    $height,//%7$s
                );
                break;

            case 2:
                $titleClasses = 'sg-item-title';
                $read_more_btn = $actionText == '' ? '' : '<a class="btn waves-effect waves-light sg-item-action" href="'.$permalink.'">'.$actionText.'</a>';
                if (strrpos($thumbnail, 'http') === false) {
                    $titleClasses = 'sg-item-title no-image';
                }



                $output = sprintf(
                    '
                <li class="sg-item" style="width: %5$s">
                    <div class="sg-item-content z-depth-1 hoverable">
                        <a href="%2$s" class="sg-item-graphic" style="height: %7$spx">
                            <img src="%4$s" alt=""/>
                        </a>
                        <div class="%6$s">
                            <a href="%2$s">
                                <h5>%3$s</h5>
                            </a>                            
                        </div>
                        %1$s
                    </div>
                </li>
                ',
                    esc_html($read_more_btn),//%1$s
                    esc_url($permalink),//%2$s
                    esc_html($title),//%3$s
                    esc_html($thumbnail),//%4$s
                    $columnWidth,
                    $titleClasses,
                    $height
                );
                break;
        }


        return $output;
    }
}

new Class_SG_Gutenberg_Block_Posts();