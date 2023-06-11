import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Home from './component/pages/Home';
import Menu from './component/pages/Menu';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Newproduct from './component/pages/Newproduct';
import Login from './component/pages/Login';
import Signup from './component/pages/Signup';
import { store } from './redux/index';
import { Provider } from 'react-redux';
import Cart from './component/pages/Cart';
import Success from './component/pages/Success';
import Cancel from './component/pages/Cancel';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route index element={<Home/>}/>
     {/*<Route path='menu' element={<Menu/>}/>*/}
     <Route path='menu/:filterby' element={<Menu/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     < Route path='login' element={<Login/>}/>
     <Route path='newproduct' element={<Newproduct/>}/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='cart' element={<Cart/>}/>
     <Route path='success' element={<Success/>}/>
     <Route path='cancel' element={<Cancel/>}/>

      
      
    </Route>
  )
 )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
