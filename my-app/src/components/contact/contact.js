import React, { useState } from 'react';
import './contact.css';
import img from '../../img/livros.jpg';
//import {sendEmail} from '../../api/email';

const Contact = () => {
  const [nome, setNome] = useState('')  
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('') 
  const [informacao, setInformacao] = useState('') 

  
  async function sendEmailtoSagwaBooks(){
   /* await sendEmail(Email,Nome,Assunto,telefone).then(() => {
      //showModal() //email enviado, equipe entrará em contato em breve.
    })    //fazer algo quando der errado.*/
  }

    return (
      <><div className="information">Entre em Contato Conosco: </div><div className="container-all">
        <div className='container'>
          <form onSubmit={sendEmailtoSagwaBooks()}>
            <div class="my-label">
              <label>Nome:</label>
            </div>
            <div class="my-input">
              <input
                type="text"
                value={nome}
                id="nome"
                name="nome"
                required placeholder="nome"
                onChange={(e) => setNome(e.target.value)} />
            </div>
            <div class="my-label">
              <label>Email:</label>
            </div>
            <div class="my-input">
              <input
                type="email"
                value={email}
                id="email"
                name="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="my-label">
              <label>telefone de contato: </label>
            </div>
            <div class="my-input">
              <input
                type="text"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                id="telefone"
                name="telefone"
                placeholder="telefone" />
            </div>
            <div class="my-label">
              <label>conte-nos sobre oque precisa: </label>
            </div>
            <div class="my-input">
              <input
                type="text"
                value={informacao}
                id="informacao"
                name="informacao"
                placeholder="informacao"
                onChange={(e) => setInformacao(e.target.value)} />
            </div>
            <button> Enviar </button>
          </form>
        </div>
      </div></>
    );
}


export default Contact;