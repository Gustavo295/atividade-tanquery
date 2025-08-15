import axios from "axios";

// criando uma constante para API
const API_URL = 'http://jsonplaceholder.typicode.com/users'

// função para pegar os dados da API
export const fetchUsers = async () =>{
  const response = await axios.get(API_URL);
  return response.data;
};
