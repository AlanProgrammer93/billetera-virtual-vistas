import React from 'react';
import clientAxios from '../../../utils/Axios';

import './Uno.css'

const Uno = ({onNext, data, setData}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    const ckeckContinue = async () => {
        if (!data.firstName || !data.lastName || !data.dni) {
            alert("COMPLETE TODOS LOS CAMPOS");
            return;
        }

        var formData = new FormData();
        formData.append("dni", data.dni);

        await clientAxios.post('users/check_dni', formData)
            .then(res => {
                onNext();
            })
            .catch(error => {
                alert("YA EXISTE EL DNI")
                return;
            })
    }

    return <div className='register'>
        <img src='/images/logo.png' />
        <div className='register-container'>
            <p>Comenzá ingresando estos datos:</p>
            <br />
            <input 
                placeholder='Nombre' 
                name='firstName' 
                value={data.firstName} 
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

            <button className='continue' onClick={ckeckContinue}>
                Continuar
            </button>
        </div>
    </div>;
};

export default Uno;
