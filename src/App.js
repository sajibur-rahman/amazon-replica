import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Products from './components/Products/Products';

function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/*' element={<PrivateRoute/>}>
         <Route path='products' element={<Products/>}/>
         <Route path='dashboard' element={<Dashboard/>}/>
         <Route path='orders' element={<Orders/>}/>
       </Route>
       <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
