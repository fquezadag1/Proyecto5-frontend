import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Perfil } from './components/Perfil';
import { Catalog } from './components/Catalog';
import { Product } from './components/Product';
import { UserState } from './context/User/UserState';
import { AuthRoute } from './routes/AuthRoute';
import { PublicRoute } from './routes/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute';
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { ProductState } from './context/Product/ProductState';
import '../src/App.css'

export const App = () => {

  return (
    <>
        <ProductState>
          <UserState>
            <Router>
              <Header />
              <Switch>
                <AuthRoute exact path="/Proyecto5-frontend/login" component={Login} />
                <PublicRoute exact path="/Proyecto5-frontend/" component={Home} />
                <PublicRoute exact path="/Proyecto5-frontend/register" component={Register} />
                <PrivateRoute exact path="/Proyecto5-frontend/perfil" component={Perfil} />
                <PublicRoute exact path="/Proyecto5-frontend/catalogo" component={Catalog} />
                <PublicRoute exact path="/Proyecto5-frontend/:productId" component={Product} />

              </Switch>
              <Footer />
            </Router>

          </UserState>
        </ProductState>
    </>
  )
}