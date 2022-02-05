import React from 'react';
import './Uno.css'

const Uno = ({onNext, data, setData}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    return <div className='register'>
        <img src='/images/logo.png' />
        <div className='register-container'>
            <p>Comenzá ingresando estos datos:</p>
            <br />
            <input 
                placeholder='Nombre' 
                name='name' 
                value={data.name} 
                onChange={handleChange}
            />
            <br />
            <br />
            <input 
                placeholder='Apellido'
                name='lastName' 
                value={data.lastName} 
                onChange={handleChange} 
            />
            <br />
            <br />
            <input 
                placeholder='DNI'
                name='dni' 
                value={data.dni} 
                onChange={handleChange} 
            />

            <button className='continue' onClick={onNext}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Uno;
