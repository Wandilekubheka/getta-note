import { collection, onSnapshot, query, where } from "firebase/firestore";
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

const useFilterStore = create((set) => ({
  filter: "all",
  changeFilter: (filterChosen) => {
    set({ filter: filterChosen });
  },
}));
const useSearchStore = create((set) => ({
  search: "",
  changeFilter: (search_) => {
    set({ search: search_ });
  },
}));

export { useNotesStore, useFilterStore };
