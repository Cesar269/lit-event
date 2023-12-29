import { LitElement, html, css } from 'lit';
import {styles} from "../lit-components/formulario-styles";

export default class Formulario extends LitElement {
    static styles=[
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
          <button @click=${this._displayEventData}>Guardar</button>
        </form>
        <div id="displayData">
        <!-- Aquí se mostrarán los datos ingresados -->
      </div>
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

  _displayEventData() {
    // Agregar el conjunto actual de datos a eventData como un objeto
      this.eventData.push({
      name: this.eventName,
      date: this.eventDate,
      time: this.eventTime,
      description: this.eventDescription
    });
    console.log(this.eventData)

    const displayDataDiv = this.shadowRoot.getElementById('displayData');
    
    // Mostrar todos los conjuntos de datos almacenados en eventData
    let displayContent = '';
    this.eventData.forEach(data => {
      displayContent += `
        <p>
          Nombre del evento: ${data.name}<br>
          Fecha: ${data.date}<br>
          Hora: ${data.time}<br>
          Descripción: ${data.description}
        </p>
        <hr>
      `;
    });

    displayDataDiv.innerHTML = displayContent;
  }  
  

}

customElements.define('evento-formulario', Formulario);

