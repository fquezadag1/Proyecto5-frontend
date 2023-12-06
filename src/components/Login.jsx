import { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/User/UserContext';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSpinner
}
  from 'mdb-react-ui-kit';

export const Login = () => {

  const userCtx = useContext(UserContext)

  const { loginUser } = userCtx

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

  }

  const sendData = (event) => {

    event.preventDefault()

    return loginUser(data)

  }

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      
      const inicio = performance.now();
      await loginUser(data);
      const fin = performance.now();

      const espera = Math.max(0, 4000 - (fin - inicio));

      setTimeout(() => {
        setIsLoading(false);
      }, espera);
    } catch (error) {
      console.error('Error during login:', error);
      setIsLoading(false);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>
              <h2 className="fw-bold mb-1 text-center">Iniciar Sesión</h2>
              <p className="text-black-50 text-center mb-3">Ingresa aqui tu Usuario y Contraseña</p>
              <p className="my-1 text-center text-sm text-gray-600">
                ¿Aun no tienes cuenta?</p>
              <Link className='my-1 text-center text-sm' to="/Proyecto5-frontend/register">Regístrate aquí</Link>
              <form onSubmit={(e) => { sendData(e) }}>
                <MDBInput wrapperClass='mb-4 w-100' label='Email' id='email' name='email' type='email' size="lg" onChange={(e) => { handleChange(e) }} required />
                <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='password' name='password' type='password' size="lg" onChange={(e) => { handleChange(e) }} required />
                <MDBBtn className='w-100' size='lg' color='success' type='submit' onClick={handleClick} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <MDBSpinner color="secondary" role="status" size="sm" />
                      <span className='mx-1'>Cargando</span>
                    </>
                  ) : (
                    <>
                      Ingresar
                    </>
                  )}
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
