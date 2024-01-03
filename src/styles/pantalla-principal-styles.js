import { css } from "lit";

export default css `
        :host{
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
        }

        ul {
            list-style-type: none; /* Elimina los puntos por defecto */
          }

        button{
            background-color: rgb(216, 216, 216);
            padding: 0.4rem 0.8rem;
            border: none;
            border-radius: 4px;
            box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.678);
            cursor: pointer;
            display: block;
            margin:auto;
        }

        button:active{
            border: solid 1px rgb(186, 186, 186);
            box-shadow: 3px 3px 3px rgba(128, 128, 128, 0.922);
        }

        nav > h1{
            color: white;
        }

        .eventos{
            flex-direction: column;
            display: flex;
            justify-content: center;
            margin-top: 2rem;
        }

        .item-evento{
            background-color: rgba(219, 219, 219, 0.35);
            border-radius: 20px;
            display: block;
            justify-content: center;
            margin-top: 10px;  
        }
    
        .eliminar-eventos{
            cursor:pointer;
        }
`