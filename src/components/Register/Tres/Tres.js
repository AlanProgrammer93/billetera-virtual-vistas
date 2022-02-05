import React from 'react';
import './Tres.css'

const Tres = ({ onNext, onPrev, data, setData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
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
                name='tel'
                value={data.tel}
                onChange={handleChange}
            />
            <span>Codigo de area + Número</span>

            <button className='continue' onClick={onNext}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Tres;
