import logo from './logo.svg';
import './App.css';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import Header from './components/Header/header';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import NewSource from './components/NewSource/NewSource';

function App() {
    return ( <
        div className = "App" >
        <Routes >
        <Route path = '/'element = { < Login / > } /> 
        < Route path = '/register' element = { < Register / > }/> 
        < Route path = '/home'element = { < Home / > }/>  
        <Route path='/NewSource' element = {<NewSource/>}/>
        <Route path='/Categories' element = {<Categories/>}/>
        </Routes>         
         </div>
    );
}

export default App;