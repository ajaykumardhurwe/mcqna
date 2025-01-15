// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// interface Question {
//   question: string;
//   options: {
//     A: string;
//     B: string;
//     C: string;
//     D: string;
//   };
//   correctAnswer: string;
//   explanation: string;
// }

// export function MCQTest() {
//   const { subject, topic, testId } = useParams();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [answers, setAnswers] = useState<(string | null)[]>([]);

//   // Mock questions - replace with actual data from Google Sheets
//   const questions: Question[] = [
//     {
//       question: 'अनुच्छेद 1 के अनुसार, भारत का आधिकारिक नाम क्या है?',
//       options: {
//         A: 'हिंदुस्तान',
//         B: 'भारत गणराज्य',
//         C: 'भारतीय संघ',
//         D: 'भारतीय लोकतंत्र'
//       },
//       correctAnswer: 'B',
//       explanation: 'अनुच्छेद 1 के अनुसार, भारत का आधिकारिक नाम "भारत गणराज्य" है।'
//     },
//     // Add more questions
//   ];

//   useEffect(() => {
//     setAnswers(new Array(questions.length).fill(null));
//   }, []);

//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//     setSelectedAnswer(answer);
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(answers[currentQuestion + 1]);
//     } else {
//       const finalScore = answers.reduce((acc, answer, index) => {
//         return answer === questions[index].correctAnswer ? acc + 1 : acc;
//       }, 0);
//       setScore(finalScore);
//       setShowResult(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedAnswer(answers[currentQuestion - 1]);
//     }
//   };

//   const handleSkip = () => {
//     handleNext();
//   };

//   if (showResult) {
//     return (
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-6">Test Results</h1>
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="text-center mb-6">
//             <p className="text-3xl font-bold">Score: {score}/{questions.length}</p>
//             <p className="text-gray-600">({((score/questions.length) * 100).toFixed(1)}%)</p>
//           </div>
          
//           <div className="space-y-6">
//             {questions.map((q, index) => {
//               const userAnswer = answers[index];
//               const isCorrect = userAnswer === q.correctAnswer;
              
//               return (
//                 <div key={index} className="border-b pb-4">
//                   <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
//                     {Object.entries(q.options).map(([key, value]) => (
//                       <div
//                         key={key}
//                         className={`p-2 rounded ${
//                           userAnswer === key
//                             ? isCorrect
//                               ? 'bg-green-100 text-green-800'
//                               : 'bg-red-100 text-red-800'
//                             : key === q.correctAnswer
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-gray-50'
//                         }`}
//                       >
//                         {key}. {value}
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
//                 </div>
//               );
//             })}
//           </div>
          
//           <button
//             onClick={() => {
//               setCurrentQuestion(0);
//               setSelectedAnswer(null);
//               setAnswers(new Array(questions.length).fill(null));
//               setShowResult(false);
//               setScore(0);
//             }}
//             className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//           >
//             Restart Test
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Question {currentQuestion + 1}/{questions.length}</h1>
//           <div className="text-sm text-gray-600">
//             Score: {score}/{questions.length}
//           </div>
//         </div>

//         <div className="mb-8">
//           <p className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</p>
//           <div className="space-y-3">
//             {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
//               <button
//                 key={key}
//                 onClick={() => handleAnswer(key)}
//                 className={`w-full p-3 text-left rounded-md border ${
//                   selectedAnswer === key
//                     ? 'border-blue-500 bg-blue-50'
//                     : 'border-gray-300 hover:border-blue-300'
//                 }`}
//               >
//                 {key}. {value}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-between">
//           <button
//             onClick={handlePrev}
//             disabled={currentQuestion === 0}
//             className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleSkip}
//             className="px-4 py-2 rounded-md bg-gray-100 text-gray-700"
//           >
//             Skip
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
//           >
//             {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }















// 1ewZ40sycll45O_x8qsl44Da1FMr6DJDPbebsGgJmCLg
// AIzaSyA0NB_bV1GCVcg_9SFxagvmnP-wsPbMg1I

// 1ewZ40sycll45O_x8qsl44Da1FMr6DJDPbebsGgJmCLg

// https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pubhtml?gid=0&single=true




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// interface Question {
//   question: string;
//   options: {
//     A: string;
//     B: string;
//     C: string;
//     D: string;
//   };
//   correctAnswer: string;
//   explanation: string;
// }

// export function MCQTest() {
//   const { subject, topic, testId } = useParams();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [answers, setAnswers] = useState<(string | null)[]>([]);
//   const [loading, setLoading] = useState(true);

//   // const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/1ewZ40sycll45O_x8qsl44Da1FMr6DJDPbebsGgJmCLg/pub?output=csv'; // Replace <sheet_id>
//   const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv'; // Replace <sheet_id>

//   // Fetch questions from Google Sheets
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await fetch(GOOGLE_SHEET_CSV_URL);
//         const csvData = await response.text();
//         const rows = csvData.split('\n');
//         const parsedQuestions = rows.slice(1).map((row) => {
//           const [question, optionA, optionB, optionC, optionD, correctAnswer, explanation] = row.split(',');
//           return {
//             question: question.trim(),
//             options: {
//               A: optionA.trim(),
//               B: optionB.trim(),
//               C: optionC.trim(),
//               D: optionD.trim(),
//             },
//             correctAnswer: correctAnswer.trim(),
//             explanation: explanation.trim(),
//           };
//         });
//         setQuestions(parsedQuestions);
//         setAnswers(new Array(parsedQuestions.length).fill(null));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//     setSelectedAnswer(answer);
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(answers[currentQuestion + 1]);
//     } else {
//       const finalScore = answers.reduce((acc, answer, index) => {
//         return answer === questions[index].correctAnswer ? acc + 1 : acc;
//       }, 0);
//       setScore(finalScore);
//       setShowResult(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedAnswer(answers[currentQuestion - 1]);
//     }
//   };

//   const handleSkip = () => {
//     handleNext();
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswer(null);
//     setAnswers(new Array(questions.length).fill(null));
//     setShowResult(false);
//     setScore(0);
//   };

//   if (loading) {
//     return <p>Loading questions...</p>;
//   }

//   if (questions.length === 0) {
//     return <p>No questions available.</p>;
//   }

//   if (showResult) {
//     return (
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-6">Test Results</h1>
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="text-center mb-6">
//             <p className="text-3xl font-bold">Score: {score}/{questions.length}</p>
//             <p className="text-gray-600">({((score / questions.length) * 100).toFixed(1)}%)</p>
//           </div>
//           <div className="space-y-6">
//             {questions.map((q, index) => {
//               const userAnswer = answers[index];
//               const isCorrect = userAnswer === q.correctAnswer;
//               return (
//                 <div key={index} className="border-b pb-4">
//                   <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
//                     {Object.entries(q.options).map(([key, value]) => (
//                       <div
//                         key={key}
//                         className={`p-2 rounded ${
//                           userAnswer === key
//                             ? isCorrect
//                               ? 'bg-green-100 text-green-800'
//                               : 'bg-red-100 text-red-800'
//                             : key === q.correctAnswer
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-gray-50'
//                         }`}
//                       >
//                         {key}. {value}
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
//                 </div>
//               );
//             })}
//           </div>
//           <button
//             onClick={restartQuiz}
//             className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//           >
//             Restart Test
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Question {currentQuestion + 1}/{questions.length}</h1>
//           <div className="text-sm text-gray-600">
//             Score: {score}/{questions.length}
//           </div>
//         </div>
//         <div className="mb-8">
//           <p className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</p>
//           <div className="space-y-3">
//             {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
//               <button
//                 key={key}
//                 onClick={() => handleAnswer(key)}
//                 className={`w-full p-3 text-left rounded-md border ${
//                   selectedAnswer === key
//                     ? 'border-blue-500 bg-blue-50'
//                     : 'border-gray-300 hover:border-blue-300'
//                 }`}
//               >
//                 {key}. {value}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <button
//             onClick={handlePrev}
//             disabled={currentQuestion === 0}
//             className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <button
//             onClick={handleSkip}
//             className="px-4 py-2 rounded-md bg-gray-100 text-gray-700"
//           >
//             Skip
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
//           >
//             {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





























// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// interface Question {
//   question: string;
//   options: {
//     A: string;
//     B: string;
//     C: string;
//     D: string;
//   };
//   correctAnswer: string;
//   explanation: string;
// }

// export function MCQTest() {
//   const { subject, topic, testId } = useParams();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [answers, setAnswers] = useState<(string | null)[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Mapping testId to Google Sheets URLs
//   const testSheetUrls: { [key: string]: string } = {
//      // Part 1
//     test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv',
//     test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//     test3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//     test4: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//     test5: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
    
//     // Add more tests here as needed

//      // Part 2
//   'test6': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test7': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test8': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test9': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test10': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Part 3
//   'test11': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test12': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test13': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test14': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test15': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Part 4
//   'test16': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test17': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test18': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test19': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test20': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Part 5 to Part 22 (repeat the same pattern)
//   'test21': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test22': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test23': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test24': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test25': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Repeat for the remaining tests...
//   'test26': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test27': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test28': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test29': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test30': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   };

//   // Fetch questions from the appropriate Google Sheets URL based on testId
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const testUrl = testSheetUrls[testId || 'test1']; // Default to test1 if testId is not found
//         const response = await fetch(testUrl);
//         const csvData = await response.text();
//         const rows = csvData.split('\n');
//         const parsedQuestions = rows.slice(1).map((row) => {
//           const [question, optionA, optionB, optionC, optionD, correctAnswer, explanation] = row.split(',');
//           return {
//             question: question.trim(),
//             options: {
//               A: optionA.trim(),
//               B: optionB.trim(),
//               C: optionC.trim(),
//               D: optionD.trim(),
//             },
//             correctAnswer: correctAnswer.trim(),
//             explanation: explanation.trim(),
//           };
//         });
//         setQuestions(parsedQuestions);
//         setAnswers(new Array(parsedQuestions.length).fill(null));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching questions:', error);
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [testId]);

//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//     setSelectedAnswer(answer);
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(answers[currentQuestion + 1]);
//     } else {
//       const finalScore = answers.reduce((acc, answer, index) => {
//         return answer === questions[index].correctAnswer ? acc + 1 : acc;
//       }, 0);
//       setScore(finalScore);
//       setShowResult(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedAnswer(answers[currentQuestion - 1]);
//     }
//   };

//   const handleSkip = () => {
//     handleNext();
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswer(null);
//     setAnswers(new Array(questions.length).fill(null));
//     setShowResult(false);
//     setScore(0);
//   };

//   if (loading) {
//     return <p>Loading questions...</p>;
//   }

//   if (questions.length === 0) {
//     return <p>No questions available.</p>;
//   }

