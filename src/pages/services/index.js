import React from "react";
import Img from '../../images/imag2.png'
import './styles.css'
export default function () {
   
    return (
        <div className='ContainerServices'>
            <div className='ColumnServices'>
                <div className='BoxLineServices'>
                    <div className='ServicesDescription'>
                        <h1>
                            Uma interface simples e objetiva!
                        </h1>

                        <p>
                            1º Abra o popup
                            <br />
                            2º Salve seu link
                            <br />
                            3º Navegue para o endereço!
                        </p>
                        <div className='SubDescriptionServices'>                        
                        <br />
                        <p>
                            Com o nome e endereço preenchidos automaticamente
                            você ganha agilidade e não tem que se preocupar com links!
                        </p>

                        <p>
                            Precisou do conteúdo?
                            <br />
                            Ta na mão! Basta abrir o popup e navegar.
                        </p>

                        <p>
                            Ok, você já viu o que tinha que ver e não quer mais o lembrete na lista?
                            <br />
                            Deleta e bora para o próximo!
                        </p>
                        </div>
                    </div>
                    <img src={Img} />
                </div>
                <div className='BoxLineServices2'>
                <br />
                        <p>
                            Com o nome e endereço preenchidos automaticamente
                            você ganha agilidade e não tem que se preocupar com links!
                        </p>

                        <p>
                            Precisou do conteúdo?
                            <br />
                            Ta na mão! Basta abrir o popup e navegar.
                        </p>

                        <p>
                            Ok, você já viu o que tinha que ver e não quer mais o lembrete na lista?
                            <br />
                            Deleta e bora para o próximo!
                        </p>
                </div>
            <h3 className='FooterServices'>
                V 1.0
            </h3>
            </div>

        </div>
    )
}