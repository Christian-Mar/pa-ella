import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';



// onSnapshot to get realtime data

export const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const ref = collection(db, c);
    const q = query(ref, where("category", "==", "salad"))


    const unsub = onSnapshot(q, (snapshot) => {
      let results = [];
      //realtime listener
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      })
      setDocuments(results)
    })
    return () => unsub() // clean up
  }, [c]) //dependancy to trigger the hook
  
  return { documents }
}


