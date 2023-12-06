import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/User/UserContext'
import logo from '../assets/castrol-5.svg'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBIcon,
  MDBCollapse,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Header = () => {

  const ctxUser = useContext(UserContext)
  const { logoutUser } = ctxUser

  const [openNavRight, setOpenNavRight] = useState(false);

  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = () => setBasicModal(!basicModal);

  const handleLogout = () => {
    toggleOpen();
    logoutUser();
  };

  return (

    <MDBNavbar className='ms-auto' expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <Link to="/">
          <img
            height='30'
            alt=''
            src={logo} />
        </Link>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavRight(!openNavRight)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavRight}>

          {
            ctxUser.user?.name ?

              <MDBNavbarNav right fullWidth={false}>
                <MDBNavbarItem className='navbar-text mx-2'><Link to="/catalogo">Ver Todo el Catalogo</Link></MDBNavbarItem>
                <MDBNavbarItem className='navbar-text mx-2' onClick={toggleOpen}><Link to="/">Cerrar Sesión</Link></MDBNavbarItem>
                <MDBNavbarItem className='navbar-text mx-2'><Link to="/perfil">Mi cuenta</Link></MDBNavbarItem>
              </MDBNavbarNav>

              :

              <MDBNavbarNav right fullWidth={false}>
                <MDBNavbarItem className='navbar-text mx-2'><Link to="/catalogo">Ver Todo el Catalogo</Link></MDBNavbarItem>
                <MDBNavbarItem className='navbar-text mx-2'><Link to="/login">Iniciar Sesión</Link></MDBNavbarItem>
                <MDBNavbarItem className='navbar-text mx-2'><Link to="/register">Registrate</Link></MDBNavbarItem>
              </MDBNavbarNav>

          }
        </MDBCollapse>
      </MDBContainer>
      <MDBModal open={basicModal} setopen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cerrar Sesión</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='text-center'>¿Seguro que desea cerrar la sesión?</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Volver
              </MDBBtn>
              <MDBBtn color='danger' onClick={handleLogout}>Salir</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBNavbar>
  );
}