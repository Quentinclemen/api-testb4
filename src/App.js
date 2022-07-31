import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import  Appbar from './components/AppBar';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Appbar/>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/edit-user/:id" element={<EditUser/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
