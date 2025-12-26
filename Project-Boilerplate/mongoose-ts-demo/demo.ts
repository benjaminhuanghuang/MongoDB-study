import User from "./models/users";

async function createUser() {
  const user = new User({
    username: "John Doe",
    password: "password123",
  });
  await user.save();
  console.log("User created:", user);
}

async function getUsers() {
  const users = await User.find();
  console.log("All users:", users);
}

async function main() {
  await createUser();
  await getUsers();
}
main();
