import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomeHeader from './components/welcome/welcomeHeader/WelcomeHeader';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Drawer from './pages/drawer/Drawer';
import Balance from './pages/tables/balance/Balance';
import CuentaPerdidasGanancias from './pages/tables/cuenta-perdidas-ganancias/CuentaPerdidasGanancias';
import EstrategiaMercado from './pages/tables/estrategia-mercado/EstrategiaMercado';
import PoliticaInversion from './pages/tables/politica-inversion/PoliticaInversion';
import PoliticaFinanciacion from './pages/tables/politica-financiacion/PoliticaFinanciacion';
import EstrategiaCirculante from './pages/tables/estrategia-circulante/EstrategiaCirculante';
import Results from './pages/tables/results/Results';
import Dashboard from './pages/dashboard/Dashboard';

const router = createBrowserRouter([
  { path: '/', element: <WelcomeHeader /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard', element: <Drawer />, children: [
      { path: '', element: <Dashboard />},
      { path: 'balance', element: <Balance /> },
      { path: 'cuenta-perdidas-ganancias', element: <CuentaPerdidasGanancias /> },
      { path: 'estrategia-mercado', element: <EstrategiaMercado /> },
      { path: 'politica-inversion', element: <PoliticaInversion /> },
      { path: 'politica-financiacion', element: <PoliticaFinanciacion /> },
      { path: 'estrategia-circulante', element: <EstrategiaCirculante /> },
      { path: 'resultados', element: <Results /> }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
