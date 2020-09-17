import IconPicker from "../../components/IconPicker";

const { RichText, InspectorControls } = wp.blockEditor;
const { Component } = wp.element;
const { Button, CheckboxControl } = wp.components;

import { cloneArray } from '../../helpers/utilities';

export default class PricingTableEdit extends Component {
    constructor() {
        super( ...arguments );
    }

    add_feature() {
        const {attributes, setAttributes } = this.props;

        let feature = {
            index: attributes.features.length,
            text: '',
            active: true
        }

        return setAttributes({
            features: [].concat(cloneArray(attributes.features), [feature])
        });
    }

    update_feature(feature){

        const {attributes, setAttributes } = this.props;
            return setAttributes({
                features: [].concat(cloneArray(attributes.features.filter(function (itemFilter) {
                    return itemFilter.index != feature.index;
                })), [feature])
        });

    }

    render_features(){
        const {attributes, setAttributes } = this.props;

        return attributes.features.sort(function(a , b) {
            return a.index - b.index;
        }).map( feature => {

            return(
                <li className={`pricing-feature ${ feature.active ? '' : 'disabled'}`}>
                    <CheckboxControl
                        checked={ feature.active }
                        onChange={ (value) => this.update_feature( {...feature, active: value }) }
                    />
                    <RichText
                        value={ feature.text }
                        onChange={ value => this.update_feature( {...feature, text: value }) }
                        placeholder="Característica"
                        multiline = {false}
                    />
                </li>
            )

        } )
    }

    render(){
        const {attributes, setAttributes } = this.props;

        return (
           <div className="pricing-table featured scale-in-out fade-in-out">
               <div className="pricing-header">
                   <div className="symbol">
                       <IconPicker
                           value={attributes.icon}
                           onChange={ ( value ) => setAttributes( { icon: value } ) }
                       />
                   </div>
                   <RichText
                       className="title"
                       value={ attributes.title }
                       onChange={ value => setAttributes( { title: value } ) }
                       multiline = {false}
                   />
                   <div className="price">
                       <RichText
                           tagName="span"
                           className="currency"
                           value={ attributes.currency }
                           onChange={ value => setAttributes( { currency: value } ) }
                           multiline = {false}
                       />
                       <RichText
                           tagName="span"
                           className="dollars"
                           value={ attributes.price }
                           onChange={ value => setAttributes( { price: value } ) }
                           multiline = {false}
                       />
                       <RichText
                           tagName="span"
                           className="cents"
                           value={ attributes.cents }
                           onChange={ value => setAttributes( { cents: value } ) }
                           multiline = {false}
                       />
                   </div>
               </div>
               <ul className="pricing-features">
                   { this.render_features() }

                   <Button
                       isSecondary
                       onClick={ () => this.add_feature()}
                   >
                       Agregar característica
                   </Button>
               </ul>
           </div>
        )
    }


}
