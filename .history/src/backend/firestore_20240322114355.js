import {
  collection,
  addDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState } from "react";

const createUserTodoNote = async (title, deadline, team, type, subProblem) => {
  const data = {
    title: title,
    deadline: deadline,
    team: team[0],
    type: type,
    subProblem: subProblem.length,
    subProblemCompleted: 0,
  };
  const docRef = await addDoc(collection(db, "TodoNotes"), data);
};

export { createUserTodoNote, usertoDoNotes };
