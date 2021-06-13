import Storage from "./storage";

const addList = async (title, tasks) => {
  var lists = await Storage.getData("lists").then();
  if (!lists) {
    lists = [];
    lists.push({ title: title, tasks: tasks });
  } else {
    lists.push({ title: title, tasks: tasks });
  }
  await Storage.storeData("lists", lists);
};

const deleteList = async (id) => {
  var lists = await Storage.getData("lists").then();
  var newlists = lists.filter((value, index, arr) => {
    if (index !== id) {
      return value;
    }
  });

  await Storage.storeData("lists", newlists);
};

const getLists = async () => {
  var lists = await Storage.getData("lists");
  return lists;
};

const clearLists = async () => {
  const lists = [];
  await Storage.storeData("lists", lists);
};

export default { addList, getLists, clearLists, deleteList };
