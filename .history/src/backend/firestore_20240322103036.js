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
    // deadline: deadline,
    // team: team.length,
    // type: type,
    // subProblem: subProblem.length,
  };
  try {
    await addDoc(collection(db, "UserNotes"), data);
    console.log("doc added");
  } catch (err) {
    console.log(err);
  }
};

export { createUserTodoNote };
