import React from 'react'
import Swal from 'sweetalert2';

function Contactus() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f6b0d5ef-fe62-46ef-a86e-74868633d95f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfull!",
                icon: "success"
              });
        }
      };
  return (

    <div className='mt-[100px]   '>
        {/* contact */}
        <section className=' flex justify-center items-center min-h-[100vh] bg-[tomato]'>
            <form action="" className='max-w-[600px] my-[20px] w-full bg-[#fff] pt-[25px] pr-[25px] rounded-[8px] text-[#333] m-[25px] pb-[30px] ml-[10px]' onSubmit={onSubmit} >
                <h2 className='font-bold text-[20px] flex items-center justify-center mb-[20px]'>Contact Form</h2>
                {/* input-vox */}
                <div className='grid my-[20px] ml-[20px]'>
                    <label className='my-[10px]'>Full Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' className=' border-s-black  h-[35px]' required />
                </div>
                <div className='grid my-[20px] ml-[20px]  '>
                    <label className='mb-[10px]' >Email</label>
                    <input type="email" name='email' placeholder='Enter Your Email' required className='border-s-black  h-[35px]' />
                </div>
                <div className='grid my-[20px]  ml-[20px] '>
                    <label className='mb-[10px]' >Your Message</label>
                    <input type="text" placeholder='Type Your Message' required className='w-[500px] px-[2px] pb-[70px] h-[100px] border'  name='message' />
                </div>
                <button className='w-[100%] bg-[tomato] h-[35px] border ml-[20px] font-bold' >Submit</button>

            </form>
        </section>
       
          
      
    </div>
  )
}

export default Contactus