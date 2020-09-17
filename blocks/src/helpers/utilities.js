/**
 * Elimina por completo el elemento de estilo cuando no tiene valor. Esto evitará estilos
 * sucios sin valor en el frontend.
 *
 * @param attributes
 * @param setAttributes
 * @param element
 * @param value
 */
export function sanitizeStyle({attributes, setAttributes}, element, value='') {

    if(value === ''){

        let style = attributes.style;

        delete style[element];

        setAttributes({style: style});

    }

}

export function getRGBAColor(color){

    return `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;

}

export function cloneArray(arr){

    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }

}