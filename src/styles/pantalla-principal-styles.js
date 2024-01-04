import { css } from "lit";

export default css`
        :host{
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            text-align: center;
        }

        ul {
            list-style-type: none; /* Elimina los puntos por defecto */
            padding: 0;
            margin: 0rem 0.7rem; 
        }

        .texto-presentacion{
            padding: 0rem 2rem;
        }
        
        button{
            background-color: rgb(216, 216, 216);
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            box-shadow: 2px 2px 3px rgba(128, 128, 128, 0.678);
            cursor: pointer;
            display: block;
            margin:auto;
        }

        button:active{
            border: solid inset 1px rgb(186, 186, 186);
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
            padding: 0rem 4rem;
        }

        .item-evento{
            background-color: rgba(219, 219, 219, 0.35);
            border-radius: 5px;
            justify-content: center;
            padding: 0rem 1rem;
            margin-top: 10px;  
        }

        .detalles-evento{
            display:flex;
            justify-content: space-between;
        }
    
        .eliminar-eventos{
            cursor:pointer;
        }

        #deleteButton {
            margin-top: 20px;
            background-color: #bf0101;
            color: white;
            padding: 0.5rem 1rem;
            border: 5px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
            box-shadow: none;
        }
`