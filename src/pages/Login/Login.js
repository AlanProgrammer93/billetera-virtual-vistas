import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';
import clientAxios from '../../utils/Axios';

import './Login.css';

const Login = () => {
    const history = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(prev => ({ ...prev, [name]: value }));
    }

    const register = () => {
        history('/register')
    }

    const submit = async () => {
        if (!data.email || !data.password) {
            alert("COMPLETE TODOS LOS CAMPOS");
            return;
        }

        var formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);

        await clientAxios.post('login', formData)
            .then(res => {
                console.log("login ", res);
            })
            .catch(error => {
                alert("USUARIO O CAONTRASEÑA INCORRECTA");
                return;
            })
    }

    return <div>
        <Layout>
            <div className='login'>
                <img src='/images/logo.png' />
                <div className='login-container'>
                    <h3>¡Hola, de nuevo!</h3>
                    <input
                        placeholder='Email'
                        name='email'
                        value={data.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        type="password"
                        placeholder='Ingresá tu contraseña'
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                    />
                    <button className='btn-login' onClick={submit}>
                        Ingresar
                    </button>
                    <button onClick={register} className='btn-register'>
                        Registrarme
                    </button>
                    <p>Recuperar Contraseña</p>
                </div>
            </div>
        </Layout>
    </div>;
};

export default Login;
