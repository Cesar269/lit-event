import { LitElement, html, css, nothing } from 'lit';
import styles from "./styles/pantalla-principal-styles";
import ModalForm from "./components/modal-form.js";
// import Swal from 'sweetalert2'

export class PantallaPrincipal extends LitElement {

    static styles = [
        styles
    ]

    static get properties() {
        return {
            ModalForm,
            events: { type: Array }
        };
    }

    constructor() {
        super();
        this.events = [];
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('save-event-data', this._handleSaveEventData);
        this.events = JSON.parse(localStorage.getItem("eventos")) ?? [];
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
        localStorage.setItem("eventos", JSON.stringify(this.events));
        this.requestUpdate();  // Esto hará que el componente se vuelva a renderizar con los nuevos datos
    }

    _openModal() {
        this.addEventListener('display-modal', e => {
            const modal = this.shadowRoot.querySelector('modal-form');
            modal.open = true;
        });
    }

    _openForm() {
        this.dispatchEvent(new CustomEvent('display-modal'));
    }

    _deteleEvents() {
        this.events = [];
        localStorage.removeItem("eventos");
    }

    _convertirFechaHora({fecha,hora}) {
        // Crear objetos Date para la fecha y la hora
        const fechaObj = new Date(fecha);
        fechaObj.setHours(0,0,0,0);
        fechaObj.setDate(fechaObj.getDate() + 1)

        // Obtener partes de la fecha
        const dia = fechaObj.getDate();
        const mes = fechaObj.getMonth() + 1;
        // ¡Recuerda que los meses son indexados desde 0!
        const año = fechaObj.getFullYear();

        // Formatear la salida
        const fechaFormateada = `${dia}/${mes}/${año}`;

        // Combinar fecha y hora formateadas
        const resultado = `${fechaFormateada} a las ${hora}`;
        return resultado;
    }

    render() {
        return html`
        <modal-form></modal-form>
        <nav>
            <h1>Gestor de eventos</h1>
            <p class="texto-presentacion">
                Proyecto realizado con el proposito de poner a prueba los conocimientos adquiridos en el curso
                de Lit element por parte de Softek.
            </p>
        </nav>
        <button @click="${this._openForm}"><strong>+</strong> Agendar nuevo evento</button>
        <section class="eventos">
            ${
            this.events.length ? 
            this.events.map(event =>
            html`<div class="item-evento">
                    <ul>
                        <li class="detalles-evento">
                            <p>${event.name}</p>
                            <p>${event.description}</p>
                            <p>${this._convertirFechaHora({fecha:event.date, hora:event.time})}</p>
                        </li>
                    </ul>
                </div>`)
                : html`<h4>No hay eventos registrados por el momento</h4>`
            }
        </section>
        ${this.events.length > 0 ? html`<button id="deleteButton" @click="${this._deteleEvents}"> Eliminar todos los eventos </button>` : nothing}
        `;
    }
}


customElements.define('pantalla-principal', PantallaPrincipal);