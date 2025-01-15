import React, { useState, useEffect } from 'react';
import { Profile } from '../Profile';
import Test from './test';
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7arRiNGf_KvmZ7HQRJyO-bOD_oKVdleA1JD774GrDYJAoYGrFDRiATDsEc44hioSoNYjaQDHwNoei/pub?gid=1376930527&single=true&output=csv"; // Replace with your live CSV URL

interface Service {
  Title: string;
  Thumbnail: string;
  Description: string;
  Facilities: string;
  "Pricing Details": string;
  "Payment Options": string;
}

export function Home() {
  const [services, setServices] = useState<Service[]>([]);

  // Function to parse CSV data into JSON
  const parseCSV = (csvData: string): Service[] => {
    const lines = csvData.split("\n").filter(line => line.trim() !== ""); // Split into rows and remove empty lines
    const headers = lines[0].split(",").map(header => header.trim()); // Extract headers
    return lines.slice(1).map((line) => {
      const values = line.split(",").map(value => value.trim());
      const obj: Partial<Service> = {}; // Create a partial object with Service keys
      headers.forEach((header, index) => {
        obj[header as keyof Service] = values[index] || "";
      });
      return obj as Service;
    });
  };

  useEffect(() => {
    // Fetch the live CSV from Google Sheets
    fetch(GOOGLE_SHEET_CSV_URL)
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = parseCSV(csvData); // Parse CSV data
        setServices(parsedData);
      })
      .catch((error) => console.error("Error fetching Google Sheets data:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200 opacity-0 animate-fadeIn transition-opacity duration-1000"
        >
         
          <div className="flex flex-col items-center">
            <img
              src={service.Thumbnail.split(',')[0]}
              alt={service.Title}
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-105"
            />
            <h2 className="text-lg font-semibold text-gray-800">{service.Title}</h2>
            <p className="text-gray-600 mt-2">{service.Description}</p>
            
            {/* Facilities Section */}
            <div className="mt-4">
              {/* <p className="font-bold text-gray-800">Facilities:</p> */}
              <div className="space-y-2 mt-2">
                {service.Facilities.split(',').map((facility, i) => (
                  <button
                    key={i}
                    className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {facility.trim()}
                  </button>
                ))}
              </div>
            </div>

            {/* Pricing Details */}
         
            {/* <div className="mt-4 text-sm">
              <p className="font-bold">Pricing:</p>
              <p>{service['Pricing Details']}</p>
              <p className="font-bold mt-2">Payment Options:</p>
              <p>{service['Payment Options']}</p>
            </div> */}


<Test></Test>


            {/* Connect with Me Button */}
            <div className="mt-6">
              <a 
                href="https://wa.me/+919301084259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
              >
              Connect on WhatsApp for details.
              </a>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;



















// import React, { useState, useEffect } from 'react';

// const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7arRiNGf_KvmZ7HQRJyO-bOD_oKVdleA1JD774GrDYJAoYGrFDRiATDsEc44hioSoNYjaQDHwNoei/pub?gid=1376930527&single=true&output=csv"; // Replace with your live CSV URL

// interface Service {
//   Title: string;
//   Thumbnail: string;
//   Description: string;
//   Facilities: string;
//   "Pricing Details": string;
//   "Payment Options": string;
// }

// export function Home() {
//   const [services, setServices] = useState<Service[]>([]);

//   // Function to parse CSV data into JSON
//   const parseCSV = (csvData: string): Service[] => {
//     const lines = csvData.split("\n").filter(line => line.trim() !== ""); // Split into rows and remove empty lines
//     const headers = lines[0].split(",").map(header => header.trim()); // Extract headers
//     return lines.slice(1).map((line) => {
//       const values = line.split(",").map(value => value.trim());
//       const obj: Partial<Service> = {}; // Create a partial object with Service keys
//       headers.forEach((header, index) => {
//         obj[header as keyof Service] = values[index] || "";
//       });
//       return obj as Service;
//     });
//   };

//   useEffect(() => {
//     // Fetch the live CSV from Google Sheets
//     fetch(GOOGLE_SHEET_CSV_URL)
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = parseCSV(csvData); // Parse CSV data
//         setServices(parsedData);
//       })
//       .catch((error) => console.error("Error fetching Google Sheets data:", error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg p-4 border border-gray-200 opacity-0 animate-fadeIn transition-opacity duration-1000"
//         >
//           <div className="flex flex-col items-center">
//             <img
//               src={service.Thumbnail.split(',')[0]}
//               alt={service.Title}
//               className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-105"
//             />
//             <h2 className="text-lg font-semibold text-gray-800">{service.Title}</h2>
//             <p className="text-gray-600 mt-2">{service.Description}</p>
            
//             {/* Facilities Section */}
//             <div className="mt-4">
//               <p className="font-bold text-gray-800">Facilities:</p>
//               <div className="space-y-2 mt-2">
//                 {service.Facilities.split(',').map((facility, i) => (
//                   <button
//                     key={i}
//                     className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
//                   >
//                     {facility.trim()}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Pricing Details */}


//             <div className="mt-4 text-sm">
//               <p className="font-bold">Pricing:</p>
//               <p>{service['Pricing Details']}</p>
//               <p className="font-bold mt-2">Payment Options:</p>
//               <p>{service['Payment Options']}</p>
//             </div>


//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;

















// import React, { useState, useEffect } from 'react';

// const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7arRiNGf_KvmZ7HQRJyO-bOD_oKVdleA1JD774GrDYJAoYGrFDRiATDsEc44hioSoNYjaQDHwNoei/pub?gid=1376930527&single=true&output=csv"; // Replace with your live CSV URL

// interface Service {
//   Title: string;
//   Thumbnail: string;
//   Description: string;
//   Facilities: string;
//   "Pricing Details": string;
//   "Payment Options": string;
// }

// export function Home() {
//   const [services, setServices] = useState<Service[]>([]);

//   // Function to parse CSV data into JSON
//   const parseCSV = (csvData: string): Service[] => {
//     const lines = csvData.split("\n").filter(line => line.trim() !== ""); // Split into rows and remove empty lines
//     const headers = lines[0].split(",").map(header => header.trim()); // Extract headers
//     return lines.slice(1).map((line) => {
//       const values = line.split(",").map(value => value.trim());
//       const obj: Partial<Service> = {}; // Create a partial object with Service keys
//       headers.forEach((header, index) => {
//         obj[header as keyof Service] = values[index] || "";
//       });
//       return obj as Service;
//     });
//   };

//   useEffect(() => {
//     // Fetch the live CSV from Google Sheets
//     fetch(GOOGLE_SHEET_CSV_URL)
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = parseCSV(csvData); // Parse CSV data
//         setServices(parsedData);
//       })
//       .catch((error) => console.error("Error fetching Google Sheets data:", error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg p-4 border border-gray-200 opacity-0 animate-fadeIn transition-opacity duration-1000"
//         >
//           <div className="flex flex-col items-center">
//             <img
//               src={service.Thumbnail.split(',')[0]}
//               alt={service.Title}
//               className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-105"
//             />
//             <h2 className="text-lg font-semibold text-gray-800">{service.Title}</h2>
//             <p className="text-gray-600 mt-2">{service.Description}</p>
            
//             {/* Facilities Section */}
//             <div className="mt-4">
//               <p className="font-bold text-gray-800">Facilities:</p>
//               <div className="overflow-x-auto">
//                 <table className="table-auto border-collapse border border-gray-300 w-full text-sm mt-2">
//                   <tbody>
//                     {service.Facilities.split(',').map((facility, i) => (
//                       <tr key={i} className="border-t border-gray-200">
//                         <td className="p-2 text-gray-600">{facility.trim()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Pricing Details */}
//             <div className="mt-4 text-sm">
//               <p className="font-bold">Pricing:</p>
//               <p>{service['Pricing Details']}</p>
//               <p className="font-bold mt-2">Payment Options:</p>
//               <p>{service['Payment Options']}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;




































// import React, { useState, useEffect } from 'react';

// const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7arRiNGf_KvmZ7HQRJyO-bOD_oKVdleA1JD774GrDYJAoYGrFDRiATDsEc44hioSoNYjaQDHwNoei/pub?gid=1376930527&single=true&output=csv"; // Replace with your live CSV URL

// interface Service {
//   Title: string;
//   Thumbnail: string;
//   Description: string;
//   Facilities: string;
//   "Pricing Details": string;
//   "Payment Options": string;
// }

// export function Home() {

//   const [services, setServices] = useState<Service[]>([]);

//   // Function to parse CSV data into JSON
//   const parseCSV = (csvData: string): Service[] => {
//     const lines = csvData.split("\n").filter(line => line.trim() !== ""); // Split into rows and remove empty lines
//     const headers = lines[0].split(",").map(header => header.trim()); // Extract headers
//     return lines.slice(1).map((line) => {
//       const values = line.split(",").map(value => value.trim());
//       const obj: Partial<Service> = {}; // Create a partial object with Service keys
//       headers.forEach((header, index) => {
//         // Use type assertion to handle dynamic keys
//         obj[header as keyof Service] = values[index] || "";
//       });
//       return obj as Service;
//     });
//   };

//   useEffect(() => {
//     // Fetch the live CSV from Google Sheets
//     fetch(GOOGLE_SHEET_CSV_URL)
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = parseCSV(csvData); // Parse CSV data
//         setServices(parsedData);
//       })
//       .catch((error) => console.error("Error fetching Google Sheets data:", error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg p-4 border border-gray-200 opacity-0 animate-fadeIn transition-opacity duration-1000"
//         >
//           <div className="flex flex-col items-center">
//             <img
//               src={service.Thumbnail.split(',')[0]}
//               alt={service.Title}
//               className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-500 hover:scale-105"
//             />
//             <h2 className="text-lg font-semibold text-gray-800">{service.Title}</h2>
//             <p className="text-gray-600 mt-2">{service.Description}</p>
            
//             {/* Facilities Section */}
//             <div className="mt-4">
//               <p className="font-bold text-gray-800">Facilities:</p>
//               <div className="overflow-x-auto">
//                 <table className="table-auto border-collapse border border-gray-300 w-full text-sm mt-2">
//                   <tbody>
//                     {service.Facilities.split(',').map((facility, i) => (
//                       <tr key={i} className="border-t border-gray-200">
//                         <td className="p-2 text-gray-600">{facility.trim()}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             {/* Pricing Details */}
//             <div className="mt-4 text-sm">
//               <p className="font-bold">Pricing:</p>
//               <p>{service['Pricing Details']}</p>
//               <p className="font-bold mt-2">Payment Options:</p>
//               <p>{service['Payment Options']}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;


















// import React, {useState, useEffect} from 'react';
// const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7arRiNGf_KvmZ7HQRJyO-bOD_oKVdleA1JD774GrDYJAoYGrFDRiATDsEc44hioSoNYjaQDHwNoei/pub?gid=1376930527&single=true&output=csv"; // Replace with your live CSV URL



// interface Service {
//   Title: string;
//   Thumbnail: string;
//   Description: string;
//   Facilities: string;
//   "Pricing Details": string;
//   "Payment Options": string;
// }


// export function Home() {

//   const [services, setServices] = useState<Service[]>([]);

//   // Function to parse CSV data into JSON
//   const parseCSV = (csvData: string): Service[] => {
//     const lines = csvData.split("\n").filter(line => line.trim() !== ""); // Split into rows and remove empty lines
//     const headers = lines[0].split(",").map(header => header.trim()); // Extract headers
//     return lines.slice(1).map((line) => {
//       const values = line.split(",").map(value => value.trim());
//       const obj: Partial<Service> = {}; // Create a partial object with Service keys
//       headers.forEach((header, index) => {
//         // Use type assertion to handle dynamic keys
//         obj[header as keyof Service] = values[index] || "";
//       });
//       return obj as Service;
//     });
//   };

//   useEffect(() => {
//     // Fetch the live CSV from Google Sheets
//     fetch(GOOGLE_SHEET_CSV_URL)
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = parseCSV(csvData); // Parse CSV data
//         setServices(parsedData);
//       })
//       .catch((error) => console.error("Error fetching Google Sheets data:", error));
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
//         >
 
//           <div className="flex flex-col items-center">
//             <img
//               src={service.Thumbnail.split(',')[0]}
//               alt={service.Title}
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />
//             <h2 className="text-lg font-semibold text-gray-800">{service.Title}</h2>
//             <p className="text-gray-600 mt-2">{service.Description}</p>
//             <ul className="list-disc text-sm text-gray-600 mt-4">
//               {service.Facilities.split(',').map((facility, i) => (
//                 <li key={i}>{facility.trim()}</li>
//               ))}
//             </ul>
//             <div className="mt-4 text-sm">
//               <p className="font-bold">Pricing:</p>
//               <p>{service['Pricing Details']}</p>
//               <p className="font-bold mt-2">Payment Options:</p>
//               <p>{service['Payment Options']}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
//  };

// export default Home;
