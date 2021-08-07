import axios from "axios";
  
async function registerUser({ email, password, username }) {
  const response = await axios
    .post(`https://gentle-lowlands-73749.herokuapp.com/auth/local/register`, {
      username,
      email,
      password
    })
    .catch(error => console.log(error));
  return response;
}

export default registerUser;
