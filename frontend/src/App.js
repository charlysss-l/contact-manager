import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactList from './pages/ContactList';
import ContactForm from './pages/ContactForm';

function App(){
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/list' element={<ContactList />} />
                <Route path='/add' element={<ContactForm />} />
                <Route path='/edit/:id' element={<ContactForm />} />
            </Routes>
        </Router>
    );
}
export default App;