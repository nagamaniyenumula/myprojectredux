import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Addusers from './component/Addusers';
import Updateusers from './component/Updateusers';
import Userslisting from './component/Userslisting';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Test from './component/Test';
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
    <BrowserRouter>
    <Link to="/Home">Home</Link>
    <Link to="/users">Users</Link>
    <Link to="/users/add">Add</Link>
    {/* <Link to={"/users/edit:code"}>Edit</Link> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={<Userslisting />} />
      <Route path="users/add" element={<Addusers />} />
      <Route path="users/edit/:id" element={<Updateusers />} />
      <Route path="users/Test/:id" element={<Updateusers />} />
     
    </Routes>
    </BrowserRouter>
    <ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
