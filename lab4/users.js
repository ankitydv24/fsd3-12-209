// we use in memory database
let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "9876543210",
    email: "amit.sharma@example.com",
  },
  {
    id: 2,
    name: "Suresh Kumar",
    mob: "9876543211",
    email: "suresh.kumar@example.com",
  },
];

let nextId = 3;

//export const getUsers=()=>users;

export const getAllUsers = () => {
  return users;
};

export const getUsersById = (pid) => {
  const found = users.find((user) => user.id === pid);
  return found;
};

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

export const updateuser = (pid, updatedata) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1) {
    return false;
  }
  updatedata.id = pid;
  users[index] = updateData;
  return updateData;
};

export const deleteUer = (pid) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index == -1) {
    return false;
  }
  users.splice(index, 1);
};