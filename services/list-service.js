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
  console.log(lists);
};

const deleteList = async (id) => {
  var lists = await Storage.getData("lists").then();
  var newlists = lists.filter((value, index, arr) => {
    if (index !== id) {
      return value;
    }
  });

  await Storage.storeData("lists", newlists);
  console.log(lists);
};

const getlists = async () => {
  var lists = await Storage.getData("lists");
  return lists;
};

const clearlists = async () => {
  const lists = [];
  await Storage.storeData("lists", lists);
};

export default { addList, getlists, clearlists, deleteList };
