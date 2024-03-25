const useNotesStore = create((set) => ({
  notes: [],
  fetchNotesFromDatabase: () => {
    const q = query(
      collection(db, "TodoNotes"),
      where("team", "==", auth.currentUser.email)
    );
    onSnapshot(q, (querySnap) => {
      set({ notes: querySnap.docs.map((doc) => doc.data()) });
    });
  },
}));
