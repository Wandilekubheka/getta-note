const useNotesStore = create((set) => ({
  notes: [],
  fetchNotesFromDatabase: () => {
    const q = query(
      collection(db, "TodoNotes"),
      where("team", "==", auth.currentUser.email)
    );
    onSnapshot(q, (querySnap) => {
      setTodo(querySnap.docs.map((doc) => doc.data()));
    });
    set({ bears: state.bears + 1 });
  },
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
