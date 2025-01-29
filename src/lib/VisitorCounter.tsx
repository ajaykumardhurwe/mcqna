import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const VisitorCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const incrementVisitCount = async () => {
      const counterRef = doc(db, 'analytics', 'visitorCounter');
      const docSnap = await getDoc(counterRef);

      if (docSnap.exists()) {
        const currentCount = docSnap.data().count || 0;
        setVisitCount(currentCount + 1);
        await updateDoc(counterRef, { count: currentCount + 1 });
      } else {
        await setDoc(counterRef, { count: 1 });
        setVisitCount(1);
      }
    };

    incrementVisitCount();
  }, []);

  return (
    <div className="text-center mt-4">
      <p className="text-gray-600 text-lg font-medium">
        Visitor Count: <span className="text-blue-600">{visitCount}</span>
      </p>
    </div>
  );
};

export default VisitorCounter;
