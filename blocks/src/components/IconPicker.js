const { Component } = wp.element;
const { Button, Dropdown, IconButton } = wp.components;

export default class IconPicker extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        const {value, onChange} = this.props;
        const icon = icons.find(i => i.name == value);

        return (
            <div>
                <Dropdown
                    className="icon-picker"
                    contentClassName="icon-picker-content"
                    position="bottom right"
                    renderToggle={ ( { isOpen, onToggle } ) => {

                        if(icon){
                            return (
                                <Button
                                    isTertiary
                                    onClick={ onToggle } aria-expanded={ isOpen }
                                >
                                    <i className={`${icon.prefix} ${icon.name}`}></i>
                                </Button>
                            )
                        }else{
                            return([
                                <IconButton
                                    onClick={ onToggle }
                                    aria-expanded={ isOpen }
                                    icon="info"
                                    label="Agregar ícono"
                                />
                            ])
                        }
                    }  }
                    renderContent={ () => (
                        <div>
                            {
                                icons.map( icon => {
                                    return(
                                        <Button
                                            isTertiary
                                            onClick={ ()=> onChange(icon.name) }
                                        >
                                            <i className={`${icon.prefix} ${icon.name}`}></i>
                                        </Button>

                                    )
                                })
                            }
                        </div>
                    ) }
                />
            </div>

        )
    }
}

const icons = [
    {prefix: 'fas', name: 'fa-angle-down'},
    {prefix: 'fas', name: 'fa-angle-left'},
    {prefix: 'fas', name: 'fa-angle-right'},
    {prefix: 'fas', name: 'fa-angle-up'},
    {prefix: 'fas', name: 'fa-arrow-down'},
    {prefix: 'fas', name: 'fa-arrow-left'},
    {prefix: 'fas', name: 'fa-arrow-right'},
    {prefix: 'fas', name: 'fa-arrow-up'},
    {prefix: 'fas', name: 'fa-store'},
    {prefix: 'fas', name: 'fa-store-alt'},
    {prefix: 'fas', name: 'fa-globe'},
    {prefix: 'fas', name: 'fa-globe-europe'},
    {prefix: 'fas', name: 'fa-globe-asia'},
    {prefix: 'fas', name: 'fa-globe-americas'},
    {prefix: 'fas', name: 'fa-server'},
    {prefix: 'fas', name: 'fa-database'},
    {prefix: 'fas', name: 'fa-info'},
    {prefix: 'fas', name: 'fa-check'},
    {prefix: 'fas', name: 'fa-check-square'},
    {prefix: 'fas', name: 'fa-check'},
    {prefix: 'fas', name: 'fa-walking'},
    {prefix: 'fas', name: 'fa-runing'},
    {prefix: 'fas', name: 'fa-male'},
    {prefix: 'fas', name: 'fa-building'},
    {prefix: 'fas', name: 'fa-city'},
    {prefix: 'fas', name: 'fa-home'},

]

/*
* {prefix: 'fas', name: 'fa-'},
*/