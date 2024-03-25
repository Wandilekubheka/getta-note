const useNotesStore = create((set) => ({
  notes: [],
  fetchNotesFromDatabase: (email) => {
    const q = query(collection(db, "TodoNotes"), where("team", "==", email));
    onSnapshot(q, (querySnap) => {
      set({ notes: querySnap.docs.map((doc) => doc.data()) });
    });
  },
}));
