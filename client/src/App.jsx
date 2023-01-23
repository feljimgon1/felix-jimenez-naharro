import './App.scss';
// import { Routes, Route } from 'react-router-dom'
import WelcomeHeader from './components/welcome/welcomeHeader/WelcomeHeader';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Balance from './pages/tables/balance/Balance';
import CuentaPerdidasGanancias from './pages/tables/cuenta-perdidas-ganancias/CuentaPerdidasGanancias';
import EstrategiaMercado from './pages/tables/estrategia-mercado/EstrategiaMercado';
import PoliticaInversion from './pages/tables/politica-inversion/PoliticaInversion';
import PoliticaFinanciacion from './pages/tables/politica-financiacion/PoliticaFinanciacion';
import EstrategiaCirculante from './pages/tables/estrategia-circulante/EstrategiaCirculante';
import Results from './pages/tables/results/Results';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <WelcomeHeader /> },
  { path: '/register', element: <Register /> },
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard', element: <Dashboard />, children: [
      { path: 'balance', element: <Balance />},
      { path: 'cuenta-perdidas-ganancias', element: <CuentaPerdidasGanancias /> },
      { path: 'estrategia-mercado', element: <EstrategiaMercado /> },
      { path: 'politica-inversion', element: <PoliticaInversion /> },
      { path: 'politica-financiacion', element: <PoliticaFinanciacion /> },
      { path: 'estrategia-circulante', element: <EstrategiaCirculante /> },
      { path: 'resultados', element: <Results /> }
    ]},
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="" element={<WelcomeHeader></WelcomeHeader>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/dashboard">
          <Route index element={<Dashboard/>} />
          <Route path="balance" element={<Balance/>} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
