import React,{ useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [username,setUserName]=useState('');
  const [firstname,setFirstName]=useState('');
  const [lastname,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const collectData=async()=>{
    console.warn(username,firstname,lastname,email,password)
    let result = await fetch("http://localhost:3001/users/register",{
      method:'POST',
      body: JSON.stringify({
        userName: username,
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result = await result.json();
    console.warn(result); 
    if (!result.error){
  localStorage.setItem("token", (result.token))
    navigate('/')
    }
  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <input className='inputBox' type='text' placeholder='Enter userName'
      value={username} onChange={(e)=>setUserName(e.target.value)}/>
      <input className='inputBox' type='text' placeholder='Enter firstName'
      value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
      <input className='inputBox' type='text' placeholder='Enter lastName'
      value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
      <input className='inputBox' type='text' placeholder='Enter Email'
      value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input className='inputBox' type='password' placeholder='Enter password'
      value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button  onClick={collectData} className='appButton' type='button'>Sign Up</button>

    </div>
  )
}

export default SignUp