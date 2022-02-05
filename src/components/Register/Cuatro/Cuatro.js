import React, { useState } from 'react';
import './Cuatro.css'

const Cuatro = ({ onNext, onPrev, data, setData }) => {
    const [code, setCode] = useState({
        uno: '',
        dos: '',
        tres: '',
        cuatro: ''
    });

    const nextNumber = (e, next) => {
        const { name, value } = e.target;
        setCode(prev => ({ ...prev, [name]: value }));

        if(next){
            document.getElementById(next).focus()
        } 
    }

    return <div className='register-cuatro'>
        <div className='arrow' onClick={onPrev}>
            <img src='/images/arrow-left.png' />
        </div>
        <div className='register-cuatro-container'>
            <p>Ingresá el codigo que te enviamos al celular:</p>
            <p>1133649875</p>
            <br />
            <div className='input-otp'>
                <input type="text" value={code.uno} id='uno' name="uno" maxLength={1} onChange={(e) => nextNumber(e, 'dos')} />
                <input type="text" value={code.dos} id='dos' name="dos" maxLength={1} onChange={(e) => nextNumber(e, 'tres')} />
                <input type="text" value={code.tres} id='tres' name="tres" maxLength={1} onChange={(e) => nextNumber(e, 'cuatro')} />
                <input type="text" value={code.cuatro} id='cuatro' name="cuatro" maxLength={1} onChange={(e) => nextNumber(e, '')} />
            </div>
            <span>Reenviar Codigo</span>

            <button className='continue' onClick={onNext}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Cuatro;
