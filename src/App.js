import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './component/Footer';
import About from './pages/About';
import Action from './pages/Action';
import News from './pages/News';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Form from './Form';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<><Header/><Home/><Footer/></>}></Route>
      <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
      <Route path='/action' element={<><Header/><Action/><Footer/></>}></Route>
      <Route path='/' element={<><Header/><Home/><Footer/></>}></Route>
      <Route path='/news' element={<><Header/><News/><Footer/></>}></Route>
      <Route path='/doctors' element={<><Header/><Doctors/><Footer/></>}></Route>
      <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
      <Route path='/form' element={<><Header/><Form/><Footer/></>}></Route>
      {/* <Route path='/login' element={<><Header/><Login/><Footer/></>}></Route> */}
      <Route path='/login' element={ <> <Header/> <Login/> <Footer/> </>}></Route>
      {/* <Route path='/signup' element={<><Header/><signup/><Footer/></>}></Route> */}
     
    </Routes>
    <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
