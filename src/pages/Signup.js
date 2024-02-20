import React, { useState } from 'react';

const Signup = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    gmail: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here (e.g., send data to a server).
    console.log('Form data submitted:', formData);
  };

  return (
    <div className='w-full h-screen bg-cyan-400 flex items-center justify-center '>
      <div className='flex w-[80%]  h-[70%] justify-between  '>
        <div className='w-[24%] h-full text-white flex gap-5 items-center relative justify-between' >
          <p className='font-bold text-[6rem] ml-14 absolute bottom-3'>01</p>
          <p className='-rotate-90 text-[3.7rem] font-semibold  absolute w-[450px]   '>SIGN UP PAGE</p>
        </div>

        <div className='w-[72%] h-full bg-cyan-400 rounded-2xl border-4 border-white flex '>
          <div className='w-[35%] bg-cyan-400 h-full p-4 flex flex-col items-cente justify-cente rounded-md relative '>

            <img className='size-10 ' src='/Logo.png' alt=''></img>
            <h className='mt-[40%] text-white text-[1.2rem] font-mono'>Find all types of Books, Audiobooks, etc here.</h>
            <img className=' ml-[30%] h-[250px] w-[400px] object-cover absolute mt-[70%]  ' src='/Guy with Book (2).png' alt=''></img>
          </div>


          <div className='w-[65%] bg-white h-full flex flex-col justify-start items-start p-4 gap-4'>
            <p className='text-[1.3rem] font-bold  '>Create Account</p>
           <div className='flex justify-evenly w-full '>
           <button className='border-2 border-cyan-400 px-3 py-1 rounded-md'>Sign Up with Google</button>
            <button className='border-2 border-cyan-400 px-3 py-1 rounded-md'>Sign Up with Facebook</button>
           </div>
            
            <p className='text-slate-500 ml-[45%]'>-OR-</p>
           
              <form className='flex flex-col gap-7 mar w-full px-14 mt-4' onSubmit={handleSubmit}>
                
                  {/* <label htmlFor="fullName">Full Name:</label> */}
                  <input
                    className='border-b-2 border-cyan-500 h-10 px-1'
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                
                
                  {/* <label htmlFor="gmail">Gmail:</label> */}
                  <input
                  className='border-b-2 border-cyan-500 h-10 px-1'
                   placeholder='Email address'
                    type="email"
                    id="gmail"
                    name="gmail"
                    value={formData.gmail}
                    onChange={handleChange}
                    required
                  />
                
                
                  {/* <label htmlFor="password">Password:</label> */}
                  <input
                  className='border-b-2 border-cyan-500 h-10 px-1'
                  placeholder='Password'
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                
                <button className='w-full bg-cyan-400 text-white font-semibold rounded-md py-2' type="submit">Create Account</button>
              </form>
           

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup