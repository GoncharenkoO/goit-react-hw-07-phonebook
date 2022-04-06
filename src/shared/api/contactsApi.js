import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://624d4341d71863d7a815381f.mockapi.io/api/v1/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};

export const removeContact = async id => {
  const { data: result } = await instance.delete(`/${id}`);
  return result;
};

const API = {
  getContacts,
  addContact,
  removeContact,
};

export default API;
