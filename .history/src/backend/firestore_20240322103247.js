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
    const docRef = await addDoc(collection("cities", db), {
      name: "Tokyo",
      country: "Japan",
    });
    console.log("doc added");
  } catch (err) {
    console.log(err);
  }
};

export { createUserTodoNote };
