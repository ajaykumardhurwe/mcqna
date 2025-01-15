import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PlayCircle } from 'lucide-react';

export function TestList() {
  const { subject, topic } = useParams();

  const tests = [
    { id: 'test1', title: 'MCQ Test 1' },
    { id: 'test2', title: 'MCQ Test 2' },
    { id: 'test3', title: 'MCQ Test 3' },
    { id: 'test4', title: 'MCQ Test 4' },
    { id: 'test5', title: 'MCQ Test 5' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Available Tests</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <Link
            key={test.id}
            to={`/mcq/${subject}/${topic}/${test.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{test.title}</h2>
              <PlayCircle className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-600 mt-2">Click to start the test</p>
          </Link>
        ))}
      </div>
    </div>
  );
}