//   if (showResult) {
//     return (
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-6">Test Results</h1>
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="text-center mb-6">
//             <p className="text-3xl font-bold">Score: {score}/{questions.length}</p>
//             <p className="text-gray-600">({((score / questions.length) * 100).toFixed(1)}%)</p>
//           </div>
//           <div className="space-y-6">
//             {questions.map((q, index) => {
//               const userAnswer = answers[index];
//               const isCorrect = userAnswer === q.correctAnswer;
//               return (
//                 <div key={index} className="border-b pb-4">
//                   <p className="font-semibold mb-2">{index + 1}. {q.question}</p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
//                     {Object.entries(q.options).map(([key, value]) => (
//                       <div
//                         key={key}
//                         className={`p-2 rounded ${userAnswer === key ? (isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800') : key === q.correctAnswer ? 'bg-green-100 text-green-800' : 'bg-gray-50'}`}
//                       >
//                         {key}. {value}
//                       </div>
//                     ))}
//                   </div>
//                   <p className="text-sm text-gray-600 mt-2">{q.explanation}</p>
//                 </div>
//               );
//             })}
//           </div>
//           <button onClick={restartQuiz} className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
//             Restart Test
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Question {currentQuestion + 1}/{questions.length}</h1>
//           <div className="text-sm text-gray-600">
//             Score: {score}/{questions.length}
//           </div>
//         </div>
//         <div className="mb-8">
//           <p className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</p>
//           <div className="space-y-3">
//             {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
//               <button
//                 key={key}
//                 onClick={() => handleAnswer(key)}
//                 className={`w-full p-3 text-left rounded-md border ${selectedAnswer === key ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
//               >
//                 {key}. {value}
//               </button>
//             ))}
//           </div>
//         </div>
//         <div className="flex justify-between">
//           <button onClick={handlePrev} disabled={currentQuestion === 0} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50">Previous</button>
//           <button onClick={handleSkip} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">Skip</button>
//           <button onClick={handleNext} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
//             {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


































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
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  // Mapping testId to Google Sheets URLs
  const testSheetUrls: { [key: string]: string } = {
    // test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv',
   
    // // test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv',
    // test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
    // // Add other test URLs here


        //  Part 1
    test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv',
    test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=1128083867&single=true&output=csv',
    test3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=250122569&single=true&output=csv',
    test4: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=1350178693&single=true&output=csv',
    test5: '',
    
    // Add more tests here as needed
// you can write in both way
     // Part 2
  'test6': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=0&single=true&output=csv',
  'test7': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=543287620&single=true&output=csv',
  'test8': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=405127809&single=true&output=csv',
  'test9': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=2054258588&single=true&output=csv',
  'test10': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',



  
//   // Part 3
//   'test11': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test12': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test13': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test14': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test15': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Part 4
//   'test16': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test17': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test18': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test19': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test20': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Part 5 to Part 22 (repeat the same pattern)
//   'test21': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test22': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test23': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test24': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test25': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   // Repeat for the remaining tests...
//   'test26': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test27': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test28': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//   'test29': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//   'test30': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

//   'test31': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test32': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test33': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test34': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test35': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test36': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test37': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test38': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test39': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test40': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test41': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test42': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test43': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test44': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test45': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test46': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test47': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test48': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test49': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test50': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',

// 'test51': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test52': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test53': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test54': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test55': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test56': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test57': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test58': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test59': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test60': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test61': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test62': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test63': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test64': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test65': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test66': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test67': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test68': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test69': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test70': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test71': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test72': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test73': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test74': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test75': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test76': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test77': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test78': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test79': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test80': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test81': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test82': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test83': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test84': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test85': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test86': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test87': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test88': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test89': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test90': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test91': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test92': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test93': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test94': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test95': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test96': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test97': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test98': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test99': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test100': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test101': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test102': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test103': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test104': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test105': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test106': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test107': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test108': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
// 'test109': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
// 'test110': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',




  };

  // Fetch questions from the appropriate Google Sheets URL based on testId
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const testUrl = testSheetUrls[testId || 'test1']; // Default to test1 if testId is not found
        const response = await fetch(testUrl);
        const csvData = await response.text();
        const rows = csvData.split('\n');
        const parsedQuestions = rows.slice(1).map((row) => {
          const [question, optionA, optionB, optionC, optionD, correctAnswer, explanation] = row.split(',');
          return {
            question: question.trim(),
            options: {
              A: optionA.trim(),
              B: optionB.trim(),
              C: optionC.trim(),
              D: optionD.trim(),
            },
            correctAnswer: correctAnswer.trim(),
            explanation: explanation.trim(),
          };
        });
        setQuestions(parsedQuestions);
        setAnswers(new Array(parsedQuestions.length).fill(null));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [testId]);

  // Timer effect
  useEffect(() => {
    if (timeLeft === 0) {
      // Time's up, submit the test
      handleFinish();
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [timeLeft]);

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
      handleFinish();
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

  const handleFinish = () => {
    const finalScore = answers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    setScore(finalScore);
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers(new Array(questions.length).fill(null));
    setShowResult(false);
    setScore(0);
    setTimeLeft(10* 60); // Reset timer to 10 minutes
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  if (questions.length === 0) {
    return <p>No questions available.</p>;
  }

  if (showResult) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Test Results</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <p className="text-3xl font-bold">Score: {score}/{questions.length}</p>
            <p className="text-gray-600">({((score / questions.length) * 100).toFixed(1)}%)</p>
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
                        className={`p-2 rounded ${userAnswer === key ? (isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800') : key === q.correctAnswer ? 'bg-green-100 text-green-800' : 'bg-gray-50'}`}
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
          <button onClick={restartQuiz} className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
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
            Score: {score}/{questions.length} | Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </div>
        </div>
        <div className="mb-8">
          <p className="text-lg font-semibold mb-4">{questions[currentQuestion].question}</p>
          <div className="space-y-3">
            {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleAnswer(key)}
                className={`w-full p-3 text-left rounded-md border ${selectedAnswer === key ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'}`}
              >
                {key}. {value}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <button onClick={handlePrev} disabled={currentQuestion === 0} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 disabled:opacity-50">Previous</button>
          <button onClick={handleSkip} className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">Skip</button>
          <button onClick={handleNext} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}











































// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// interface Question {
//   question: string;
//   options: {
//     A: string;
//     B: string;
//     C: string;
//     D: string;
//   };
//   correctAnswer: string;
//   explanation: string;
// }

// export function MCQTest() {
//   const { subject, topic, testId } = useParams();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [answers, setAnswers] = useState<(string | null)[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Mapping testId to Google Sheets URLs
//   const testSheetUrls: { [key: string]: string } = {
//     test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//     test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?output=csv',
//     test3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
//     // Add more tests as needed
//   };

//   // Fetch questions from the appropriate Google Sheets URL based on testId
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const testUrl = testSheetUrls[testId || 'test1']; // Default to test1 if testId is not found
//         const response = await fetch(testUrl);
//         const csvData = await response.text();
//         const rows = csvData.split('\n');
//         const parsedQuestions = rows.slice(1).map((row) => {
//           const [question, optionA, optionB, optionC, optionD, correctAnswer, explanation] = row.split(',');
//           return {
//             question,
//             options: { A: optionA, B: optionB, C: optionC, D: optionD },
//             correctAnswer,
//             explanation,
//           };
//         });
//         setQuestions(parsedQuestions);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [testId]);

//   const handleAnswerSelection = (answer: string) => {
//     setSelectedAnswer(answer);
//   };

//   const handleNextQuestion = () => {
//     if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
//       setScore(score + 1);
//     }
//     setAnswers([...answers, selectedAnswer]);
//     setSelectedAnswer(null);
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const handleFinish = () => {
//     if (selectedAnswer === questions[currentQuestion]?.correctAnswer) {
//       setScore(score + 1);
//     }
//     setAnswers([...answers, selectedAnswer]);
//     setShowResult(true);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (showResult) {
//     return (
//       <div>
//         <h1>Your Score: {score}/{questions.length}</h1>
//         {questions.map((question, index) => (
//           <div key={index}>
//             <h2>{question.question}</h2>
//             <p>Your Answer: {answers[index]}</p>
//             <p>Correct Answer: {question.correctAnswer}</p>
//             <p>{question.explanation}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>{questions[currentQuestion]?.question}</h1>
//       <div>
//         {Object.entries(questions[currentQuestion]?.options).map(([key, option]) => (
//           <button
//             key={key}
//             onClick={() => handleAnswerSelection(key)}
//             className="btn"
//           >
//             {key}. {option}
//           </button>
//         ))}
//       </div>
//       <div>
//         {currentQuestion < questions.length - 1 ? (
//           <button onClick={handleNextQuestion} className="btn">
//             Next
//           </button>
//         ) : (
//           <button onClick={handleFinish} className="btn">
//             Finish
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
