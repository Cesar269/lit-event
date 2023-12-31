import { LitElement, html, css } from 'lit';
import styles from "./pantalla-principal-styles";


export class PantallaPrincipal extends LitElement {

    static styles = [
        styles
    ]

    static get properties() {
        return {
            
            name: { type: String },
        };
    }

    constructor() {
        super();
        this.name = 'Cesar'
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
                <p>Un evento de un día festivo</p>
                <p>24 de febrero de 2023 a las 12:30 hrs.</p>
            </div>
        </section>
        <h4 class="eliminar-eventos">Eliminar todos los eventos</h4>
        `;
    }
}
customElements.define('pantalla-principal', PantallaPrincipal);