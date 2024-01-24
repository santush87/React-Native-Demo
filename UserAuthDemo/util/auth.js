import axios from "axios";

const API_KEY = "AIzaSyAzZlg3DuIyuQ-ysMk5fex_KTRDxpTIVJ0";
const SING_UP_API =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

export async function createUser(email, password) {
  const response = await axios.post(SING_UP_API + API_KEY, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
