const { Component } = wp.element;
const { Button, IconButton } = wp.components;
const { BlockControls, RichText, MediaUpload, PlainText } = wp.editor;

import  IconPicker  from '../../components/IconPicker';

class SlothGeekTabs extends Component {

    constructor() {
        super(...arguments);
    }

    getImageButton(openEvent, item={}) {
        if(item.imageUrl) {
            return (
                <div className="component-graphic">
                    <img
                        src={ item.imageUrl }
                        className="image"
                    />
                    <div className="hover-div">
                        <Button
                            onClick={ openEvent }
                            className="button button-large"
                        >
                            Cambiar imagen
                        </Button>
                    </div>
                </div>

            );
        }
        else {
            return (
                <div className="component-graphic">
                    <Button
                        onClick={ openEvent }
                        className="button button-large"
                    >
                        Seleccionar imagen
                    </Button>
                </div>
            );
        }
    };

    onChangeEvent(att, item, model){
        var newObject = Object.assign({}, item, model);

        if(att == 'items'){
            return this.props.setAttributes({
                items: [].concat(this.cloneArray(this.props.attributes.items.filter(function (itemFilter) {
                    return itemFilter.index != item.index;
                })), [newObject])
            });
        }

        if(att == 'bodyItems'){
            return this.props.setAttributes({
                bodyItems: [].concat(this.cloneArray(this.props.attributes.bodyItems.filter(function (itemFilter) {
                    return itemFilter.index != item.index;
                })), [newObject])
            });
        }

    };

    cloneArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    render() {


        var itemList = this.props.attributes.items.sort(function(a , b) {
            return a.index - b.index;
        }).map((item)=>{
            return(
                <li className="tab">
                    <IconPicker
                        value={item.icon}
                        onChange={
                            (value)=>this.onChangeEvent('items', item, {icon: value})
                        }
                    />
                    <PlainText
                        onChange={
                            ( value ) => this.onChangeEvent('items', item, {title: value})
                        }
                        value={ item.title }
                        placeholder="Título"
                    />
                    <PlainText
                        onChange={
                            ( value ) => this.onChangeEvent('items', item, {actionText: value})
                        }
                        value={ item.actionText }
                        placeholder="Texto de acción"
                    />
                </li>
            )
        });

        var bodyItems = this.props.attributes.bodyItems.sort(function(a , b) {
            return a.index - b.index;
        }).map((item)=>{
            return(
                <div className="tab-content">
                    <div className="tab-content-inner">
                        <div className="graphic-area">
                            <MediaUpload
                                onSelect={ media => this.onChangeEvent('bodyItems', item, { imageUrl: media.url }) }
                                type="image"
                                render={ ({ open }) => this.getImageButton(open, item) }
                            />
                        </div>
                        <div className="body-area">
                            <PlainText
                                onChange={
                                    ( value ) => this.onChangeEvent('bodyItems', item, {title: value})
                                }
                                value={ item.title }
                                placeholder="Título"
                            />
                            <PlainText
                                onChange={
                                    ( value ) => this.onChangeEvent('bodyItems', item, {subtitle: value})
                                }
                                value={ item.subtitle }
                                placeholder="Subtítulo"
                            />
                            <RichText
                                onChange={
                                    ( value ) => this.onChangeEvent('bodyItems', item, {body: value})
                                }
                                value={ item.body }
                                multiline="p"
                                placeholder="Cuerpo"
                                formattingControls={ ['bold', 'italic', 'underline'] }
                                isSelected={ this.props.attributes.isSelected }
                            />
                            <div className="action-button">
                                <PlainText
                                    onChange={
                                        ( value ) => this.onChangeEvent('bodyItems', item, {buttonText: value})
                                    }
                                    value={ item.buttonText }
                                    placeholder="Texto del botón"
                                />
                                <PlainText
                                    onChange={
                                        ( value ) => this.onChangeEvent('bodyItems', item, {buttonAction: value})
                                    }
                                    value={ item.buttonAction }
                                    placeholder="Url del botón"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        });


        return (
            <div className={this.props.className}>
                {
                    <BlockControls>
                        <IconButton
                            onClick={
                                () => {
                                    return this.props.setAttributes({
                                        items: [].concat(this.cloneArray(this.props.attributes.items), [{
                                            index: this.props.attributes.items.length,
                                            title: "",
                                            icon:"",
                                            actionText: ""
                                        }]),
                                        bodyItems: [].concat(this.cloneArray(this.props.attributes.bodyItems), [{
                                            index: this.props.attributes.bodyItems.length,
                                            title:"",
                                            subtitle: "",
                                            body:"",
                                            buttonText:"",
                                            buttonAction:"",
                                            imageURL:""
                                        }])
                                    });
                                }
                            }
                            icon="plus"
                            label="Agregar"
                        />
                    </BlockControls>
                }
                <ul className="tabs">
                    {itemList}
                </ul>
                <div className="tabs-body">
                    {bodyItems}
                </div>
            </div>
        )
    }
}

export default ( SlothGeekTabs );