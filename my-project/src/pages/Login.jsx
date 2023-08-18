import React from 'react'
import {useState} from 'react'
import Signin from "./Signin";

const Login = () => {
    const [sign, setsign] = useState(false)
    const[ user,setUser] = useState({
        email:"",password:""
    })
    
   let name,value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }

  return (
    <>
   <div className='w-screen h-screen '>
    <img src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_800/https://khusoko.com/wp-content/uploads/2022/02/Netflix.jpg" alt="bg" className='w-screen h-screen'/>
    <div className='bg-black/60 absolute top-[24px] right-[0%]  w-full h-screen'></div>
    <div className='absolute w-full px-4 py-24 z-50'>
       <div className='w-[400px] h-[500px] mx-auto absolute bottom-[250px] right-[35%] bg-black/75 text-white'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-bold '>Sign Up</h1>
          <form className='w-full flex flex-col py-4 '>
          <input type="email" placeholder='Email' autoComplete='off' name='email' value={user.email} onChange={handleInputs}
           className='my-6 py-2 bg-gray-700 rounded'/>
          <input type="password" placeholder='Password' autoComplete='off' name='password' value={user.password} onChange={handleInputs}
           className='py-2 bg-gray-700 rounded' />
          
            <button className='bg-red-600 py-3   my-6 rounded font-bold'>Sign Up</button>
            <div className='flex justify-between text-sm text-gray-600'>
                <p><input className='mr-2' type="checkbox" name="" id="" />Remember Me</p>
                <p>Need Help?</p>
            </div>
            <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>
          <p onClick={()=>setsign(!sign)}>Sign In</p> 
          {sign && <Signin/>} 
            </p>
            
          </form>
          </div></div> 
      
     <div></div>
    </div>
   </div>
    </>
  )
}

export default Login
