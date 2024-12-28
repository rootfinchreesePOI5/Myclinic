import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [state , setState] = useState('Sign up')
  const [email , setEmail] = useState('')
  const [Name , setName] = useState('')
  const [Password , setPass] = useState('');
  const navigate = useNavigate();
  const [form , setForm] = useState({})
  
  const getEmail = (e) =>{
    setEmail(e.target.value)
  }
  
  const getName = (e) =>{
    setName(e.target.value)
  }
  
  const getPass = (e) =>{
    setPass(e.target.value)
  }



  const postForm = async (e) =>{
    e.preventDefault();
    setForm({
      username: Name,
      useremail : email, 
      userpass: Password,
    })
  }
  return (
    <form onSubmit={postForm} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-800 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? "CREATE ACCOUNT" : "LOGIN"}</p>
        <p>{state === 'Sign up' ? "Please sign up" : "Please login "} to book appointment</p>
        <div className='w-full' style={state === 'Sign up' ? {display: 'block'} : {display: 'none'}}>
          <p>FullName</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 text-black' type="text" onChange={(e) => setName(e.target.value)}  required />
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 text-black' type="email" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1 text-black' type="password" onChange={(e) => setPass(e.target.value)}  required />
        </div>
        <button onClick={() => {navigate(`/My-Profile`) , scrollTo(0 , 0)}}  className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign up' ? "CREATE ACCOUNT" : "LOGIN"}</button>
        {
          state === 'Sign up'  ? (
            <p >Already have an account <span onClick={() => setState("Login")} className='text-primary underline cursor-pointer'>Login Here!</span></p>
          ) : (
            <p >Create a new account? <span onClick={() => setState('Sign up')} className='text-primary underline cursor-pointer'>Sign up Here!</span> </p>
          )
        }
      </div>
    </form>
  )
}

export default Login
