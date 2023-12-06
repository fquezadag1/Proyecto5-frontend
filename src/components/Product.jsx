import { useContext, useEffect, useState } from 'react'

import { ProductContext } from './../context/Product/ProductContext'
import { UserContext } from './../context/User/UserContext'


import {
  Link,
  useParams
} from 'react-router-dom'

import {
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBRow,
  MDBCol,
  MDBBtn

} from 'mdb-react-ui-kit';

export const Product = () => {

  const params = useParams()

  const { productId } = params

  const ctxProduct = useContext(ProductContext)
  const { product, getProduct, getPreferenceCheckoutMP } = ctxProduct
  const { nombre, precio, imagen, viscosidad } = product[0]

  const ctxUser = useContext(UserContext)
  const { user } = ctxUser

  const [paymentFormRendered, setPaymentFormRendered] = useState(false);

  useEffect(() => {

    const fetchProduct = async () => {

      const res = await getProduct(productId)

      if (user && !paymentFormRendered) {

        const id = await getPreferenceCheckoutMP({
          items: [
            {
              title: res.nombre,
              quantity: 1,
              currency_id: "CLP",
              unit_price: res.precio,
              picture_url: res.imagen
            }
          ],
          payer: {
            name: user.name,
            email: user.email
          }
        })

        const script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = 'https://sdk.mercadopago.com/js/v2';

        script.addEventListener('load', () => {
          addCheckout(id);
          setPaymentFormRendered(true);
        });

        document.body.appendChild(script);
      }
    };

    fetchProduct();
  }, [user, paymentFormRendered]);

  const addCheckout = (id) => {
    const mp = new window.MercadoPago('TEST-c793c36a-cca5-4ad8-a796-cb0b1b23298a', {
      locale: "es-CL"
    })

    mp.checkout({
      preference: {
        id: id,
      },
      render: {
        container: `#payment-form`,
        label: "Pagar"
      }
    })

  }

  return (

    <>
      {product.length === 0 ?
        null :
        (
          <MDBContainer>
            <MDBBreadcrumb>
              <MDBBreadcrumbItem><Link to='/Proyecto5-frontend/catalogo'>
                Catalogo
              </Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                {nombre}
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>

            <MDBRow >
              <MDBCol md='6'>
                <img src={imagen} className="img-thumbnail h-100" />
              </MDBCol>
              <MDBCol md='6' offsetMd=''>
                <div>
                  <img
                    src="https://i.postimg.cc/8cZFgL05/castrol3.jpg"
                    class="img-thumbnail"
                    alt=""
                  />
                </div>
              </MDBCol>
            </MDBRow>

            <MDBRow className='py-3'>
              {/* <MDBCol md='6'> */}
              <h1>{nombre}</h1>
              <p><b>Precio</b>: ${precio}</p>
              <p><b>Viscosidad</b>: {viscosidad}</p>
              {
                user?.email ?
                  <div className="mt-10" id="payment-form"></div>
                  :
                  <Link to="/Proyecto5-frontend/register">
                    <MDBBtn type="button" color='success' className='primary'>
                      Registrate para comprar
                    </MDBBtn>
                  </Link>
              }
              {/* </MDBCol> */}
            </MDBRow>
          </MDBContainer>
        )
      }
    </>
  )
}
