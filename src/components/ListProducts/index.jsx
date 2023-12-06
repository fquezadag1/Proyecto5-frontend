import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/Product/ProductContext'
import {
  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,
  MDBBtn, MDBContainer
} from 'mdb-react-ui-kit';

export const ListProducts = (props) => {

  const ctx = useContext(ProductContext)

  const { products, getProducts } = ctx

  useEffect(() => {

    const fetchProducts = () => {
      return getProducts()
    }

    fetchProducts()

  }, [])

  return (

    <MDBContainer>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 my-4">{props.title}</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 mb-4">
        {products.map((e) => (
          <MDBCard key={e._id} alignment='center' className="bg-light px-2 h-100 square border border-2">
            <MDBCardImage src={e.imagen} alt="Product" className="w-100" />
            <MDBCardBody>
              <MDBCardTitle>{e.nombre}</MDBCardTitle>
              <MDBCardText>{e.viscosidad}</MDBCardText>
              <MDBCardText>${e.precio}</MDBCardText>
              <div>
                <Link to={`/Proyecto5-frontend/${e._id}`}>
                  <MDBBtn className='my-2' color="primary">Ver Más</MDBBtn>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </MDBContainer>
  );
};