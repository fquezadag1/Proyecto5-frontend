import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter bgColor='black' className='text-center text-lg-start text-white'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Encuentranos en RRSS</span>
                </div>
                <div>
                    <a href='https://facebook.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='facebook-f' />
                    </a>
                    <a href='https://twitter.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='twitter' />
                    </a>
                    <a href='https://instagram.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='instagram' />
                    </a>
                </div>
            </section>
            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                Distribuidora Fresh-Oil
                            </h6>
                        </MDBCol>
                        <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Links Utiles</h6>
                            <p>
                                <a href='https://render.com/' className='text-reset'>
                                    Render
                                </a>
                            </p>
                            <p>
                                <a href='https://mdbootstrap.com/' className='text-reset'>
                                    MDBoostrap
                                </a>
                            </p>
                            <p>
                                <a href='https://vitejs.dev/' className='text-reset'>
                                    Vite
                                </a>
                            </p>
                            <p>
                                <a href='https://www.mongodb.com/es/cloud/atlas/lp/try4' className='text-reset'>
                                    Mongo Atlas
                                </a>
                            </p>
                        </MDBCol>
                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Productos Castrol</h6>
                            <p>
                                Autos
                            </p>
                            <p>
                                Motos
                            </p>
                            <p>
                                Industrial
                            </p>
                        </MDBCol>
                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Av Los Carrera # 2023, Concepción, Chile
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                info@correo.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 56 934 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </MDBFooter>
    );
}