import React from "react";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt, FaCalendarAlt, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export function JobDetails() {
  const location = useLocation();
  const { job } = location.state;

  return (
    <div className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      {/* Job Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <FaInfoCircle className="text-blue-500 mr-2" />
        {job["Job Title"]}
      </h1>

      {/* Job Details */}
      <div className="space-y-6 text-gray-700">
        <p className="flex items-center">
          <strong className="mr-2">📄 Description:</strong> {job["Description"]}
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">Start Date:</strong> {job["Start Date"]}
        </p>
        <p className="flex items-center">
          <FaCalendarAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">End Date:</strong> {job["End Date"]}
        </p>
        <p className="flex items-center">
          <FaExternalLinkAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">Official Link:</strong>{" "}
          <a
            href={job["Official Link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Visit <FaExternalLinkAlt className="inline ml-1" />
          </a>
        </p>
        <p className="flex items-center">
          <FaFileAlt className="text-blue-500 mr-2" />
          <strong className="mr-2">Notification Link:</strong>{" "}
          <a
            href={job["Notification Link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            View <FaExternalLinkAlt className="inline ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
}













// import React from 'react';
// import { useLocation } from 'react-router-dom';

// export function JobDetails() {
//   const location = useLocation();
//   const { job } = location.state;

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">{job['Job Title']}</h1>
//       <div className="space-y-4">
//         <p>
//           <strong>Description:</strong> {job['Description']}
//         </p>
//         <p>
//           <strong>Start Date:</strong> {job['Start Date']}
//         </p>
//         <p>
//           <strong>End Date:</strong> {job['End Date']}
//         </p>
//         <p>
//           <strong>Official Link:</strong>{' '}
//           <a href={job['Official Link']} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//             Visit
//           </a>
//         </p>
//         <p>
//           <strong>Notification Link:</strong>{' '}
//           <a href={job['Notification Link']} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//             View
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }
