import axios from 'axios';

// http://35.247.228.63:81/aluno
export default axios.create({
  baseURL: 'http://35.247.228.63:81',
});
