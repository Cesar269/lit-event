import { LitElement, html, css } from 'lit';
import { styles } from "../styles/formulario-styles";

export default class Formulario extends LitElement {
  static styles = [
    styles
  ]

  static properties = {
    eventData: { type: Array },
    eventName: { type: String },
    eventDate: { type: String },
    eventTime: { type: String },
    eventDescription: { type: String },
  };

  constructor() {
    super();
    this.eventData = [];
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
      
    `;
  }

  _handleSubmit(e) {
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

customElements.define('evento-formulario', Formulario);