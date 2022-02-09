import React from 'react';
import clientAxios from '../../../utils/Axios';

import './Tres.css'

const Tres = ({ onNext, onPrev, data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    const ckeckContinue = async () => {
        if (!data.phone) {
            alert("COMPLETE TODOS LOS CAMPOS");
            return;
        }

        await clientAxios.post('users/sms/send', {to: `+54${data.phone}`})
            .then(res => {
                console.log(res.data);
                setData({...data, token: res.data.access_token})
                onNext();
            })
            .catch(error => {
                alert("ERROR DE SERVICIO. INTENTELO OTRA VES");
                return;
            })
    }
    
    return <div className='register-tres'>
        <div className='arrow' onClick={onPrev}>
            <img src='/images/arrow-left.png' />
        </div>
        <div className='register-tres-container'>
            <p>Ingresá tu celular:</p>
            <br />
            <input
                placeholder='Celular'
                name='phone'
                value={data.phone}
                onChange={handleChange}
            />
            <span>Codigo de area + Número</span>

            <button className='continue' onClick={ckeckContinue}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Tres;
