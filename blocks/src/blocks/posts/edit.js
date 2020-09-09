

const { withSelect } = wp.data;
const { InspectorControls } = wp.blockEditor;
const { Component } = wp.element;
const { PanelBody,RangeControl,TextControl,SelectControl,ColorPalette,ColorPicker } =wp.components;
const  apiFetch  = wp.apiFetch;
const { addQueryArgs } = wp.url;

import { getRGBAColor } from '../../helpers/utilities';
import MainColors from '../../helpers/colors';

const CATEGORIES_LIST_QUERY = {
    per_page: -1,
};

class SlothGeekPostEdit extends Component {

    constructor(props) {
        super( ...arguments );

        this.state = {
            categoriesList: [],
        };
    }

    componentDidMount() {
        this.isStillMounted = true;
        this.fetchRequest = apiFetch( {
            path: addQueryArgs( `/wp/v2/categories`, CATEGORIES_LIST_QUERY ),
        } )
        .then( ( categoriesList ) => {
            if ( this.isStillMounted ) {
                this.setState( { categoriesList } );
            }
        } )
        .catch( () => {
            if ( this.isStillMounted ) {
                this.setState( { categoriesList: [] } );
            }
        } );
    }

    componentWillUnmount() {
        this.isStillMounted = false;
    }

    render(){
        const {posts, attributes, setAttributes, className} = this.props;
        const { categoriesList } = this.state;

        if (!posts){
            return (
                <span>Loading....</span>
            )
        }
        if( posts.length == 0){
            return (
                <span>No hay posts para mostrar.</span>
            )
        }
        const inspectorControls = (
            <InspectorControls>
                <PanelBody title="Ajustes">
                    <RangeControl
                        label="Número de columnas"
                        value={ attributes.columns }
                        onChange={ ( value ) => setAttributes( { columns: value } ) }
                        min={ 1 }
                        max={ 12 }
                    />
                    <RangeControl
                        label="¿Cuantos post?"
                        value={ attributes.post_per_page }
                        onChange={ ( value ) =>
                            setAttributes( { post_per_page: value } )
                        }
                        min={ 1 }
                        max={ 9 }
                    />
                    <RangeControl
                        label="Alto de la imagen (px)"
                        value={ attributes.height }
                        onChange={ ( value ) => setAttributes( { height: value } ) }
                        min={ 1 }
                        max={ 1000 }
                    />
                    <SelectControl
                        multiple
                        label="Categoría"
                        value={ attributes.category_selected }
                        options={
                            [] = categoriesList.map( (cat) => ({ label: cat.name, value: cat.id }))
                         }
                        onChange={ ( value ) => setAttributes( { category_selected: value } ) }
                    />
                    <TextControl
                        label="Botón de acción"
                        value={ attributes.action_post }
                        onChange={ ( value ) => setAttributes( { action_post: value } ) }
                    />
                    <SelectControl
                        label="Estilo del item"
                        value={ attributes.type }
                        options={ [
                            { label: 'Card', value: 0 },
                            { label: 'Modern', value: 1 },
                            { label: 'Clasic', value: 2 },
                        ] }
                        onChange={ ( value ) => setAttributes( { type: value } ) }
                    />
                    <ColorPalette
                        colors = { MainColors }
                        value={ attributes.filter }
                        onChange={ ( value ) => {
                            setAttributes( { filter : value } );
                        } }
                    />
                    <ColorPicker
                        color={ attributes.filter }
                        onChangeComplete={ ( value ) => {
                            setAttributes( { filter : getRGBAColor(value) } )
                        } }
                    />
                </PanelBody>
            </InspectorControls>
        );

        const option0 = (post, columnWidth, height) => {

            let titleClasses =  'sg-item-title';
            let image_url = ''

            if(!post._embedded['wp:featuredmedia']){
                titleClasses = 'sg-item-title no-image';
            }else{
                image_url = post._embedded['wp:featuredmedia'][0].source_url;
            }

            return(
                <li className="sg-item " style={ { width:`${columnWidth}%` } }>
                    <div className="card medium">
                        <div className="card-image" style={{height: height}}>
                            <img src={image_url} alt=""/>
                            <span className="card-title">{post.title.rendered}</span>
                        </div>
                        <div className="card-content">
                            { post.excerpt.rendered }
                        </div>
                        <div className="card-action">
                            <a href={post.link}>
                                {attributes.action_post}
                            </a>
                        </div>
                    </div>
                </li>
            )
        };

        const option1 = (post, columnWidth, height) => {

            let image_url = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '';

            return(
                <li className="sg-item" style={ { width:`${columnWidth}%` } }>
                    <div className="sg-item-content" style={{backgroundImage: `url(${image_url})`, height: height}}>
                        <div className="sg-item-filter" style={{backgroundColor: attributes.filter}}></div>
                        <div className="sg-item-title">
                            <h5>{post.title.rendered}</h5>
                        </div>
                        <a className="sg-item-action" href={post.link}>
                            {attributes.action_post}
                        </a>
                    </div>
                </li>
            )
        };

        const option2 = (post, columnWidth, height) => {
            let titleClasses =  'sg-item-title';
            let image_url = ''

            if(!post._embedded['wp:featuredmedia']){
                titleClasses = 'sg-item-title no-image';
            }else{
                image_url = post._embedded['wp:featuredmedia'][0].source_url;
            }

            return(
                <li className="sg-item" style={ { width:`${columnWidth}%` } }>
                    <div className="sg-item-content">
                        <div className="sg-item-graphic" style={ { height: height } }>
                            <img src={image_url} alt=""/>
                        </div>
                        <div className={titleClasses}>
                            <h5>{post.title.rendered}</h5>
                        </div>
                        <a className="sg-item-action" href={post.link}>
                            {attributes.action_post}
                        </a>
                    </div>
                </li>
            )
        };

        const columnWidth = ( 100 / attributes.columns );
        const height = attributes.height+"px";
        return (
            <div className={ className }>
                {inspectorControls}
                <ul className={`sg-items option${attributes.type}`}>
                    {
                        posts.map(post => {

                            switch ( parseInt(attributes.type) ) {
                                case 0:
                                    return option0(post, columnWidth, height);
                                    break;
                                case 1:
                                    return option1(post, columnWidth, height);
                                    break;
                                case 2:
                                    return option2(post, columnWidth, height);
                                    break;
                                default:
                                    return option0(post, columnWidth, height);
                                    break;
                            }

                        })
                    }
                </ul>
            </div>

        )
    }


}

export default withSelect( (select, props) => {

    const {post_per_page, category_selected} = props.attributes;
    const { getEntityRecords } = select( 'core' );
    const query = {
        per_page: post_per_page,
        categories: category_selected,
        _embed: true,
    };

    return {
        posts: getEntityRecords('postType', 'post', query)
    };

})(SlothGeekPostEdit);
