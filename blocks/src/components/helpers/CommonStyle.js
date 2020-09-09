const { PanelBody, RangeControl, ColorPalette, Button, Icon, SelectControl, TextControl } = wp.components;
const { InspectorControls,MediaUpload } = wp.editor;

export default function CommonStyle({ style, classes, panel, animation }, {panelTitle, onChangeStyle, onChangeClasses, onChangeAnimation}, setState){
    let postfix = 'px';

    const BoxStyle = {
        button:{
            marginTop: '30px', padding: 0, borderTop: '1px solid #ccc', width:'100%', fontWeight:'600', position:'relative'
        },
        buttonExpand:{
            marginLeft:'5px', marginTop:'5px', position:'absolute', right:0
        }
    }

    const colors = [
        { name: 'Transparent', color: 'transparent'},
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'black', color: '#000' },
    ];

    const updateArray = (array, value, index, postfix='') => {
        let newValue = array.split(' ');
        newValue[index] = `${value}${postfix}`;
        return newValue.join(' ');
    };

    const backgroundImageButtons = (open) => {
        if (typeof style.backgroundImage !== '' && typeof style.backgroundImage !== 'undefined') {
            return (
                <div>
                    <img src={style.backgroundImage.slice(4,-1)} alt="" style={{width:'100%'}}/>
                    <Button
                        onClick={ open }
                        className="button"
                    >
                        Cambiar
                    </Button>
                    <Button
                        isTertiary
                        onClick={()=>{
                            let newStyle = { ...style, backgroundImage:'' };
                            setState( { style : newStyle }, () => {
                                onChangeStyle(newStyle);
                            });
                        }}
                        className="button"
                        style={{color:'red',border:0, backgroundColor:'transparent' }}
                    >
                        Eliminar
                    </Button>
                </div>
            )
        }else{
            return(
                [
                    <div className="no-image"></div>,
                    <Button
                    onClick={ open }
                    className="button button-large"
                    >
                    Agregar
                    </Button>
                ]
            )
        }
    }

    const updateState = (value) => {
        setState( { style : value }, () => {
            onChangeStyle(value);
        });
    }

    const renderRangeControl = (label, value, action ) => {

        if(typeof value == 'undefined')
            value = '0';

        let postfix =
            value.indexOf("px") !== -1 ?
                value.slice(value.indexOf("px")) :
                value.indexOf("%") !== -1 ?
                    value.slice(value.indexOf("%")) :
                    '';
        let number = parseInt(value);

        let max = postfix == '%' ? 100 : 1000;

        return (
            [
                <span>{label}</span>,
                <div className="range-control">
                    <RangeControl
                        className="range-control-range"
                        value={ number }
                        onChange={ ( value ) => action(`${value}${postfix}`)  }
                        min={ 0 }
                        max={ max }
                    />
                    <SelectControl
                        className="range-control-select"
                        value={ postfix }
                        options={ [
                            { label: '', value: '' },
                            { label: 'px', value: 'px' },
                            { label: '%', value: '%' },
                        ] }
                        onChange={ ( value ) => action(`${number}${value}`) }
                    />
                </div>
            ]

        )
    }

    const panelAnimation = (typeof panel.animation  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.animation.height = panel.animation.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, animation: panel.animation }} );
                } }
                className="editorControl-button"
            >
                Animation <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.animation.height} }>
                <div className="editorControl">
                    <SelectControl
                        label="Animación de título"
                        value={ animation.title }
                        options={ [
                            { label: 'Seleccionar', value: 'none' },
                            { label: 'Scale', value: 'scale' },
                            { label: 'Left to right', value: 'leftoright' },
                            { label: 'Right to Left', value: 'righttoleft' },
                        ] }
                        onChange={ ( value ) => {
                            setState( { animation: {...animation, title: value} }, () => {
                                onChangeAnimation({...animation, title: value})
                            } )
                        } }                     />
                    <TextControl
                        label="Tiempo en segundos"
                        value={ animation.titleDuration }
                        onChange={ ( value ) => {
                            setState( { animation: {...animation, titleDuration: value} }, () => {
                                onChangeAnimation({...animation, titleDuration: value})
                            } )
                        } }                    />
                    <SelectControl
                        label="Animación de los items"
                        value={ animation.item }
                        options={ [
                            { label: 'Seleccionar', value: 'none' },
                            { label: 'Scale', value: 'scale' },
                            { label: 'Left to right', value: 'leftoright' },
                            { label: 'Right to Left', value: 'righttoleft' },
                        ] }
                        onChange={ ( value ) => {
                            setState( { animation: {...animation, item: value} }, () => {
                                onChangeAnimation({...animation, item: value})
                            } )
                        } }
                    />
                    <TextControl
                        label="Duración"
                        value={ animation.itemDuration }
                        onChange={ ( value ) => {
                            setState( { animation: {...animation, itemDuration: value} }, () => {
                                onChangeAnimation({...animation, itemDuration: value})
                            } )
                        } }
                        help="Tiempo en segundo"
                    />
                    <TextControl
                        label="Tiempo entre items"
                        value={ animation.itemDurationBetween }
                        onChange={ ( value ) => {
                            setState( { animation: {...animation, itemDurationBetween: value} }, () => {
                                onChangeAnimation({...animation, itemDurationBetween: value})
                            } )
                        } }
                        help="Tiempo en segundo"
                    />
                </div>
            </div>
        </div>
    ) : null;


    const panelClasses = (typeof panel.classes  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.classes.height = panel.classes.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, classes: panel.classes }} );
                } }
                className="editorControl-button"
            >
                Clases <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.classes.height} }>
                <div className="editorControl">
                    <TextControl
                        label="Additional CSS Class"
                        value={ classes }
                        onChange={ ( value ) => {
                            setState( { classes : value }, () => {
                                onChangeClasses(value);
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    ) : null;

    const panelBackground = (typeof panel.classes  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.background.height = panel.background.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, background: panel.background }} );
                } }
                className="editorControl-button"
            >
                Background <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.background.height} }>
                <div className="editorControl">
                    <MediaUpload
                        type="image"
                        value={ style.backgroundImage }
                        onSelect={ media => {
                            updateState({ ...style, backgroundImage:`url(${media.url})` } );
                        } }
                        render={ ({ open }) => backgroundImageButtons(open)}
                    />
                    <SelectControl
                        label="Tamaño"
                        value={ style.backgroundSize }
                        options={ [
                            { label: 'cover', value: 'cover' },
                            { label: 'contain', value: 'contain' },
                            { label: 'auto', value: 'auto' },
                        ] }
                        onChange={ ( value ) => updateState({ ...style, backgroundSize:value } ) }
                    />
                    <SelectControl
                        label="Repetir"
                        value={ style.backgroundRepeat }
                        options={ [
                            { label: 'no-repeat', value: 'no-repeat' },
                            { label: 'repeat', value: 'repeat' },
                        ] }
                        onChange={ ( value ) => updateState({ ...style, backgroundRepeat:value } ) }
                    />
                    <SelectControl
                        label="Posición"
                        value={ style.backgroundPosition }
                        options={ [
                            { label: 'center', value: 'center' },
                            { label: 'top ', value: 'top' },
                            { label: 'right', value: 'right' },
                            { label: 'left ', value: 'left' },

                            { label: 'center top', value: 'center top' },
                            { label: 'center right', value: 'center right' },
                            { label: 'center bottom', value: 'center bottom' },
                            { label: 'center left', value: 'center left' },

                            { label: 'top right', value: 'top right' },
                            { label: 'top left', value: 'top left' },
                            { label: 'top center', value: 'top center' },

                            { label: 'bottom right', value: 'bottom right' },
                            { label: 'bottom left', value: 'bottom left' },
                            { label: 'bottom center', value: 'bottom center' },

                            { label: 'left center', value: 'left center' },
                            { label: 'left top', value: 'left top' },
                            { label: 'left bottom', value: 'left bottom' },

                            { label: 'right center', value: 'right center' },
                            { label: 'right top', value: 'right top' },
                            { label: 'right bottom', value: 'right bottom' },

                        ] }
                        onChange={ ( value ) => updateState({ ...style, backgroundPosition:value } ) }
                    />
                </div>
            </div>

        </div>
    ) : null;

    const panelShape = (typeof panel.shape  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.shape.height = panel.shape.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, shape: panel.shape }} );
                } }
                className="editorControl-button"
            >
                Forma <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.shape.height} }>
                <div className="editorControl">
                    { renderRangeControl("Ancho", style.width, (value) => updateState({ ...style, width:value })) }
                </div>
                <div className="editorControl">
                    { renderRangeControl("Alto", style.height, (value) => updateState({ ...style, height:value })) }
                </div>
                <div className="editorControl">
                    <span>Color de Fondo</span>
                    <ColorPalette
                        colors={ colors }
                        value={ style.backgroundColor }
                        onChange={ ( value ) => {
                            let newStyle = { ...style, backgroundColor:`${value}` };
                            setState( { style : newStyle }, () => {
                                onChangeStyle(newStyle);
                            });

                        } }
                    />
                </div>
                <div className="editorControl">
                    { renderRangeControl("Radio del borde", style.borderRadius, (value) => updateState({ ...style, borderRadius:value })) }
                </div>
                <div className="editorControl">
                    <span>Color de borde</span>
                    <ColorPalette
                        colors={ colors }
                        value={ style.border == undefined ? 0 : style.border.split(' ')[2] }
                        onChange={ ( value ) => {
                            let newStyle = { ...style, border:updateArray(style.border == undefined ? '0 solid transparent': style.border, value, 2) };
                            setState( { style : newStyle }, () => {
                                onChangeStyle(newStyle);
                            });
                        } }
                    />
                </div>
                <div className="editorControl">
                    <RangeControl
                        label="Grosor del borde"
                        value={ style.border == undefined ? 0 : parseInt(style.border.split(' ')[0]) }
                        onChange={ ( value ) => {
                            let newStyle = { ...style, border:updateArray(style.border == undefined ? '0 solid transparent': style.border, value, 0, 'px') };
                            setState( { style : newStyle }, () => {
                                onChangeStyle(newStyle);
                            });
                        } }
                        min={ 0 }
                        max={ 100 }
                    />
                </div>
            </div>
        </div>
    ) : null ;

    const panelFont = (typeof panel.font  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.font.height = panel.font.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, font: panel.font }} );
                } }
                className="editorControl-button"
            >
                Fuente <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.font.height} }>
                <div className="editorControl">
                    <span>Color de Texto</span>
                    <ColorPalette
                        colors={ colors }
                        value={ style.color }
                        onChange={ ( value ) => {
                            let newStyle = { ...style, color:`${value}` };
                            setState( { style : newStyle }, () => {
                                onChangeStyle(newStyle);
                            });
                        } }
                    />
                </div>
            </div>
        </div>
    ) : null ;

    const panelMargin = (typeof panel.margin  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.margin.height = panel.margin.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, margin: panel.margin }} );
                } }
                className="editorControl-button"
            >
                Margen <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.margin.height} }>
                <RangeControl
                    label="Top"
                    value={ style.margin == undefined ? 0: parseInt(style.margin.split(' ')[0]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, margin:updateArray(style.margin == undefined ? '0 0 0 0': style.margin, value, 0, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
                <RangeControl
                    label="Right"
                    value={ style.margin == undefined ? 0: parseInt(style.margin.split(' ')[1]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, margin:updateArray(style.margin == undefined ? '0 0 0 0': style.margin, value, 1, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
                <RangeControl
                    label="Bottom"
                    value={ style.margin == undefined ? 0: parseInt(style.margin.split(' ')[2]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, margin:updateArray(style.margin == undefined ? '0 0 0 0': style.margin, value, 2, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
                <RangeControl
                    label="Left"
                    value={ style.margin == undefined ? 0: parseInt(style.margin.split(' ')[3]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, margin:updateArray(style.margin == undefined ? '0 0 0 0': style.margin, value, 3, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
            </div>
        </div>
    ) : null ;

    const panelPadding = (typeof panel.padding  !== 'undefined') ? (
        <div>
            <Button
                onClick={ () => {
                    panel.padding.height = panel.padding.height !== 0 ? 0 : 'auto';
                    setState( { panel: { ...panel, padding: panel.padding }} );
                } }
                className="editorControl-button"
            >
                Relleno <Icon icon="arrow-down-alt2" />
            </Button>
            <div className="editor-panel" style={ { height: panel.padding.height} }>
                <RangeControl
                    label="Top"
                    value={ style.padding == undefined ? 0: parseInt(style.padding.split(' ')[0]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, padding:updateArray(style.padding == undefined ? '0 0 0 0': style.padding, value, 0, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
                <RangeControl
                    label="Right"
                    value={ style.padding == undefined ? 0: parseInt(style.padding.split(' ')[1]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, padding:updateArray(style.padding == undefined ? '0 0 0 0': style.padding, value, 1, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });                        } }
                    min={ 0 }
                    max={ 100 }
                />
                <RangeControl
                    label="Bottom"
                    value={ style.padding == undefined ? 0: parseInt(style.padding.split(' ')[2]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, padding:updateArray(style.padding == undefined ? '0 0 0 0': style.padding, value, 2, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
                <RangeControl
                    label="Left"
                    value={ style.padding == undefined ? 0: parseInt(style.padding.split(' ')[3]) }
                    onChange={ ( value ) => {
                        let newStyle = { ...style, padding:updateArray(style.padding == undefined ? '0 0 0 0': style.padding, value, 3, 'px') };
                        setState( { style : newStyle }, () => {
                            onChangeStyle(newStyle);
                        });
                    } }
                    min={ 0 }
                    max={ 100 }
                />
            </div>
        </div>
    ) : null ;

    return (
        <InspectorControls>
            <PanelBody title={panelTitle} initialOpen={false}>
                { panelShape }
                { panelBackground }
                { panelFont }
                { panelMargin }
                { panelPadding }
                { panelClasses }
                { panelAnimation }
            </PanelBody>
        </InspectorControls>
    )

}