import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import stylesForm from "../styles/modalForm-styles"

export default class ModalForm extends LitElement {
    static styles = [ stylesForm ]

    static get properties() {
        return { open: { type: Boolean } }
    }

    constructor() {
        super();
        this.open = false
    }

    render() {
        return html`
        <div class="${classMap({ wrapper: true, open: this.open })}">
            <div class="overlay" @click="${this.close}"></div>
            <div class="dialog">
                <h1 id="title"></h1>
                <div id="content" class="content">
                    <div class="container">
                        <h2>Ingrese detalles del evento</h2>
                        <form @submit=${this._handleSubmit}>
                            <label>
                                Nombre del evento:
                                <input type="text" placeholder="Nombre del evento" id="eventName" required />
                            </label>
                            <br />
                            <label>
                                Fecha:
                                <input type="date" id="eventDate" required />
                            </label>
                            <br />
                            <label>
                                Hora:
                                <input type="time" id="eventTime" required />
                            </label>
                            <br />
                            <label>
                                Descripción:
                                <textarea id="eventDescription" required></textarea>
                            </label>
                            <br />
                            <button @click=${this._handleSubmit}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    close(){ this.open = false; }

    _handleSubmit(e) {
        console.log("click evento", e)
        e.preventDefault();
    
        const eventName = this.shadowRoot.getElementById('eventName').value;
        const eventDate = this.shadowRoot.getElementById('eventDate').value;
        const eventTime = this.shadowRoot.getElementById('eventTime').value;
        const eventDescription = this.shadowRoot.getElementById('eventDescription').value;
    
        // Disparar un evento personalizado con los detalles del evento
        this.dispatchEvent(new CustomEvent('save-event-data', {
          detail: {
            name: eventName,
            date: eventDate,
            time: eventTime,
            description: eventDescription
          },
          bubbles: true,
          composed: true
        }));
    }
}

customElements.define('modal-form', ModalForm);