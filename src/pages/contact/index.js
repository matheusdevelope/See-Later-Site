import React, { useState } from "react";
import './styles.css'
import Footer from '../../components/Footer'


export default function () {
  
    const [ShowFields, setShowFields] = useState('')
    const [MessageConfirmed, setMessageConfirmed] = useState('')
    const [ShowConfirmed, setShowConfirmed] = useState('')

    const [formEmail, setFormEmail] = useState({
        Name: '',
        Email: '',
        Message: '',
        Origem: 'See Later - Site'
    })
    function handleChange(e, id) {
        const { Name, Email, Message, Origem } = formEmail
        const newForm = {
            Name: id == 'Name' ? e : Name,
            Email: id == 'Email' ? e : Email,
            Message: id == 'Message' ? e : Message,
            Origem
        }
        setFormEmail(newForm)
    }
    function handleConfirmationMail(bollean) {
        if(bollean){
         setMessageConfirmed("Recebi seu email, em breve entro em contato!") 
         setShowFields('') 
        } else{
            setMessageConfirmed("Falha no envio, tente me enviar novamente.")
        }
        setShowConfirmed('Show')   
    }
    async function SendMail() {
        const options = {
            method: 'POST',
            body: JSON.stringify(formEmail),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
        fetch('http://localhost:3200/sendmail', options)
            .then(response => {
                response.status == 200 
                ? handleConfirmationMail(true) 
                : handleConfirmationMail(false)
            })
            .catch((error) => {
                handleConfirmationMail(false)
            })

    }
    function CheckFields(){
        let Exec = false
        let Fields = 'Por favor preencher '
        if(formEmail.Name ===''){
            Exec ? Fields += ' Nome' : Fields += ' o campo Nome'
            Exec = true
        }
        if(formEmail.Email ===''){
            Exec ? Fields += ', Email' : Fields += ' o campo Email' 
            Exec = true
        }
        if(formEmail.Message.length < 10){
           Exec ? Fields += ' e Mensagem (no mínimo 10 caracteres)' 
           : Fields += 'o campo Mensagem (no mínimo 10 caracteres)' 
            Exec = true
        }
        Fields +='.'
        if(Exec){
            alert(Fields)
        }
        else{
            SendMail()
        }

    }
    return (
        <div className='ContainerContact'>
            <h1>Gostou do Projeto?</h1>
            <form className='FormContact'>
                {
                    ShowConfirmed !=='Show' &&
                    <button id='ButtonFieldsContact'
                    className={`ButtonFieldsContact${ShowFields}`}
                    onClick={() => setShowFields("Show")}>
                    Vamos Conversar!
                </button>
                }
                
                <button id='ButtonConfirmedContact'
                    className={`ButtonConfirmedContact${ShowConfirmed}`}
                    >
                    {MessageConfirmed} 
                </button>
                <div id='FieldsContact'
                    className={`FieldsContact${ShowFields}`}>
                    <input id='InputFieldContact' type='text' value={formEmail.Name}
                        onChange={e => handleChange(e.target.value, 'Name')}
                        placeholder='Qual o seu nome?' />
                    <input id='InputFieldContact' type='email' value={formEmail.Email}
                        onChange={e => handleChange(e.target.value, 'Email')}
                        placeholder='Qual o seu e-mail?' />
                    <textarea rows="5" cols="60" maxlength="100" spellcheck="false" autoCapitalize='words'
                        id='InputMessageContact' type='text' placeholder='Insira sua mensagem'
                        onChange={e => handleChange(e.target.value, 'Message')}
                        value={formEmail.Message} />
                    <button onClick={() => CheckFields()}>
                        Enviar
                    </button>
                </div>
            </form>
            <Footer margin={`16px 0 0 0`} padding={`0`} />
        </div>
    )
}