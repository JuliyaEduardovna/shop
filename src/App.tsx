import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

function App() {
 return(
    <>
    <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactsPage />} />

    </Routes>
    </>
 )
}

export default App
