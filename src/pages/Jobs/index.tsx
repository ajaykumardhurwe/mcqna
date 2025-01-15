import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Jobs() {
  const [activeTab, setActiveTab] = useState('government');
  const [jobsData, setJobsData] = useState([]);
  const navigate = useNavigate();

  // URLs for Google Sheets published as CSV
  const googleSheetUrls = {
      government: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
    private: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',


  };

  useEffect(() => {
    // Load CSV data for the active tab
    const fetchData = async () => {
      const url = googleSheetUrls[activeTab];
      const response = await fetch(url);
      const csvText = await response.text();

      // Parse CSV text manually
      const rows = csvText.split('\n');
      const headers = rows[0].split(',').map((header) => header.trim());
      const data = rows.slice(1).map((row) => {
        const values = row.split(',');
        const job = {};
        headers.forEach((header, index) => {
          job[header] = values[index]?.trim() || '';
        });
        return job;
      });

      setJobsData(data.filter((job) => job['Job Title'])); // Exclude empty rows
    };

    fetchData();
  }, [activeTab]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Jobs</h1>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'government'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('government')}
        >
          Government Jobs
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'private'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('private')}
        >
          Private Jobs
        </button>
      </div>

      {/* Jobs List Styled as WhatsApp Chat */}
      <div className="border p-4 rounded shadow">
        {jobsData.length > 0 ? (
          <ul className="space-y-2">
            {jobsData.map((job, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 py-3 bg-green-100 rounded shadow hover:bg-green-200 transition"
                  onClick={() =>
                    navigate(`/job-details`, { state: { job } })
                  }
                >
                  {/* Job Image (WhatsApp DP Style) */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={job['Image Link']}
                      alt={job['Job Title']}
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div>
                      <div className="text-lg font-medium">{job['Job Title']}</div>
                      <div
                        className={`text-sm ${
                          job['Start Date'] ? 'text-green-600' : 'text-black'
                        }`}
                      >
                        Start Date: {job['Start Date']}
                      </div>
                      <div
                        className={`text-sm ${
                          job['End Date'] ? 'text-red-600' : 'text-black'
                        }`}
                      >
                        End Date: {job['End Date']}
                      </div>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-gray-500">Loading jobs...</div>
        )}
      </div>
    </div>
  );
}










// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export function Jobs() {
//   const [activeTab, setActiveTab] = useState('government');
//   const [jobsData, setJobsData] = useState([]);
//   const navigate = useNavigate();

//   // URLs for Google Sheets published as CSV
//   const googleSheetUrls = {
//     government: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=0&single=true&output=csv',
//     private: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQwQv0QSfbhlGS2Pvo729YKsIG52TctoYV4_p-1wSVXePTU7R4EupdtbuGbkYeV_0KBRk5BD0bZ6Xkp/pub?gid=717397891&single=true&output=csv',
//   };

//   useEffect(() => {
//     // Load CSV data for the active tab
//     const fetchData = async () => {
//       const url = googleSheetUrls[activeTab];
//       const response = await fetch(url);
//       const csvText = await response.text();

//       // Parse CSV text
//       const rows = csvText.split('\n');
//       const headers = rows[0].split(',').map((header) => header.trim());
//       const data = rows.slice(1).map((row) => {
//         const values = row.split(',');
//         const job = {};
//         headers.forEach((header, index) => {
//           job[header] = values[index]?.trim() || '';
//         });
//         return job;
//       });

//       setJobsData(data.filter((job) => job['Job Title'])); // Exclude empty rows
//     };

//     fetchData();
//   }, [activeTab]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs</h1>

//       {/* Tab Navigation */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'government'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('government')}
//         >
//           Government Jobs
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'private'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('private')}
//         >
//           Private Jobs
//         </button>
//       </div>

//       {/* Jobs List Styled as WhatsApp Chat */}
//       <div className="border p-4 rounded shadow">
//         {jobsData.length > 0 ? (
//           <ul className="space-y-2">
//             {jobsData.map((job, index) => (
//               <li key={index}>
//                 <button
//                   className="w-full text-left px-4 py-3 bg-green-100 rounded shadow hover:bg-green-200 transition"
//                   onClick={() =>
//                     navigate(`/job-details`, { state: { job } })
//                   }
//                 >
//                   <div className="text-lg font-medium">{job['Job Title']}</div>
//                   <div className="text-sm text-gray-600">
//                     Start Date: {job['Start Date']} | End Date: {job['End Date']}
//                   </div>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <div className="text-gray-500">Loading jobs...</div>
//         )}
//       </div>
//     </div>
//   );
// }



































// import React from 'react';

// export function Jobs() {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs</h1>
//       {/* Jobs content will be added later */}
//     </div>
//   );
// }





// import React, { useState } from 'react';

// export function Jobs() {
//   const [activeTab, setActiveTab] = useState('government');

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Jobs</h1>

//       {/* Tab Navigation */}
//       <div className="flex space-x-4 mb-4">
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'government'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('government')}
//         >
//           Government Jobs
//         </button>
//         <button
//           className={`px-4 py-2 rounded ${
//             activeTab === 'private'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-700'
//           }`}
//           onClick={() => setActiveTab('private')}
//         >
//           Private Jobs
//         </button>
//       </div>

//       {/* Tab Content */}
//       <div className="border p-4 rounded shadow">
//         {activeTab === 'government' ? (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Government Jobs</h2>
//             <ul className="list-disc ml-5">
//               <li>Job Title 1 - Description</li>
//               <li>Job Title 2 - Description</li>
//               <li>Job Title 3 - Description</li>
//             </ul>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Private Jobs</h2>
//             <ul className="list-disc ml-5">
//               <li>Job Title A - Description</li>
//               <li>Job Title B - Description</li>
//               <li>Job Title C - Description</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
