import axios from "axios";
  
async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`http://localhost:1337/auth/local/register`, {
      username,
      email,
      password
    })
    .catch(error => console.log(error));
  return response;
}

export default registerUser;
