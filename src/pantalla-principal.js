import { LitElement, html, css, nothing } from 'lit';
import styles from "./styles/pantalla-principal-styles";
import ModalForm from "./components/modal-form.js";

export class PantallaPrincipal extends LitElement {

    static styles = [ styles ]

    static get properties() {
        return {
            ModalForm,
            events: { type: Array}
        };
    }

    constructor() {
        super();
        this.events=[];
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('save-event-data', this._handleSaveEventData);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('save-event-data', this._handleSaveEventData);
    }

    update(changed) {
        super.update(changed);
        this._openModal();
    }

    _handleSaveEventData(e) {
        const newEvent = e.detail;
        this.events = [...this.events, newEvent];// Agregar el nuevo evento al array de eventos
        this.requestUpdate();  // Esto hará que el componente se vuelva a renderizar con los nuevos datos
    }

    _openModal(){
        this.addEventListener('display-modal', e => {
            const modal = this.shadowRoot.querySelector('modal-form');
            modal.open = true;
        });
    }
    
    _openForm() { this.dispatchEvent(new CustomEvent('display-modal')); }

    render() {
        return html`
        <modal-form></modal-form>
        <nav>
            <h1>Gestor de eventos</h1>
            <p>
                Proyecto realizado con el proposito de poner a prueba los conocimientos adquiridos en el curso
                de Lit element por parte de Softek.
            </p>
        </nav>
        <button @click="${this._openForm}"><strong>+</strong> Agendar nuevo evento</button>
        <section class="eventos">
            ${this.events.map(event => html`<div class="item-evento"><ul><li>${event.name} - ${event.date} - ${event.time} - ${event.description}</li></ul></div>`)}  
        </section>
        ${console.log("Revisar la linea de abajo")}
        ${this.events.lenght  ? html `<h4 class="eliminar-eventos">Eliminar todos los eventos</h4>` : html `<h4 class="eliminar-eventos">Eliminar todos los eventos</h4>` }
        `;
    }
}


customElements.define('pantalla-principal', PantallaPrincipal);