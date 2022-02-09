import React from 'react';
import clientAxios from '../../../utils/Axios';

import './Dos.css'

const Dos = ({ onNext, onPrev, data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    const ckeckContinue = async () => {
        if (!data.email) {
            alert("COMPLETE TODOS LOS CAMPOS");
            return;
        }

        var formData = new FormData();
        formData.append("email", data.email);

        await clientAxios.post('users/check_email', formData)
            .then(res => {
                onNext();
            })
            .catch(error => {
                alert("YA EXISTE EL EMAIL")
                return;
            })
    }
    
    return <div className='register-dos'>
        <div className='arrow' onClick={onPrev}>
            <img src='/images/arrow-left.png' />
        </div>
        <div className='register-dos-container'>
            <p>Ingresá tu email:</p>
            <br />
            <input
                placeholder='Email'
                name='email'
                value={data.email}
                onChange={handleChange}
            />

            <button className='continue' onClick={ckeckContinue}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Dos;
