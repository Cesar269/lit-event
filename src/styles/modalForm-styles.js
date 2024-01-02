import { css } from 'lit'

export default css`
:host {
  font-family: Arial, Helvetica, sans-serif;
}
.wrapper {
    opacity: 0;
    position: absolute;
    top: 0px;
    z-index: 10;
    transition: opacity 0.25s ease-in;
}

.wrapper:not(.open) {
    visibility: hidden;
}

.wrapper.open {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;
}

.overlay {
    background: rgba(0, 0, 0, 0.631);
    height: 100%;
    width: 100%;
    position: relative;
}

.dialog {
    background: #ffffff;
    border-radius: 13px;
    max-width: 600px;
    padding: 1rem;
    position: absolute;
}

.dialog h1 {
    margin: 0 0 10px;
}

/* Estilos del formulario */

.container {
    margin-top: 20px;
    max-width: 400px;
    margin: auto;
    padding: 20px;
}

h2 {
    color: #333;
    text-align: center;
}

label {
    display: block;
    margin-bottom: 10px;
    color: #555;
}

input[type="text"],
input[type="date"],
input[type="time"],
textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
}

button:hover {
    background-color: #0056b3;
}`;