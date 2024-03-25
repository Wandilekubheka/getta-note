import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";
import { create } from "zustand";

const useNotesStore = create((set) => ({
  notes: [],
  fetchNotesFromDatabase: (email) => {
    const q = query(collection(db, "TodoNotes"), where("team", "==", email));
    onSnapshot(q, (querySnap) => {
      set({ notes: querySnap.docs.map((doc) => doc.data()) });
    });
  },
}));

export { useNotesStore };
