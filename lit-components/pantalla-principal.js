import { LitElement, html, css } from 'lit';
import  styles  from "./pantalla-principal-styles";

export class PantallaPrincipal extends LitElement {
   
    static styles=[
        styles
    ]
    
    static get properties() {
        return {
            name: { type: String },
        };
    }

    constructor(){
        super();
        this.name = 'Luis'
    }

    render() {
        return html``;
    }
}
customElements.define('pantalla-principal', PantallaPrincipal);