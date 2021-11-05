import React, { useState } from "react";
import './styles.css'
export default function () {
    const [ShowFieldEmail, setShowFieldEmail] = useState('InputEmailFieldFeatures')

    const [formEmail, setFormEmail] = useState({
        Email: '',
        Origem: 'SeeLater'
    })
    function handleChange(e, id) {
        const { Email, Origem } = formEmail
        const newForm = {
            Email: id === 'Email' ? e : Email,
            Origem
        }
        setFormEmail(newForm)
    }
    function handleOpenEmailField(e) {
        e.preventDefault()
        if (formEmail.Email === '') {
            ShowFieldEmail === 'InputEmailFieldFeaturesShow' ?
                setShowFieldEmail('InputEmailFieldFeatures') :
                setShowFieldEmail('InputEmailFieldFeaturesShow')
        }
        else {
            CreateEmail()
        }
    }

    function handleChangeText(bollean, x) {
        const el = document.getElementById('ButtonEmailSentFeatures')
        const el1 = document.getElementById('FormEmailField')

        if (bollean) {
            if (x == 201) {
                el.innerText = 'Seu email já está cadastrado em nossa lista de avisos.'
            } else if (x == 202) {
                el.innerText = 'Seu email já está cadastrado em nossa lista de avisos, foi enviado um email para verificação.'
            }
            else {
                el.innerText = 'Foi enviado um email de confirmação! Por favor cheque seu spam também.'
            }
            el1.className = 'FormClose'
        }
        else {
            el.innerHTML = 'Não foi possível registrar seu email, tente novamente.'
        }
        el.className = 'ButtonEmailSentFeaturesShow'
    }

    async function CreateEmail() {
        const email = {
            method: 'POST',
            body: JSON.stringify(formEmail),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
        try {
            const response = await fetch('http://54.233.252.63:3300/createemail', email)
             // const body = await response.json()
            //  console.log(body)
            if (response.status === 200) {
                handleChangeText(true)
            }
            else if (response.status === 201) {
                handleChangeText(true, 201)
            }
            else if (response.status === 202) {
                handleChangeText(true, 202)
            }
            else {
                handleChangeText(false)
            }
        }
        catch (e) {
            handleChangeText(false)
            console.log(e)
        }

    }
    return (
        <div id='FeaturesContainer' className='Features'>


            <div className='ContainerFeatures'>
                <div className='ColumnFeatures' data-anime="top">
                    <div className='BoxLineFeatures'>
                        <div className='FeaturesDescription'>
                            <h1>
                                Em breve uma nova versão com muito mais vantagens!
                            </h1>
                        </div>
                        <div id='EmailField'>
                            <button id='ButtonEmailSentFeatures' className='ButtonEmailSentFeatures'></button>
                            <form className='FormEmailField' id='FormEmailField' onSubmit={e => { handleOpenEmailField(e) }} >
                                <input id='InputEmailFieldFeatures' className={ShowFieldEmail} spellcheck="false"
                                    value={formEmail.Email} onChange={e => handleChange(e.target.value, 'Email')} type='email' placeholder='Insira seu e-mail' />
                                <button className='ButtonFeatures' type="submit" >{formEmail.Email.includes('@') ? 'Enviar' : 'Me Avise!'}</button>
                            </form>

                        </div>
                    </div>

                    <h3 className='FooterFeatures'>
                        V 1.0
                    </h3>

                </div>

            </div>
        </div>
    )
}