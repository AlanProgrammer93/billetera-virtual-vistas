import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Cinco from '../../components/Register/Cinco/Cinco';
import Cuatro from '../../components/Register/Cuatro/Cuatro';
import Dos from '../../components/Register/Dos/Dos';
import Tres from '../../components/Register/Tres/Tres';
import Uno from '../../components/Register/Uno/Uno';


const steps = {
  1: Uno,
  2: Dos,
  3: Tres,
  4: Cuatro,
  5: Cinco
}

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    token: ''
  });

  const onNext = () => {
    setStep(step + 1);
  }

  const onPrev = () => {
    setStep(step - 1);
  }

  return <div>
    <Layout>
      <Step 
        onNext={onNext} 
        onPrev={onPrev} 
        data={data} 
        setData={setData} 
      />
    </Layout>
  </div>;
};

export default Register;
