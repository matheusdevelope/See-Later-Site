import React, { useState } from "react";
import './styles.css'
export default function () {
    const [ShowFieldEmail, setShowFieldEmail] = useState('InputEmailFieldFeatures')
    const [Email, setEmail] = useState('')
    function handleOpenEmailField(e) {
        e.preventDefault()
       if(Email == ''){
           ShowFieldEmail == 'InputEmailFieldFeaturesShow' ? 
        setShowFieldEmail('InputEmailFieldFeatures') :
        setShowFieldEmail('InputEmailFieldFeaturesShow')
       }
       else{
          //Enviar para o server 
        console.log(e) 
       }
    }
    return (
        <div className='ContainerFeatures'>
            <div className='ColumnFeatures'>
                <div className='BoxLineFeatures'>
                    <div className='FeaturesDescription'>
                        <h1>
                            Em breve uma nova versão com muito mais vantagens!
                        </h1>
                    </div>
                    <div id='EmailField'>
                        <form onSubmit={e=>{handleOpenEmailField(e)}} >
                            <input id='InputEmailFieldFeatures' className={ShowFieldEmail}
                            value={Email}onChange={e=>setEmail(e.target.value)} type='email' placeholder='Insira seu e-mail'/>
                            <button type="submit" >{Email.includes('@')  ? 'Enviar' : 'Me Avise!'}</button>
                        </form>

                    </div>
                </div>

                <h3 className='FooterFeatures'>
                    V 1.0
                </h3>

            </div>


        </div>
    )
}