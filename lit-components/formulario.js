import { LitElement, html, css } from 'lit';
import {styles} from "../lit-components/formulario-styles";

class Formulario extends LitElement {
    static styles=[
        styles
    ]

  static properties = {
    eventName: { type: String },
    eventDate: { type: String },
    eventTime: { type: String },
    eventDescription: { type: String },
  };

  constructor() {
    super();
    this.eventName = '';
    this.eventDate = '';
    this.eventTime = '';
    this.eventDescription = '';
  }

  render() {
    return html`
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
            <textarea .value=${this.eventDescription} @input=${this._handleDescriptionChange} required></textarea>
          </label>
          <br />
          <button type="submit">Guardar</button>
        </form>
      </div>
    `;
  }

  _handleNameChange(e) {
    this.eventName = e.target.value;
  }

  _handleDateChange(e) {
    this.eventDate = e.target.value;
  }

  _handleTimeChange(e) {
    this.eventTime = e.target.value;
  }

  _handleDescriptionChange(e) {
    this.eventDescription = e.target.value;
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log({
      eventName: this.eventName,
      eventDate: this.eventDate,
      eventTime: this.eventTime,
      eventDescription: this.eventDescription,
    });
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor o manejarlos según necesites.
  }
}

customElements.define('evento-formulario', Formulario);

