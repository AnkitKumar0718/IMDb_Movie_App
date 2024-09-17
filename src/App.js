import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Upcoming from './pages/Upcoming';
import TopRated from './pages/TopRated';
import NowPLaying from './pages/NowPlaying';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetails from './pages/Details';
import Searched from './pages/Search';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <div>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
         <Route path="/details/:id" element={<MovieDetails />} />
        <Route element={<Searched />} path="/search/:title" />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
      </Routes>
  
    </div>
  );
}

export default App;
