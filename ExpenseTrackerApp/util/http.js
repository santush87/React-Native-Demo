import axios from "axios";

const BACKEND_URL =
  "https://react-native-app-a00b4-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
  const response = await axios.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  //   This is the ID (In Firebase is called 'name')
  const id = response.data.name;
  return id;
}

export async function getExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export async function updateExpense(id, expenseData) {
  return axios.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export async function deleteExpense(id) {
  return await axios.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
