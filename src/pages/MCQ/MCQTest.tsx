

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

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
//   const { testId } = useParams();
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [answers, setAnswers] = useState<(string | null)[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

//   const testSheetUrls: { [key: string]: string } = {
  

    
//         //  Part 1
//         test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv',
//         test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=1128083867&single=true&output=csv',
//         test3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=250122569&single=true&output=csv',
//         test4: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=2054258588&single=true&output=csv',
//         test5: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=806742694&single=true&output=csv',
        
//         // Add more tests here as needed
//     // you can write in both way
//          // Part 2
//       'test6': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=0&single=true&output=csv',
//       'test7': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=543287620&single=true&output=csv',
//       'test8': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=405127809&single=true&output=csv',
//       'test9': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=2054258588&single=true&output=csv',
//       'test10': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
    

      
  
//   // Part 3
//   'test11': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=0&single=true&output=csv',
//   'test12': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=1823752977&single=true&output=csv',
//   'test13': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=1122277759&single=true&output=csv',
//   'test14': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=1641912578&single=true&output=csv',
//   'test15': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=356943713&single=true&output=csv',

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

    
    


//   };

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const testUrl = testSheetUrls[testId || "test1"];
//         const response = await fetch(testUrl);
//         const csvData = await response.text();
//         const rows = csvData.split("\n");
//         const parsedQuestions = rows.slice(1).map((row) => {
//           const [question, optionA, optionB, optionC, optionD, correctAnswer, explanation] = row.split(",");
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
//         console.error("Error fetching questions:", error);
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [testId]);

//   useEffect(() => {
//     if (timeLeft === 0) handleFinish();
//     const timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
//     return () => clearInterval(timer);
//   }, [timeLeft]);

//   const handleAnswer = (answer: string) => {
//     const newAnswers = [...answers];
//     newAnswers[currentQuestion] = answer;
//     setAnswers(newAnswers);
//     setSelectedAnswer(answer);
//     if (answer === questions[currentQuestion].correctAnswer) {
//       setScore(score + 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedAnswer(null);
//     } else handleFinish();
//   };

//   const handlePrev = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//       setSelectedAnswer(null);
//     }
//   };

//   const handleSkip = () => {
//     setSelectedAnswer(null);
//     handleNext();
//   };

//   const handleFinish = () => {
//     setShowResult(true);
//   };

//   if (loading) return <p className="text-center text-lg">⏳ Loading questions...</p>;

