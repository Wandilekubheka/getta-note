import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";

const createTodoNote = async (
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
    team: team.length,
    type: type,
    subProblem: subProblem,
  };
  try {
    await addDoc(collection(db, "UserNotes"), data);
    console.log("doc added");
  } catch {
    console.log("problem");
  }
};

export { createTodoNote };
