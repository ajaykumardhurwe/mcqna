import React, {useState} from 'react';

export function Profile() {
  // return (
  //   <div className="container mx-auto p-4">
  //     <h1 className="text-2xl font-bold mb-6">Profile</h1>
  //     {/* Profile content will be added later */}
  //   </div>
 // );




 const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Hardcoded password for testing mode
  const adminPassword = "yourname@123";

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === adminPassword) {
      setErrorMessage(""); // Clear error message on success
      alert("Password accepted! Account creation unlocked.");
    } else {
      setErrorMessage("Due to web testing mode being enabled, account creation is disabled. Only the admin can enable it.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
        <h1 className="text-lg font-bold">Web Testing Mode is On</h1>
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded cursor-not-allowed"
          disabled
        >
          Account Creation is Disabled
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Do you want to enable portfolio mode?</h2>
          <form onSubmit={handlePasswordSubmit}>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Enter Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            {errorMessage && (
              <div className="text-red-500 text-sm mb-4">
                {errorMessage}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              Enable
            </button>
          </form>
        </div>
      </div>
    </div>
  );




}






// import React, { useState } from "react";

// const ProfilePage: React.FC = () => {
//   const [password, setPassword] = useState<string>("");
//   const [errorMessage, setErrorMessage] = useState<string>("");

//   // Hardcoded password for testing mode
//   const adminPassword = "admin123";

//   const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (password === adminPassword) {
//       setErrorMessage(""); // Clear error message on success
//       alert("Password accepted! Account creation unlocked.");
//     } else {
//       setErrorMessage("Contact the admin for password");
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       {/* Top Bar */}
//       <div className="bg-blue-500 text-white py-3 px-6 flex justify-between items-center">
//         <h1 className="text-lg font-bold">Web Testing Mode is On</h1>
//         <button
//           className="bg-gray-300 text-gray-800 px-4 py-2 rounded cursor-not-allowed"
//           disabled
//         >
//           Account Creation is Disabled
//         </button>
//       </div>

//       {/* Profile Section */}
//       <div className="flex-grow flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-4 text-center">Profile Page</h2>
//           <form onSubmit={handlePasswordSubmit}>
//             <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
//               Enter Password:
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={handleInputChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//               required
//             />
//             {errorMessage && (
//               <div className="text-red-500 text-sm mb-4">
//                 {errorMessage}
//               </div>
//             )}
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
