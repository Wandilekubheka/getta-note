import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const createUserTodoNote = async (
  title,
  description,
  deadline,
  team,
  type,
  subProblem
) => {
  const data = {
    title: title,
    description: description,
    deadline: deadline,
    team: team[0],
    type: type,
    subProblem: subProblem.length,
  };
  const docRef = await addDoc(collection(db, "TodoNotes"), data);
};

export { createUserTodoNote };
