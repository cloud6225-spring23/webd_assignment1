import { hashSync } from "bcrypt";

class hash_pwd {
  static toHash = async (password) => {
    console.log("Inside toHash");
    const hash = await hashSync(password, 10);
    return await hash;
  };
}

export default hash_pwd;