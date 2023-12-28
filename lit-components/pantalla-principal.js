import { LitElement, html, css } from 'lit';
import  styles  from "./my-element-styles";

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
        return html`<p>Hello, ${this.name}!</p>`


    }
}
customElements.define('pantalla-principal', PantallaPrincipal);