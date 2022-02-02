import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import './Login.css';

const Login = () => {
    const history = useNavigate()

    const register = () => {
        history('/register')
    }

    return <div>
        <Layout>
            <div className='login'>
                <img src='/images/logo.png' />
                <div className='login-container'>
                    <h3>¡Hola, de nuevo!</h3>
                    <input placeholder='Correo Electronico' />
                    <br />
                    <br />
                    <input placeholder='Contraseña' />
                    <button className='btn-login'>
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
