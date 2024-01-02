import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import stylesForm from "../styles/modalForm-styles"

class modalForm extends LitElement {
    static styles = [
        stylesForm
    ]

    static get properties() {
        return {
            open: { type: Boolean }
        }
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
                                <input type="text" .value=${this.eventName} @input=${this._handleNameChange} required />
                            </label>
                            <br />
                            <label>
                                Fecha:
                                <input type="date" .value=${this.eventDate} @input=${this._handleDateChange} required />
                            </label>
                            <br />
                            <label>
                                Hora:
                                <input type="time" .value=${this.eventTime} @input=${this._handleTimeChange} required />
                            </label>
                            <br />
                            <label>
                                Descripción:
                                <textarea .value=${this.eventDescription} @input=${this._handleDescriptionChange}
                                    required></textarea>
                            </label>
                            <br />
                            <button @click=${this._displayEventData}>Guardar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
    }

    close(){
        this.open = false;
    }



}

customElements.define('modal-form', modalForm);