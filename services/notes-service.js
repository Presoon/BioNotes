import Storage from "./storage";

const addNote = async (title, content) => {
  var notes = await Storage.getData("notes").then();
  if (!notes) {
    notes = [];
    notes.push({ title: title, content: content });
  } else {
    notes.push({ title: title, content: content });
  }
  await Storage.storeData("notes", notes);
};

const deleteNote = async (id) => {
  var notes = await Storage.getData("notes").then();
  var newNotes = notes.filter((value, index, arr) => {
    if (index !== id) {
      return value;
    }
  });

  await Storage.storeData("notes", newNotes);
};

const getNotes = async () => {
  var notes = await Storage.getData("notes");
  return notes;
};

const clearNotes = async () => {
  const notes = [];
  await Storage.storeData("notes", notes);
};

export default { addNote, getNotes, clearNotes, deleteNote };
