import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/User/UserContext'
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBContainer
} from 'mdb-react-ui-kit';

export const Perfil = () => {

    const ctx = useContext(UserContext)

    const { userSubmitForm } = ctx

    const {
        name,
        lastname,
        email
    } = ctx.user

    const [userForm, setUserForm] = useState({
        name: "",
        lastname: "",
        email
    })

    // 
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (event) => {
        setUserForm({
            ...userForm,
            [event.target.name]: event.target.value
        });
    };

    const sendData = (event) => {
        event.preventDefault();
        userSubmitForm(userForm);
        setAlertMessage('¡Cambios guardados exitosamente!');
        // You can customize the alert message as needed
        setTimeout(() => {
            setAlertMessage('');
        }, 7000); // Hide the alert after 3 seconds (adjust as needed)
    };

    useEffect(() => {
        setUserForm({
            ...userForm,
            name,
            lastname
        });
    }, []);

    return (
        <form onSubmit={(e) => sendData(e)}>
            <MDBContainer>
                <MDBRow className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <MDBCol className='text-center justify-content-center'>
                        <h1 className="my-5 fw-bold ls-tight px-3">
                            Mi cuenta
                        </h1>
                    </MDBCol>
                    <MDBCol className='my-2'>
                        <MDBInput id='name' label='Nombre' onChange={(e) => { handleChange(e) }} value={userForm.name} />
                    </MDBCol>
                    <MDBCol className='my-2'>
                        <MDBInput id='lastname' label='Apellido' onChange={(e) => { handleChange(e) }} value={userForm.lastname} />
                    </MDBCol>
                </MDBRow>
                <MDBInput wrapperClass='my-2' type='email' id='form6Example5' label='Email' onChange={(e) => { handleChange(e) }} value={userForm.email} />
                <MDBBtn className='my-4' type='submit' block>
                    Guardar Cambios
                </MDBBtn>
                {alertMessage && (
                    <div className="alert alert-success" role="alert">
                        {alertMessage}
                    </div>
                )}
            </MDBContainer>
        </form>
    );
}