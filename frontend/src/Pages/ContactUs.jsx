// // ContactUs.js
// import React from "react";
// import { useForm } from "react-hook-form";

// const ContactUs = () => {
//   const { register, handleSubmit, reset } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Add your form submission logic here
//     reset(); // Reset the form fields after submission
//   };

//   return (
//     <div className="min-h-[90vh] flex justify-center items-center bg-gray-100">
//       <div className="bg-white flex flex-col items-center gap-10 justify-between p-8 rounded shadow-xl w-full ">
//         <h2 className="text-3xl  font-bold mb-4">Contact Us</h2>
//         <div className="flex flex-row justify-around">
//           <div className="grid grid-cols-1  gap-4">
//             <div className="w-[70%]">
//               <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
//               <p className="text-gray-600 mb-4">
//                 For general inquiries or assistance, please feel free to contact
//                 us via email or phone.
//               </p>
//               <p className="text-gray-600 mb-4">Email: info@example.com</p>
//               <p className="text-gray-600 mb-4">Phone: +1234567890</p>
//             </div>
//             <div className="w-[70%]">
//               <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
//               <p className="text-gray-600 mb-4">
//                 If you encounter any technical issues or require support with
//                 our app, please reach out to our technical support team.
//               </p>
//               <p className="text-gray-600 mb-4">Email: support@example.com</p>
//               <p className="text-gray-600 mb-4">Phone: +1234567890</p>
//             </div>
//           </div>
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             className="mt-8 bg-slate-50 shadow-gray-400 shadow-xl px-10 p-5 rounded-xl "
//           >
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700 ">
//                 Name
//               </label>
//               <input
//                 {...register("name")}
//                 type="text"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 {...register("email")}
//                 type="email"
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                 placeholder="Enter your email address"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 {...register("message")}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
//                 rows="4"
//                 placeholder="Enter your message"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-600"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
    reset(); // Reset the form fields after submission
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center bg-gray-100">
      <div className="bg-white flex flex-col items-center gap-10 justify-between p-8 rounded shadow-xl w-full">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-around w-full">
          <div className="grid grid-cols-1 gap-4 w-[45%]">
            <div>
              <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
              <p className="text-gray-600 mb-4">
                For general inquiries or assistance, please feel free to contact
                us via email or phone.
              </p>
              <p className="text-gray-600 mb-4">Email: info@example.com</p>
              <p className="text-gray-600 mb-4">Phone: +1234567890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
              <p className="text-gray-600 mb-4">
                If you encounter any technical issues or require support with
                our app, please reach out to our technical support team.
              </p>
              <p className="text-gray-600 mb-4">Email: support@example.com</p>
              <p className="text-gray-600 mb-4">Phone: +1234567890</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full md:w-[50%] bg-slate-50 shadow-gray-400 shadow-xl px-10 p-5 rounded-xl"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                {...register("message")}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4 font-medium hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
