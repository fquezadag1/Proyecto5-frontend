import { useState, useContext} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from './../context/User/UserContext'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBCardTitle
}
  from 'mdb-react-ui-kit';

export const Register = () => {

  const userCtx = useContext(UserContext)

  const {
    registerUser
  } = userCtx

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: ""
  })

  const handleChange = (event) => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(data);

      if (response.status === 200) {
        setSuccessMessage('Registro exitoso. ¡Bienvenido!');
        setErrorMessage('');

        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);

      } else {
        setErrorMessage('Error en el registro. Por favor, intenta nuevamente.');
        setSuccessMessage('');

        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      }

    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage('Error en el registro. Por favor, intenta nuevamente.');
      setSuccessMessage('');

      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <MDBContainer fluid className='p-4'>
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          {/* <h2 className="my-5 text-success display-3 fw-bold ls-tight px-3">
            Registrate Aqui
          </h2> */}
          {/* <h2 className='px-3'>
            Y aprovecha todos los beneficios que tenemos para ti. 
          </h2> */}
          <img
            src="src/assets/castrol1.jpg"
            class="img-fluid"
            alt="Hollywood Sign on The Hill"
          />
        </MDBCol>

        <MDBCol md='6'>
          <form onSubmit={(e) => { sendData(e) }}>
            <MDBCard className='d-flex justify-content-center align-items-center h-100'>
              <MDBCardBody className='p-5'>
                <MDBCardTitle className='fw-bold mb-1 py-2 text-center'><h2>Registrate!</h2></MDBCardTitle>
                
              <Link className='my-1 text-center text-sm' to="/Proyecto5-frontend/login"><p className="my-1 text-center text-sm text-gray-600">
                Si ya tienes cuenta puedes ingresar aquí</p></Link>
                <MDBRow>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Nombre' id='name' name='name' type='text' required onChange={(e) => { handleChange(e) }} />
                  </MDBCol>
                  <MDBCol col='6'>
                    <MDBInput wrapperClass='mb-4' label='Apellido' id='lastname' name='lastname' type='text' required onChange={(e) => { handleChange(e) }} />
                  </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='mb-4' label='Email' id='email' name='email' type='email' required onChange={(e) => { handleChange(e) }} />
                <MDBInput wrapperClass='mb-4' label='Contraseña' id='password' name='password' type='password' required onChange={(e) => { handleChange(e) }} />
                <div className='d-flex justify-content-center mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Suscribir al Newsletter' required />
                </div>
                <MDBBtn className='w-100 mb-4' color='success' type='submit' size='md'>Registrar</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </form>
        </MDBCol>
      </MDBRow>

      {successMessage && (
        <div className='alert alert-success' role='alert'>
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className='alert alert-danger' role='alert'>
          {errorMessage}
        </div>
      )}
    </MDBContainer>
  );
}