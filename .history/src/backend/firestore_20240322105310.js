import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const createUserTodoNote = async (title, deadline, team, type, subProblem) => {
  const data = {
    title: title,
    deadline: deadline,
    team: team[0],
    type: type,
    subProblem: subProblem.length,
  };
  const docRef = await addDoc(collection(db, "TodoNotes"), data);
};

export { createUserTodoNote };
