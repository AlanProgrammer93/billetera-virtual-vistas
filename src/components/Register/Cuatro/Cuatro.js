import React, { useState } from 'react';
import clientAxios from '../../../utils/Axios';

import './Cuatro.css'

const Cuatro = ({ onNext, onPrev, data, setData }) => {
    const [code, setCode] = useState({
        uno: '',
        dos: '',
        tres: '',
        cuatro: ''
    });
    console.log(data);
    const nextNumber = (e, next) => {
        const { name, value } = e.target;
        setCode(prev => ({ ...prev, [name]: value }));

        if (next) {
            document.getElementById(next).focus()
        }
    }

    const ckeckContinue = async () => {
        if (!code.uno || !code.dos || !code.tres || !code.cuatro) {
            alert("COMPLETE TODOS LOS CAMPOS");
            return;
        }

        const codeInput = `${code.uno}${code.dos}${code.tres}${code.cuatro}`

        console.log(`+54${data.phone}`);
        console.log(codeInput);
        console.log(data.token);

        console.log("TODOS LOS DATOS ", data);

        await clientAxios.post('users/sms/ckeck', {to: `+54${data.phone}`, message: codeInput, token: data.token})
            .then(res => {
                console.log("algo");
                onNext();
            })
            .catch(error => {
                alert("CODIGO INVALIDO");
                console.log(error);
                onNext();
                return;
            })

    }

    return <div className='register-cuatro'>
        <div className='arrow' onClick={onPrev}>
            <img src='/images/arrow-left.png' />
        </div>
        <div className='register-cuatro-container'>
            <p>Ingresá el codigo que te enviamos al celular:</p>
            <p>{data.phone}</p>
            <br />
            <div className='input-otp'>
                <input type="text" value={code.uno} id='uno' name="uno" maxLength={1} onChange={(e) => nextNumber(e, 'dos')} />
                <input type="text" value={code.dos} id='dos' name="dos" maxLength={1} onChange={(e) => nextNumber(e, 'tres')} />
                <input type="text" value={code.tres} id='tres' name="tres" maxLength={1} onChange={(e) => nextNumber(e, 'cuatro')} />
                <input type="text" value={code.cuatro} id='cuatro' name="cuatro" maxLength={1} onChange={(e) => nextNumber(e, '')} />
            </div>
            <span>Reenviar Codigo</span>

            <button className='continue' onClick={ckeckContinue}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Cuatro;
