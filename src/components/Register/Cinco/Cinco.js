import React from 'react';
import clientAxios from '../../../utils/Axios';
import './Cinco.css'

const Cinco = ({ onPrev, data, setData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData(prev => ({ ...prev, [name]: value }));
  }

  const submit = async () => {
    if (!data.password || !data.confirmPassword) {
      alert("COMPLETE TODOS LOS CAMPOS");
      return;
    }

    if (data.password != data.confirmPassword) {
      alert("LAS CONTRASEÑAS NO COINCIDEN");
      return;
    }

    var formData = new FormData();
    formData.append("lastName", data.lastName);
    formData.append("firstName", data.firstName);
    formData.append("dni", data.dni);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("password", data.password);

    await clientAxios.post('users/save', formData)
      .then(res => {
        console.log("Guardado ");
      })
      .catch(error => {
        alert("ERROR AL REGISTRAR USUARIO");
        return;
      })

  }

  return <div className='register-cinco'>
    <div className='arrow' onClick={onPrev}>
      <img src='/images/arrow-left.png' />
    </div>
    <div className='register-cinco-container'>
      <p>Para poder usar tu cuenta necesitamos que definas una contraseña:</p>
      <br />
      <input
        type="password"
        placeholder='Ingresá tu contraseña'
        name='password'
        value={data.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder='Repetir contraseña'
        name='confirmPassword'
        value={data.confirmPassword}
        onChange={handleChange}
      />
      <div className='card-password'>
        <h3>Contraseña:</h3>
        <p>Debe tener al memos 8 caracteres, una letra mayuscula y un número.</p>
      </div>

      <button className='continue' onClick={submit}>
        Confirmar Contraseña
      </button>
    </div>
  </div>;
};

export default Cinco;
