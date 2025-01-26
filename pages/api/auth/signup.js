// src/pages/api/auth/signin.js

import { NextApiRequest, NextApiResponse } from 'next';
// import bcrypt from 'bcryptjs'; 
import db from '../../../lib/db'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { inputValue, passwordValue } = req.body;

    if (!inputValue || !passwordValue) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

  

    // Insert into MySQL database
    const query = 'select * from users where email = ?' ;
    db.execute(query, [inputValue], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'this account doesn’t exist. Please check and try again' });
      }
      if(results[0].password !== passwordValue){
        return res.status(404).json({ error: 'Incorrect password. Please check and try again' });
      }

      return res.status(200).json({ message: 'Login successfully', login: true });

    });
  } else {
    // Only POST requests are allowed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
