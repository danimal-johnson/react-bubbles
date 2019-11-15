import React from 'react';
import axios from 'axios';

const axiosWithAuth =() => {
  const token = localStorage.getItem('token');

  return axios.create({
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
      },
  });
};

const authAxios = axiosWithAuth();

export default authAxios;