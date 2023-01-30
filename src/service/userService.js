import { User } from "../model/User.js";


const user_create = async (body) => {
  const { firstName, lastName, email, password } = body;

  try {
    const response = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return await response;
  } catch (err) {
    console.log("Account creation failed");
  }
};

const getAllUsersDetails = async () => {
  try {
    const response = await User.findAll({
      attributes: ["firstName", "lastName", "email"],
    });
    return await response;
  } catch (err) {
    console.log("User details can't be fetched");
  }
};

export { user_create, getAllUsersDetails, };