import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateeComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import AddCategory from './components/AddCategory';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponents';
import Category from './components/Category';
import Users from './components/Users';
import UpdateCategory from './components/UpdateCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element= {<PrivateeComponent/>}>
        <Route path='/' element={<ProductList/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='/addCategory' element={<AddCategory/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
        <Route path='/updateCategory/:id' element={<UpdateCategory/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/logout' element={<h1>Logout Component</h1>}/>
       
       </Route> 
       <Route path='/signup' element={<SignUp/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
      </Routes>

      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
