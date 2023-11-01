import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div >
     <Header/>
     <div className='absolute'>
     <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='logo'/>
     </div>
     <form className='justify-center absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
       <h1 className='font-bold text-3xl p-4 '>Sign In</h1>
       <input type='text' placeholder='Email Address' className='py-4 my-3 w-full bg-slate-600'/>
       <input type='text' placeholder='Password' className='py-4 my-3 bg-slate-600 w-full'/> 
       <button className='py-4 my-3 bg-red-600  rounded-sm w-full'>Sign In</button>
       <p className='font-semibold'>New to Netflix ? Sign Up Now</p>
     </form>
    </div>
  )
}

export default Login
