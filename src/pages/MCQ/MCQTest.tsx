import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Question {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
  explanation: string;
}

export function MCQTest() {
  const { subject, topic, testId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>([]);

  // Mock questions - replace with actual data from Google Sheets
  const questions: Question[] = [
    {
      question: 'अनुच्छेद 1 के अनुसार, भारत का आधिकारिक नाम क्या है?',
      options: {
        A: 'हिंदुस्तान',
        B: 'भारत गणराज्य',
        C: 'भारतीय संघ',
        D: 'भारतीय लोकतंत्र'
      },
      correctAnswer: 'B',
      explanation: 'अनुच्छेद 1 के अनुसार, भारत का आधिकारिक नाम "भारत गणराज्य" है।'
    },
    // Add more questions
  ];

  useEffect(() => {
    setAnswers(new Array(questions.length).fill(null));
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1]);
    } else {
      const finalScore = answers.reduce((acc, answer, index) => {
        return answer === questions[index].correctAnswer ? acc + 1 : acc;
      }, 0);
      setScore(finalScore);
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1]);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  if (showResult) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Test Results</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <p className="text-3xl font-bold">Score: {score}/{questions.length}</p>
            <p className="text-gray-600">({((score/questions.length) * 100).toFixed(1)}%)</p>
          </div>
          
          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswer = answers[index];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={index} className="border-b pb-4">
                  <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                    {Object.entries(q.options).map(([key, value]) => (
                      <div
                        key={key}
                        className={`p-2 rounded ${
                          userAnswer === key
                            ? isCorrect
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                            : key === q.correctAnswer
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-50'
                        }`}
                      >
                        {key}. {value}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
                </div>
              );
            })}
          </div>
          
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswer(null);
              setAnswers(new Array(questions.length).fill(null));
              setShowResult(false);
              setScore(0);
            }}
            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Restart Test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Question {currentQuestion + 1}/{questions.length}</h1>
          <div className="text-sm text-gray-600">
            Score: {score}/{questions.length}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</p>
          <div className="space-y-3">
            {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleAnswer(key)}
                className={`w-full p-3 text-left rounded-md border ${
                  selectedAnswer === key
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-blue-300'
                }`}
              >
                {key}. {value}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleSkip}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}