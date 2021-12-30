// import { instance } from '.';

import Axios from 'axios';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const result = await Axios.post('/api/socket/upload', formData);
  return result.data;
};
