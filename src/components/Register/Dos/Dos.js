import React from 'react';
import './Dos.css'

const Dos = ({ onNext, onPrev, data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
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

            <button className='continue' onClick={onNext}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Dos;
