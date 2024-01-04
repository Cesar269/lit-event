import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';
import stylesForm from "../styles/modalForm-styles"

export default class ModalForm extends LitElement {
    static styles = [stylesForm]

    static get properties() {
        return {
            open: {
                type: Boolean,
                eventName: { type: String },
                eventDate: { type: String },
                eventTime: { type: String },
                eventDescription: { type: String },
            }
        }
    }

    constructor() {
        super();
        this.open = false
        this.eventName = '';
        this.eventDate = '';
        this.eventTime = '';
        this.eventDescription = '';
    }

    close() { this.open = !this.open; }

    _handleSubmit(e) {
        e.preventDefault();
        const eventData = {
            name: this.eventName,
            date: this.eventDate,
            time: this.eventTime,
            description: this.eventDescription
        };

        if (this.validarDatos(eventData)) {
            this.close();
            this.dispatchEvent(new CustomEvent('save-event-data', {
                detail: eventData,
                bubbles: true,
                composed: true
            }
            ));

            // Limpia los valores guardados
            this.eventName = '';
            this.eventDate = '';
            this.eventTime = '';
            this.eventDescription = '';

            // Limpia los valores del input
            this.shadowRoot.getElementById('valueName').value = "";
            this.shadowRoot.getElementById('valueDate').value = "";
            this.shadowRoot.getElementById('valueTime').value = "";
            this.shadowRoot.getElementById('valueDescription').value = "";
        }


    }

    validarDatos({ date, time,name,description }) {
        console.log(date,time,name,description)
        if(!date || !time || !name || !description){
            console.log("campos vacios")
            Swal.fire({
                icon: "warning",
                text: "Existen campos vacíos, favor de completar todos los campos",
            });
            return false;
        }
        const dateNow = new Date();
        const hourNow = dateNow.getHours();
        const minNow = dateNow.getMinutes();
        const dateIn = new Date(date);
        dateIn.setHours(0, 0, 0, 0);
        dateNow.setHours(0, 0, 0, 0);
        dateIn.setDate(dateIn.getDate() + 1)
        console.log(dateNow)
        console.log(dateIn)
        const hourIn = parseInt(time.split(":")[0], 10);
        const minIn = parseInt(time.split(":")[1], 10);

        if (
            dateIn > dateNow ||
            (dateIn.getTime() === dateNow.getTime() && (hourIn > hourNow || (hourIn === hourNow && minIn > minNow)))
        ) {
            return true;
        } else {
            Swal.fire({
                icon: "warning",
                text: "La hora y fecha seleccionadas tienen que superar la hora y fecha actual",
            });

            return false;
        }
    }

    _handleNameInput(e) { this.eventName = e.target.value; }

    _handleDateInput(e) { this.eventDate = e.target.value; }

    _handleTimeInput(e) { this.eventTime = e.target.value; }

    _handleDescriptionInput(e) { this.eventDescription = e.target.value; }

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
                                <input type="text" id="valueName" .value=${this.eventName} @input=${this._handleNameInput} placeholder="Nombre del evento" required />
                            </label>
                            <br />
                            <label>
                                Fecha:
                                <input type="date" id="valueDate" .value=${this.eventDate} @input=${this._handleDateInput} required />
                            </label>
                            <br />
                            <label>
                                Hora:
                                <input type="time" id="valueTime" .value=${this.eventTime} @input=${this._handleTimeInput} required />
                            </label>
                            <br />
                            <label>
                                Descripción:
                                <textarea id="valueDescription" .value=${this.eventDescription} @input=${this._handleDescriptionInput} required></textarea>
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



}

customElements.define('modal-form', ModalForm);