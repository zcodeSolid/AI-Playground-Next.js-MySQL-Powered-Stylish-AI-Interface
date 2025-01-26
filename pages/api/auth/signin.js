// src/pages/api/auth/signin.js

import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db'; 
import { error } from 'console';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { inputValue, passwordValue } = req.body;

    if (!inputValue || !passwordValue) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

      // Insert into MySQL database
      const queryCheck = 'select * from users where email = ?' ;
      db.execute(queryCheck, [inputValue], (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: err });
        }

        if (results.length > 0) {
          return res.status(201).json({ error: 'this email is already used' });
        }

      });


    // Insert into MySQL database
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.execute(query, [inputValue, passwordValue], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: err });
      }


      return res.status(201).json({ message: 'User created successfully' });
    });
  } else {
    // Only POST requests are allowed
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
