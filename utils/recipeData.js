import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export async function getRecipes() {

  const response = await fetch(
		`https://firestore.googleapis.com/v1/projects/NEXT_PUBLIC_PROJECT_ID/databases/(default)/documents/recipes`
	);
  const data = await response.json();
  console.log(data);
  return data;
  
}

