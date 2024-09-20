import React,{useState} from 'react'
import Imdb_logo from '../assets/IMDB_Logo.png';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import {useUserAuth} from '../context/UserAuthContext'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

    async function handleSubmit(e) {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate('/dashboard');
      } catch (error) {
        setError(error.message);
        alert(error);
      }
    }

    async function handleGoogleSignIn(e) {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate('/dashboard');
      } catch (error) {
        setError(error.message);
      }
    }

  return (
    <div className='flex flex-col justify-center md:mt-0 mt-8x items-center mb-4'>
      <Link to='/'>
      <div className='mt-4'>
        <img className='md:w-[120px] md:h-[50px] w-[100px] h-[40px]' src={Imdb_logo} alt="IMDB Logo" />
      </div>
      </Link>
      <div className='border border-gray-400 rounded-lg mt-4 md:p-6 p-6 md:w-[360px] w-full max-w-xs sm:max-w-md'>
        {/* Google Login Button */}
        <div onClick={handleGoogleSignIn} 
        className='flex  gap-4 md:gap-6 w-full md:w-80 border border-gray-500 mb-6 py-2 px-3 rounded-full cursor-pointer hover:ring-2 hover:ring-gray-400'>
          <FcGoogle className='w-6 h-6 md:ml-10 ml-8'/>
          <button className="font-bold text-sm md:text-base">Log in with Google</button>
        </div>
        
        {/* Login Text */}
        <p className='text-black md:mt-[-8px] mt-[-8px] text-2xl md:text-3xl font-semibold text-center'>Login</p>
        
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* E-mail Field */}
          <div className='flex flex-col mt-4'>
            <label className='font-semibold mb-2' htmlFor='e-mail'>E-mail</label>
            <input  onChange={(e) => setEmail(e.target.value)}
              className='px-2 border text-sm rounded border-gray-400 w-full h-[40px]' 
              type='email' 
              placeholder='Your e-mail' 
              required
            />
          </div>

          {/* Password Field */}
          <div className='flex flex-col mt-2'>
            <label className='font-semibold mb-2' htmlFor='password'>Password</label>
            <input  onChange={(e) => setPassword(e.target.value)}
              className='px-2 border rounded border-gray-400 w-full h-[40px]' 
              type='password' 
              placeholder='Password' 
              required
            />
          </div>

          {/* Log In Button */}
          <button 
            className='bg-yellow-400 hover:bg-yellow-500 text-black mt-6 p-2 w-full rounded-xl text-sm md:text-base'
            type="submit"
          >
            Log In
          </button>

          {/* Signup Link */}
          <div className="mt-8 border-t border-gray-400 pt-4 text-center"></div>
          <Link to='/signup'>
          <div className='flex justify-center mt-2 gap-2'>
            <p>Didn't have an account?</p>
            <a href='#' className='underline text-blue-600'>Signup</a>
          </div>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login

