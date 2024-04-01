import {
  collection,
  addDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";

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

const usertoDoNotes = async (email) => {
  const notes = [];
  const q = query(collection(db, TodoNotes), where("team", "==", email));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      notes.push(doc.data());
    });
  });
};

export { createUserTodoNote };
