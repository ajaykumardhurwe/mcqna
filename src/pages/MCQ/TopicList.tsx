import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const topics = {
  'indian-constitution': [
    {
      id: 'part-1',
      title: 'भाग I: संघ और उसका क्षेत्र',
      description: '(अनुच्छेद 1 से 4)\nभारत का क्षेत्र, नए राज्यों का प्रवेश, राज्यों का गठन आदि।',
    },
    {
      id: 'part-2',
      title: 'भाग II: नागरिकता',
      description: '(अनुच्छेद 5 से 11)\nसंविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।',
    },
    // Add more topics as needed
  ],
  // Add other subjects' topics
};

export function TopicList() {
  const { subject } = useParams();
  const subjectTopics = topics[subject as keyof typeof topics] || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Topics</h1>
      <div className="space-y-4">
        {subjectTopics.map((topic) => (
          <div key={topic.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="text-gray-600 mt-2 whitespace-pre-line">{topic.description}</p>
            <Link
              to={`/mcq/${subject}/${topic.id}`}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Start Learning
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}