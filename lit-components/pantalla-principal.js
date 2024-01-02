import { LitElement, html, css } from 'lit';
import styles from "./pantalla-principal-styles";

export class PantallaPrincipal extends LitElement {

    static styles = [
        styles
    ]

    static get properties() {
        return {
            eventData: { type: Object },
        };
    }

    constructor() {
        super();
        this.eventData = {};
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('save-event-data', this._handleSaveEventData);
      }
    
      disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('save-event-data', this._handleSaveEventData);
      }
    
      _handleSaveEventData(e) {
        this.eventData = e.detail;
        this.requestUpdate();  // Esto hará que el componente se vuelva a renderizar con los nuevos datos
        console.log(this.eventData);
    }

    _openComponenteFormulario() {
    import('../lit-components/formulario.js').then(module => {
      const Formulario = module.default;
      const componenteFormulario = new Formulario();
      this.shadowRoot.getElementById('ComponenteFormularioContainer').appendChild(componenteFormulario);
    });
  }

    render() {
        return html`
        <nav>
            <h1>Gestor de eventos</h1>
            <p>
                Proyecto realizado con el proposito de poner a prueba los conocimientos adquiridos en el curso
                de Lit element por parte de Softek.
            </p>
        </nav>
        <button @click=${this._openComponenteFormulario}><strong>+</strong> Agendar nuevo evento</button>
        <span>&nbsp;&nbsp;</span>
        <div id="ComponenteFormularioContainer"></div>
        <section class="eventos">
            <div class="item-evento">
            <h2>Detalles del último evento guardado:</h2>
            <p>Nombre: ${this.eventData.name || 'N/A'}</p>
            <p>Fecha: ${this.eventData.date || 'N/A'}</p>
            <p>Hora: ${this.eventData.time || 'N/A'}</p>
            <p>Descripción: ${this.eventData.description || 'N/A'}</p>
            </div>
        </section>
        <h4 class="eliminar-eventos">Eliminar todos los eventos</h4>
        `;
    }
}
customElements.define('pantalla-principal', PantallaPrincipal);