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