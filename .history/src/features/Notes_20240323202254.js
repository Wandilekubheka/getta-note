const useNotesStore = create((set) => ({
  notes: [],
  fetchNotesFromDatabase: () => {
    const q = query(
      collection(db, "TodoNotes"),
      where("team", "==", auth.currentUser.email)
    );
    set({ bears: state.bears + 1 });
  },
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
