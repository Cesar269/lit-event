import { css } from 'lit';

export const styles = css`
  .container {
    margin-top: 20px;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
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
  }
`;