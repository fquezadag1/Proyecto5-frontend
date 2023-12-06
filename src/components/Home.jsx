import { ListProducts } from './ListProducts'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main>
      <header style={{ paddingLeft: 0 }}>
        <div className='home-bg p-5 text-center bg-image'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Cuida al máximo tu Motor con Castrol ®</h1>
              <h4 className='mb-3'>Amplia gama de productos al mejor precio del mercado</h4>
            </div>
          </div>
        </div>
      </header>
      <ListProducts title="Productos Disponibles" />
    </main>
  );
}