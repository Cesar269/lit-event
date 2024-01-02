import { LitElement, html, css } from 'lit';
import styles from "./styles/pantalla-principal-styles";
import "./components/modal-form.js";

export class PantallaPrincipal extends LitElement {

    static styles = [
        styles
    ]

    static get properties() {
        return {
        };
    }

    constructor() {
        super();
        this.addEventListener('display-modal', e => {
            const modal = this.shadowRoot.querySelector('modal-form');
            modal.open = true;
        });
    }

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
            <div class="item-evento">
                <p>Un evento de un día festivo</p>
                <p>24 de febrero de 2023 a las 12:30 hrs.</p>
            </div>
        </section>
        <h4 class="eliminar-eventos">Eliminar todos los eventos</h4>
        `;
    }

    _openForm(e) {
        console.log("apoco si?")
        this.dispatchEvent(new CustomEvent('display-modal'));
    }

}


customElements.define('pantalla-principal', PantallaPrincipal);