//   if (showResult) {
//     return (
//       <div className="container mx-auto p-4">
//         <h1 className="text-2xl font-bold mb-4 text-center">🎉 Test Results 🎉</h1>
//         <p className="text-3xl font-bold text-center text-green-600 mb-6">
//           🏆 Score: {score}/{questions.length}
//         </p>
//         <div className="space-y-6">
//           {questions.map((q, index) => {
//             const userAnswer = answers[index];
//             const isCorrect = userAnswer === q.correctAnswer;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg shadow p-4 border-l-4"
//                 style={{ borderColor: isCorrect ? "green" : "red" }}
//               >
//                 <p className="font-semibold text-lg mb-2">
//                   {index + 1}. {q.question}
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                   {Object.entries(q.options).map(([key, value]) => (
//                     <div
//                       key={key}
//                       className={`p-2 rounded ${
//                         userAnswer === key
//                           ? isCorrect
//                             ? "bg-green-100 text-green-800"
//                             : "bg-red-100 text-red-800"
//                           : key === q.correctAnswer
//                           ? "bg-green-100 text-green-800"
//                           : "bg-gray-50"
//                       }`}
//                     >
//                       {key}. {value}
//                     </div>
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-600 mt-3">
//                   <strong>Explanation:</strong> {q.explanation}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//         <div className="text-center mt-6">
//           <button
//             onClick={() => window.location.reload()}
//             className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//           >
//             Restart Test 🔄
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="bg-white rounded-lg shadow p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-lg font-bold">
//             Question {currentQuestion + 1} / {questions.length}
//           </h1>
//           <p className="text-sm text-gray-600">
//             ⏱️ Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
//           </p>
//         </div>
//         <p className="text-lg font-semibold mb-4">❓ {questions[currentQuestion].question}</p>
//         <div className="space-y-3">
//           {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
//             <button
//               key={key}
//               onClick={() => handleAnswer(key)}
//               className={`block w-full text-left px-4 py-2 rounded-md border ${
//                 selectedAnswer === key ? "bg-blue-50 border-blue-500" : "border-gray-300 hover:border-blue-300"
//               }`}
//             >
//               {key}. {value}
//             </button>
//           ))}
//         </div>
//         <div className="flex justify-between mt-6">
//           <button
//             onClick={handlePrev}
//             disabled={currentQuestion === 0}
//             className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
//           >
//             ⬅️ Previous
//           </button>
//           <button
//             onClick={handleSkip}
//             className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
//           >
//             Skip ➡️
//           </button>
//           <button
//             onClick={handleNext}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//           >
//             {currentQuestion === questions.length - 1 ? "Finish ✅" : "Next ➡️"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }














    


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const { testId } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

  const testSheetUrls: { [key: string]: string } = {
  


    
        //  Part 1
        test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv',
        test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=1128083867&single=true&output=csv',
        test3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=250122569&single=true&output=csv',
        test4: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=2054258588&single=true&output=csv',
        test5: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=806742694&single=true&output=csv',
        
        // Add more tests here as needed
    // you can write in both way
         // Part 2
      'test6': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=0&single=true&output=csv',
      'test7': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=543287620&single=true&output=csv',
      'test8': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=405127809&single=true&output=csv',
      'test9': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=2054258588&single=true&output=csv',
      'test10': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR_V__ly9B1oFhI19RHaoCqKUnWG0zrUoyYfV2c6civ9p_bmGLp_muEruLHvJi3YDh8pRuGYraj9HwT/pub?output=csv',
    

      
  
  // Part 3
  'test11': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=0&single=true&output=csv',
  'test12': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=1823752977&single=true&output=csv',
  'test13': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=1122277759&single=true&output=csv',
  'test14': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=1641912578&single=true&output=csv',
  'test15': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_d0jiFgdbYyDGrCrWQGIriSBLCRyhwjptMdoPRtAd7cwjUN5BLmGMtlOI73AnC0Eq5nfcMx5GVlx4/pub?gid=356943713&single=true&output=csv',

  // Part 4
  'test16': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRutg5mT1ljEI-VgJpRTByKJblTm34t_08OAJ7tuEv78o6F1bB80WoCfjCWXFse0NBZyKujesU-QjuJ/pub?gid=0&single=true&output=csv',
  'test17': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRutg5mT1ljEI-VgJpRTByKJblTm34t_08OAJ7tuEv78o6F1bB80WoCfjCWXFse0NBZyKujesU-QjuJ/pub?gid=1016825077&single=true&output=csv',
  'test18': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRutg5mT1ljEI-VgJpRTByKJblTm34t_08OAJ7tuEv78o6F1bB80WoCfjCWXFse0NBZyKujesU-QjuJ/pub?gid=905978187&single=true&output=csv',
  'test19': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRutg5mT1ljEI-VgJpRTByKJblTm34t_08OAJ7tuEv78o6F1bB80WoCfjCWXFse0NBZyKujesU-QjuJ/pub?gid=943526410&single=true&output=csv',
  'test20': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRutg5mT1ljEI-VgJpRTByKJblTm34t_08OAJ7tuEv78o6F1bB80WoCfjCWXFse0NBZyKujesU-QjuJ/pub?gid=1646166123&single=true&output=csv',

  // Part 5 to Part 22 (repeat the same pattern)
  'test21': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTkghGjEuXlO8nd2ARupEzj4PmT3zZurXmeoB36zyTqXJH88ShLilwbXqDk7iXB1adYJ8IqbSS8lsg/pub?gid=0&single=true&output=csv',
  'test22': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTkghGjEuXlO8nd2ARupEzj4PmT3zZurXmeoB36zyTqXJH88ShLilwbXqDk7iXB1adYJ8IqbSS8lsg/pub?gid=1554193649&single=true&output=csv',
  'test23': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTkghGjEuXlO8nd2ARupEzj4PmT3zZurXmeoB36zyTqXJH88ShLilwbXqDk7iXB1adYJ8IqbSS8lsg/pub?gid=2116451712&single=true&output=csv',
  'test24': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTkghGjEuXlO8nd2ARupEzj4PmT3zZurXmeoB36zyTqXJH88ShLilwbXqDk7iXB1adYJ8IqbSS8lsg/pub?gid=1565875766&single=true&output=csv',
  'test25': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRTkghGjEuXlO8nd2ARupEzj4PmT3zZurXmeoB36zyTqXJH88ShLilwbXqDk7iXB1adYJ8IqbSS8lsg/pub?gid=549475484&single=true&output=csv',

  // Repeat for the remaining tests...
  'test26': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbhCQDyUCN39IUfrf8ozyVGOZ3zNUMz40C9ket5R-Zna01J70jBTg1_CERW20-siotSY8cXMqsaSd3/pub?gid=0&single=true&output=csv',
  'test27': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbhCQDyUCN39IUfrf8ozyVGOZ3zNUMz40C9ket5R-Zna01J70jBTg1_CERW20-siotSY8cXMqsaSd3/pub?gid=1602058657&single=true&output=csv',
  'test28': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbhCQDyUCN39IUfrf8ozyVGOZ3zNUMz40C9ket5R-Zna01J70jBTg1_CERW20-siotSY8cXMqsaSd3/pub?gid=1877056528&single=true&output=csv',
  'test29': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbhCQDyUCN39IUfrf8ozyVGOZ3zNUMz40C9ket5R-Zna01J70jBTg1_CERW20-siotSY8cXMqsaSd3/pub?gid=1547826442&single=true&output=csv',
  'test30': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQbhCQDyUCN39IUfrf8ozyVGOZ3zNUMz40C9ket5R-Zna01J70jBTg1_CERW20-siotSY8cXMqsaSd3/pub?gid=522829233&single=true&output=csv',

  // part 7

  'test31': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRt7NX6I0pd51XII-dDQqFn4FBxAw6HlYcOoYHk6K1RSihMzaIkDhfR5nhbiUpBd_8sdwJWO5faF1Lq/pub?gid=0&single=true&output=csv',
'test32': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRt7NX6I0pd51XII-dDQqFn4FBxAw6HlYcOoYHk6K1RSihMzaIkDhfR5nhbiUpBd_8sdwJWO5faF1Lq/pub?gid=816691689&single=true&output=csv',
'test33': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRt7NX6I0pd51XII-dDQqFn4FBxAw6HlYcOoYHk6K1RSihMzaIkDhfR5nhbiUpBd_8sdwJWO5faF1Lq/pub?gid=884932314&single=true&output=csv',
'test34': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRt7NX6I0pd51XII-dDQqFn4FBxAw6HlYcOoYHk6K1RSihMzaIkDhfR5nhbiUpBd_8sdwJWO5faF1Lq/pub?gid=340511650&single=true&output=csv',
'test35': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRt7NX6I0pd51XII-dDQqFn4FBxAw6HlYcOoYHk6K1RSihMzaIkDhfR5nhbiUpBd_8sdwJWO5faF1Lq/pub?gid=1724219443&single=true&output=csv',

// part 8

'test36': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7dRjE01ASahN9zK3WWwUMChYEk_aP8e3IxeM8RkUw5c2_B0NrZeED8oyepUQb-VQIceEh1Xr2wxe6/pub?gid=0&single=true&output=csv',
'test37': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7dRjE01ASahN9zK3WWwUMChYEk_aP8e3IxeM8RkUw5c2_B0NrZeED8oyepUQb-VQIceEh1Xr2wxe6/pub?gid=1380675217&single=true&output=csv',
'test38': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7dRjE01ASahN9zK3WWwUMChYEk_aP8e3IxeM8RkUw5c2_B0NrZeED8oyepUQb-VQIceEh1Xr2wxe6/pub?gid=506614871&single=true&output=csv',
'test39': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7dRjE01ASahN9zK3WWwUMChYEk_aP8e3IxeM8RkUw5c2_B0NrZeED8oyepUQb-VQIceEh1Xr2wxe6/pub?gid=1123597349&single=true&output=csv',
'test40': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7dRjE01ASahN9zK3WWwUMChYEk_aP8e3IxeM8RkUw5c2_B0NrZeED8oyepUQb-VQIceEh1Xr2wxe6/pub?gid=2111798042&single=true&output=csv',

// part 9

'test41': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPnTA0XRtU8P33OlsIxnujtrW8qb_5A4v6roiRKdUJdNG7QjGK79a48MknmEUnoqOuieWSgTFqFZwa/pub?gid=0&single=true&output=csv',
'test42': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPnTA0XRtU8P33OlsIxnujtrW8qb_5A4v6roiRKdUJdNG7QjGK79a48MknmEUnoqOuieWSgTFqFZwa/pub?gid=775578491&single=true&output=csv',
'test43': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPnTA0XRtU8P33OlsIxnujtrW8qb_5A4v6roiRKdUJdNG7QjGK79a48MknmEUnoqOuieWSgTFqFZwa/pub?gid=904366820&single=true&output=csv',
'test44': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPnTA0XRtU8P33OlsIxnujtrW8qb_5A4v6roiRKdUJdNG7QjGK79a48MknmEUnoqOuieWSgTFqFZwa/pub?gid=68840218&single=true&output=csv',
'test45': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSPnTA0XRtU8P33OlsIxnujtrW8qb_5A4v6roiRKdUJdNG7QjGK79a48MknmEUnoqOuieWSgTFqFZwa/pub?gid=1344155908&single=true&output=csv',

// part 10

'test46': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4SVxQ_3HwnbYvFydWN7AVNbaP4UGOL0smCwZzu8kUYYflgql7Q79-3Hvi7qSHwq2kjxqed_1Fy9y-/pub?gid=0&single=true&output=csv',
'test47': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4SVxQ_3HwnbYvFydWN7AVNbaP4UGOL0smCwZzu8kUYYflgql7Q79-3Hvi7qSHwq2kjxqed_1Fy9y-/pub?gid=1222107728&single=true&output=csv',
'test48': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4SVxQ_3HwnbYvFydWN7AVNbaP4UGOL0smCwZzu8kUYYflgql7Q79-3Hvi7qSHwq2kjxqed_1Fy9y-/pub?gid=1469352219&single=true&output=csv',
'test49': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4SVxQ_3HwnbYvFydWN7AVNbaP4UGOL0smCwZzu8kUYYflgql7Q79-3Hvi7qSHwq2kjxqed_1Fy9y-/pub?gid=1409274577&single=true&output=csv',
'test50': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4SVxQ_3HwnbYvFydWN7AVNbaP4UGOL0smCwZzu8kUYYflgql7Q79-3Hvi7qSHwq2kjxqed_1Fy9y-/pub?gid=976499594&single=true&output=csv',

// part 11

'test51': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9Mdm4R8R7JrlTGlTEfErcNSkvFYFTRMlKxRZbKOBWfEVOgaH_yU03FceiD6Zrlxl1pWseAZdHwz3/pub?gid=0&single=true&output=csv',
'test52': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9Mdm4R8R7JrlTGlTEfErcNSkvFYFTRMlKxRZbKOBWfEVOgaH_yU03FceiD6Zrlxl1pWseAZdHwz3/pub?gid=2028634466&single=true&output=csv',
'test53': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9Mdm4R8R7JrlTGlTEfErcNSkvFYFTRMlKxRZbKOBWfEVOgaH_yU03FceiD6Zrlxl1pWseAZdHwz3/pub?gid=2032009552&single=true&output=csv',
'test54': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9Mdm4R8R7JrlTGlTEfErcNSkvFYFTRMlKxRZbKOBWfEVOgaH_yU03FceiD6Zrlxl1pWseAZdHwz3/pub?gid=1205101991&single=true&output=csv',
'test55': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQa9Mdm4R8R7JrlTGlTEfErcNSkvFYFTRMlKxRZbKOBWfEVOgaH_yU03FceiD6Zrlxl1pWseAZdHwz3/pub?gid=980293725&single=true&output=csv',

// part 12

'test56': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNBH9hbdxCD52YUdKTbdJRcfPwdSfiWDb060RoLQVZkiGRP1M8LyylQaK8RHB5gMCN00SwNvcIEx0/pub?gid=0&single=true&output=csv',
'test57': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNBH9hbdxCD52YUdKTbdJRcfPwdSfiWDb060RoLQVZkiGRP1M8LyylQaK8RHB5gMCN00SwNvcIEx0/pub?gid=1562954320&single=true&output=csv',
'test58': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNBH9hbdxCD52YUdKTbdJRcfPwdSfiWDb060RoLQVZkiGRP1M8LyylQaK8RHB5gMCN00SwNvcIEx0/pub?gid=337216538&single=true&output=csv',
'test59': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNBH9hbdxCD52YUdKTbdJRcfPwdSfiWDb060RoLQVZkiGRP1M8LyylQaK8RHB5gMCN00SwNvcIEx0/pub?gid=2048913756&single=true&output=csv',
'test60': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQoNBH9hbdxCD52YUdKTbdJRcfPwdSfiWDb060RoLQVZkiGRP1M8LyylQaK8RHB5gMCN00SwNvcIEx0/pub?gid=224148927&single=true&output=csv',

// part 13

'test61': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKzr8iZGqwVxEztA_HdiT9N2MSnpddLYbZlNsLqLQPADmFi22T0vTGPv-Kzl9Mrd1HUuTITBOt2KZE/pub?gid=0&single=true&output=csv',
'test62': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKzr8iZGqwVxEztA_HdiT9N2MSnpddLYbZlNsLqLQPADmFi22T0vTGPv-Kzl9Mrd1HUuTITBOt2KZE/pub?gid=201347410&single=true&output=csv',
'test63': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKzr8iZGqwVxEztA_HdiT9N2MSnpddLYbZlNsLqLQPADmFi22T0vTGPv-Kzl9Mrd1HUuTITBOt2KZE/pub?gid=882288891&single=true&output=csv',
'test64': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKzr8iZGqwVxEztA_HdiT9N2MSnpddLYbZlNsLqLQPADmFi22T0vTGPv-Kzl9Mrd1HUuTITBOt2KZE/pub?gid=859772576&single=true&output=csv',
'test65': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSKzr8iZGqwVxEztA_HdiT9N2MSnpddLYbZlNsLqLQPADmFi22T0vTGPv-Kzl9Mrd1HUuTITBOt2KZE/pub?gid=1511941052&single=true&output=csv',

// part 14

'test66': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQozqK9V4WzHskLG2GM2TqmpcA4z3YwgZrpJ8QaJsYNsVxtc_XFqNHKmXaJBjwFNnanHPnFsyBMrS7V/pub?gid=0&single=true&output=csv',
'test67': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQozqK9V4WzHskLG2GM2TqmpcA4z3YwgZrpJ8QaJsYNsVxtc_XFqNHKmXaJBjwFNnanHPnFsyBMrS7V/pub?gid=1488446248&single=true&output=csv',
'test68': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQozqK9V4WzHskLG2GM2TqmpcA4z3YwgZrpJ8QaJsYNsVxtc_XFqNHKmXaJBjwFNnanHPnFsyBMrS7V/pub?gid=192879306&single=true&output=csv',
'test69': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQozqK9V4WzHskLG2GM2TqmpcA4z3YwgZrpJ8QaJsYNsVxtc_XFqNHKmXaJBjwFNnanHPnFsyBMrS7V/pub?gid=1900560402&single=true&output=csv',
'test70': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQozqK9V4WzHskLG2GM2TqmpcA4z3YwgZrpJ8QaJsYNsVxtc_XFqNHKmXaJBjwFNnanHPnFsyBMrS7V/pub?gid=1452267270&single=true&output=csv',

// part 15

'test71': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3a64dy5bl82cZlbsAUQ3laCYHQJmwDhXonzYqimt_3QI7sBoqXyyyzvgVR3bsCvxRSI9iY_BI9hnr/pub?gid=0&single=true&output=csv',
'test72': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3a64dy5bl82cZlbsAUQ3laCYHQJmwDhXonzYqimt_3QI7sBoqXyyyzvgVR3bsCvxRSI9iY_BI9hnr/pub?gid=944181566&single=true&output=csv',
'test73': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3a64dy5bl82cZlbsAUQ3laCYHQJmwDhXonzYqimt_3QI7sBoqXyyyzvgVR3bsCvxRSI9iY_BI9hnr/pub?gid=1674712387&single=true&output=csv',
'test74': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3a64dy5bl82cZlbsAUQ3laCYHQJmwDhXonzYqimt_3QI7sBoqXyyyzvgVR3bsCvxRSI9iY_BI9hnr/pub?gid=1502372756&single=true&output=csv',
'test75': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3a64dy5bl82cZlbsAUQ3laCYHQJmwDhXonzYqimt_3QI7sBoqXyyyzvgVR3bsCvxRSI9iY_BI9hnr/pub?gid=819273801&single=true&output=csv',

// part 16

'test76': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3WjYG1lU-yqf7RG8dtoZHQpCjUHIkn_KbB7MMi1LVSLANPMXeUxWl7SQgaiXhIrOGqcT9qs-9pXmh/pub?gid=0&single=true&output=csv',
'test77': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3WjYG1lU-yqf7RG8dtoZHQpCjUHIkn_KbB7MMi1LVSLANPMXeUxWl7SQgaiXhIrOGqcT9qs-9pXmh/pub?gid=115926599&single=true&output=csv',
'test78': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3WjYG1lU-yqf7RG8dtoZHQpCjUHIkn_KbB7MMi1LVSLANPMXeUxWl7SQgaiXhIrOGqcT9qs-9pXmh/pub?gid=573204681&single=true&output=csv',
'test79': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3WjYG1lU-yqf7RG8dtoZHQpCjUHIkn_KbB7MMi1LVSLANPMXeUxWl7SQgaiXhIrOGqcT9qs-9pXmh/pub?gid=893493474&single=true&output=csv',
'test80': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3WjYG1lU-yqf7RG8dtoZHQpCjUHIkn_KbB7MMi1LVSLANPMXeUxWl7SQgaiXhIrOGqcT9qs-9pXmh/pub?gid=1795730958&single=true&output=csv',

// part 17

'test81': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTw-zW7_aoDVxX-w-p932zMwS0B93PvL-MuM4CIRkpgQ-Bw0y3XhRbGqaLDydHJMqRgik98c-TWvS7M/pub?gid=0&single=true&output=csv',
'test82': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTw-zW7_aoDVxX-w-p932zMwS0B93PvL-MuM4CIRkpgQ-Bw0y3XhRbGqaLDydHJMqRgik98c-TWvS7M/pub?gid=265012059&single=true&output=csv',
'test83': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTw-zW7_aoDVxX-w-p932zMwS0B93PvL-MuM4CIRkpgQ-Bw0y3XhRbGqaLDydHJMqRgik98c-TWvS7M/pub?gid=1354763022&single=true&output=csv',
'test84': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTw-zW7_aoDVxX-w-p932zMwS0B93PvL-MuM4CIRkpgQ-Bw0y3XhRbGqaLDydHJMqRgik98c-TWvS7M/pub?gid=459817166&single=true&output=csv',
'test85': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTw-zW7_aoDVxX-w-p932zMwS0B93PvL-MuM4CIRkpgQ-Bw0y3XhRbGqaLDydHJMqRgik98c-TWvS7M/pub?gid=1329204643&single=true&output=csv',

// part 18

'test86': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhZbPrNMQjqgFD5unM_3Va250DGs-9gYknm-Q_YAUYC-3P-UcTl_MzmEV6slV4A2iHTWQ7KEaXsgR6/pub?gid=0&single=true&output=csv',
'test87': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhZbPrNMQjqgFD5unM_3Va250DGs-9gYknm-Q_YAUYC-3P-UcTl_MzmEV6slV4A2iHTWQ7KEaXsgR6/pub?gid=1357471070&single=true&output=csv',
'test88': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhZbPrNMQjqgFD5unM_3Va250DGs-9gYknm-Q_YAUYC-3P-UcTl_MzmEV6slV4A2iHTWQ7KEaXsgR6/pub?gid=435096190&single=true&output=csv',
'test89': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhZbPrNMQjqgFD5unM_3Va250DGs-9gYknm-Q_YAUYC-3P-UcTl_MzmEV6slV4A2iHTWQ7KEaXsgR6/pub?gid=996579219&single=true&output=csv',
'test90': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQhZbPrNMQjqgFD5unM_3Va250DGs-9gYknm-Q_YAUYC-3P-UcTl_MzmEV6slV4A2iHTWQ7KEaXsgR6/pub?gid=37766081&single=true&output=csv',

// part 19

'test91': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSeUgEf0idDOT5IBfeJxAkKpvj9KQCtMz_y-t1QHWT-V7Kqn40Hmqj70pPAAv_4-C0DSicR0qhyN-LS/pub?gid=0&single=true&output=csv',
'test92': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSeUgEf0idDOT5IBfeJxAkKpvj9KQCtMz_y-t1QHWT-V7Kqn40Hmqj70pPAAv_4-C0DSicR0qhyN-LS/pub?gid=1104321688&single=true&output=csv',
'test93': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSeUgEf0idDOT5IBfeJxAkKpvj9KQCtMz_y-t1QHWT-V7Kqn40Hmqj70pPAAv_4-C0DSicR0qhyN-LS/pub?gid=1700327859&single=true&output=csv',
'test94': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSeUgEf0idDOT5IBfeJxAkKpvj9KQCtMz_y-t1QHWT-V7Kqn40Hmqj70pPAAv_4-C0DSicR0qhyN-LS/pub?gid=1391649465&single=true&output=csv',
'test95': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSeUgEf0idDOT5IBfeJxAkKpvj9KQCtMz_y-t1QHWT-V7Kqn40Hmqj70pPAAv_4-C0DSicR0qhyN-LS/pub?gid=1891232911&single=true&output=csv',

// part 20

'test96': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHmd8RH6qiS174vNd2BXDcLt2ZDCk39TsYUXr4lau-Vr3rk-19Vh6b0s4ERQNdBqI-uAVQFwxWm6q6/pub?gid=0&single=true&output=csv',
'test97': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHmd8RH6qiS174vNd2BXDcLt2ZDCk39TsYUXr4lau-Vr3rk-19Vh6b0s4ERQNdBqI-uAVQFwxWm6q6/pub?gid=42763992&single=true&output=csv',
'test98': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHmd8RH6qiS174vNd2BXDcLt2ZDCk39TsYUXr4lau-Vr3rk-19Vh6b0s4ERQNdBqI-uAVQFwxWm6q6/pub?gid=1266911284&single=true&output=csv',
'test99': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHmd8RH6qiS174vNd2BXDcLt2ZDCk39TsYUXr4lau-Vr3rk-19Vh6b0s4ERQNdBqI-uAVQFwxWm6q6/pub?gid=2038551513&single=true&output=csv',
'test100': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTHmd8RH6qiS174vNd2BXDcLt2ZDCk39TsYUXr4lau-Vr3rk-19Vh6b0s4ERQNdBqI-uAVQFwxWm6q6/pub?gid=723651484&single=true&output=csv',

// part 21

'test101': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTU9gn1WnwZTH5ZOAe5UIe1UzBuhcm6_hx_I9ez3EmBsNvLr5jNl3ilxMgJyqJhonq9kvhcS0jcDsUQ/pub?gid=0&single=true&output=csv',
'test102': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTU9gn1WnwZTH5ZOAe5UIe1UzBuhcm6_hx_I9ez3EmBsNvLr5jNl3ilxMgJyqJhonq9kvhcS0jcDsUQ/pub?gid=1067754863&single=true&output=csv',
'test103': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTU9gn1WnwZTH5ZOAe5UIe1UzBuhcm6_hx_I9ez3EmBsNvLr5jNl3ilxMgJyqJhonq9kvhcS0jcDsUQ/pub?gid=1433264460&single=true&output=csv',
'test104': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTU9gn1WnwZTH5ZOAe5UIe1UzBuhcm6_hx_I9ez3EmBsNvLr5jNl3ilxMgJyqJhonq9kvhcS0jcDsUQ/pub?gid=1028406643&single=true&output=csv',
'test105': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTU9gn1WnwZTH5ZOAe5UIe1UzBuhcm6_hx_I9ez3EmBsNvLr5jNl3ilxMgJyqJhonq9kvhcS0jcDsUQ/pub?gid=292691615&single=true&output=csv',

// part 22

'test106': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv',
'test107': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=656871752&single=true&output=csv',
'test108': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=1101294417&single=true&output=csv',
'test109': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=175318602&single=true&output=csv',
'test110': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=1251784329&single=true&output=csv',


    


  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const testUrl = testSheetUrls[testId || "test1"];
        const response = await fetch(testUrl);
        const csvData = await response.text();
        const rows = csvData.split("\n");
        const parsedQuestions = rows.slice(1).map((row) => {
          const [question, optionA, optionB, optionC, optionD, correctAnswer, explanation] = row.split(",");
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
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [testId]);

  useEffect(() => {
    if (timeLeft === 0) handleFinish();
    const timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else handleFinish();
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const handleSkip = () => {
    setSelectedAnswer(null);
    handleNext();
  };

  const handleFinish = () => {
    setShowResult(true);
  };

  if (loading) return <p className="text-center text-lg">⏳ Loading questions...</p>;

  if (showResult) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">🎉 Test Results 🎉</h1>
        <p className="text-3xl font-bold text-center text-green-600 mb-6">
          🏆 Score: {score}/{questions.length}
        </p>
        <div className="space-y-6">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4 border-l-4"
                style={{ borderColor: isCorrect ? "green" : "red" }}
              >
                <p className="font-semibold text-lg mb-2">
                  {index + 1}. {q.question}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Object.entries(q.options).map(([key, value]) => (
                    <div
                      key={key}
                      className={`p-2 rounded ${
                        userAnswer === key
                          ? isCorrect
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                          : key === q.correctAnswer
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-50"
                      }`}
                    >
                      {key}. {value}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  <strong>Explanation:</strong> {q.explanation}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Restart Test 🔄
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold">
            Question {currentQuestion + 1} / {questions.length}
          </h1>
          <p className="text-sm text-gray-600">
            ⏱️ Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </p>
        </div>
        <p className="text-lg font-semibold mb-4"> {questions[currentQuestion].question} ❓</p>
        <div className="space-y-3">
          {Object.entries(questions[currentQuestion].options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className={`block w-full text-left px-4 py-2 rounded-md border ${
                selectedAnswer === key ? "bg-blue-50 border-blue-500" : "border-gray-300 hover:border-blue-300"
              }`}
            >
              {key}. {value}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
          >
            ⬅️ Previous
          </button>
          <button
            onClick={handleSkip}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Skip ➡️
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {currentQuestion === questions.length - 1 ? "Finish ✅" : "Next ➡️"}
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
//   const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

//   // Mapping testId to Google Sheets URLs
//   const testSheetUrls: { [key: string]: string } = {
//     // test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv',
   
//     // // test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?output=csv',
//     // test2: '',
//     // // Add other test URLs here


//         //  Part 1
//     test1: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv',
//     test2: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=1128083867&single=true&output=csv',
//     test3: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=250122569&single=true&output=csv',
//     test4: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=1350178693&single=true&output=csv',
//     test5: '',
    
//     // Add more tests here as needed
// // you can write in both way
//      // Part 2
//   'test6': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=0&single=true&output=csv',
//   'test7': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=543287620&single=true&output=csv',
//   'test8': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=405127809&single=true&output=csv',
//   'test9': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS-OsP_a-VeLff3eQpKiPJELAtWSznKLcCZM_ky6QasqB4ab6A2cXPJLHm1KwcSSW4kl8c6jqi11yKI/pub?gid=2054258588&single=true&output=csv',
//   'test10': '',



  
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

//   // Timer effect
//   useEffect(() => {
//     if (timeLeft === 0) {
//       // Time's up, submit the test
//       handleFinish();
//     } else {
//       const timer = setInterval(() => {
//         setTimeLeft((prevTime) => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(timer); // Cleanup the interval on component unmount
//     }
//   }, [timeLeft]);

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
//       handleFinish();
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

//   const handleFinish = () => {
//     const finalScore = answers.reduce((acc, answer, index) => {
//       return answer === questions[index].correctAnswer ? acc + 1 : acc;
//     }, 0);
//     setScore(finalScore);
//     setShowResult(true);
//   };

//   const restartQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedAnswer(null);
//     setAnswers(new Array(questions.length).fill(null));
//     setShowResult(false);
//     setScore(0);
//     setTimeLeft(10* 60); // Reset timer to 10 minutes
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
//             Score: {score}/{questions.length} | Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
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


















