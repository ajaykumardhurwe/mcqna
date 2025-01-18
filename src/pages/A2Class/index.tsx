

import React from "react";
import { useNavigate } from "react-router-dom";


export function A2Class(){

  const navigate = useNavigate();

  // Sample data for cards
  const cards = [
    {
      id: 1,
      title: "Mathematics - Class 10",
      thumbnail: "https://blogassets.leverageedu.com/media/uploads/2023/10/26115539/Maths-Practical-Class-10-1.jpg",
      description: "Explore the comprehensive Class 10 Mathematics syllabus, covering topics such as Number Systems, Algebra, Coordinate Geometry, Geometry, Trigonometry, Mensuration, and Statistics & Probability.",
      navigateTo: "/mathsten",
    },
    {
      id: 2,
      title: "Physics - Class 11",
      thumbnail: "https://webcollection.co.in/wp-content/uploads/2022/09/Class-11-Physics-Online-Test-in-Hindi.jpg.webp",
      description: "Delve into the Class 11 Physics curriculum, including units on Physical World and Measurement, Kinematics, Laws of Motion, Work, Energy and Power, Motion of System of Particles, Gravitation, Properties of Bulk Matter, Thermodynamics, Kinetic Theory, and Oscillations & Waves.",
      navigateTo: "/physics-11th",
    },
    {
      id: 3,
      title: "English - Class 10",
      thumbnail: "https://images.shiksha.com/mediadata/images/articles/1681198305php5OrdGD.jpeg",
      description: "Enhance your language skills with the Class 10 English syllabus, focusing on literature, grammar, writing, and comprehension to build a strong foundation in English.",
      navigateTo: "/english-10th",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={card.thumbnail}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button
                onClick={() => navigate(card.navigateTo)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Go to Classroom
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default A2Class;
