import React, { useState } from "react";
import './styles.css'
import Footer from '../../components/Footer'


export default function Contact() {

    const [ShowFields, setShowFields] = useState('')
    const [MessageConfirmed, setMessageConfirmed] = useState('')
    const [ShowConfirmed, setShowConfirmed] = useState('')

    const [ShowLoading, setShowLoading] = useState('LoadingStop')
    const [formEmail, setFormEmail] = useState({
        Name: '',
        Email: '',
        Message: '',
        Origem: 'SeeLater'
    })
    function handleChange(e, id) {
        const { Name, Email, Message, Origem } = formEmail
        const newForm = {
            Name: id === 'Name' ? e : Name,
            Email: id === 'Email' ? e : Email,
            Message: id === 'Message' ? e : Message,
            Origem
        }
        setFormEmail(newForm)
    }
    function handleConfirmationMail(bollean) {
       // ChangeText('Enviar')
        setShowLoading('LoadingStop')
        
        if (bollean) {
            setMessageConfirmed("Recebi seu email, em breve entro em contato!")
            let el1 = document.getElementById('ButtonConfirmedContact');
            el1.className = 'ButtonConfirmedContact';
            let el2 = document.getElementById('FieldsContact');
            el2.className = 'FieldsContact';
            formEmail.Message = ''
            setFormEmail(formEmail)
        } else {
            setMessageConfirmed("Falha no envio, tente me enviar novamente.")
        }
        setShowConfirmed('Show')
    }
    function ChangeText(data){
        let Message = document.getElementById('ButtonSend');
        Message.innerText = data
    }
    async function SendMail() {
        ChangeText('Enviando')
        setShowLoading('LoadingStart')

        const email = {
            method: 'POST',
            body: JSON.stringify(formEmail),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
        try {
            const response = await fetch('http://54.233.252.63:3300/sendmail', email)
             const body = await response.json()
            // console.log(body)
            if (response.status === 200) {
                  handleConfirmationMail(true)
            }
            else {
               // ChangeText('Enviando')
                handleConfirmationMail(false)
                
            }
        }
        catch (e) {
           // ChangeText('Enviando')
            handleConfirmationMail(false)
            console.log(e)
        }

    }
    function CheckFields(e) {
        e.preventDefault()
        let Exec = false
        let Fields = 'Por favor preencher '
        if (formEmail.Name === '') {
            Exec ? Fields += ' Nome' : Fields += ' o campo Nome'
            Exec = true
        }
        if (formEmail.Email === '') {
            Exec ? Fields += ', Email' : Fields += ' o campo Email'
            Exec = true
        }
        if (formEmail.Message.length < 10) {
            Exec ? Fields += ' e Mensagem (no mínimo 10 caracteres)'
                : Fields += 'o campo Mensagem (no mínimo 10 caracteres)'
            Exec = true
        }
        Fields += '.'
        if (Exec) {
            alert(Fields)
        }
        else {

            SendMail()
        }

    }
    function handleOpenForm(e) {
        e.preventDefault()
        setShowFields('Show')
    }

    return (
        <div id='ContactContainer' className='Contact'>
            <div className='ContainerContact'  >
                <h1>Gostou do Projeto?</h1>
                <form className='FormContact' >
                    <button id='ButtonFieldsContact'
                        className={`ButtonFieldsContact${ShowFields}`}
                        onClick={e => handleOpenForm(e)}>
                        Vamos Conversar!
                    </button>
                    <button id='ButtonConfirmedContact'
                        className={`ButtonConfirmedContact${ShowConfirmed}`}
                    >
                        {MessageConfirmed}
                    </button>

                    <div id='FieldsContact' className={`FieldsContact${ShowFields}`}>

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

                        <button id="ButtonSend" onClick={(e) => CheckFields(e)}>
                            Enviar
                            {ShowLoading == 'LoadingStart'
                                &&
                                <div id='Loading' ></div>
                            }
                        </button>

                    </div>
                </form>
                <p>matheusdevctt@gmail.com</p>
                <Footer margin={`16px 0 0 0`} padding={`0`} />
            </div>
        </div>
    )
}