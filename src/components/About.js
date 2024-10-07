import React, {useEffect, useState} from 'react'
import axios from 'axios';
function About() {
  const [users, setUsers] = useState([]);
// import { BASE_URL } from '../../config';

  const getUsers = () => async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      debugger

    } catch (error) {

    }
  };

  useEffect(() => {
    getUsers();
  }, [])
  return (
    <div>
      <h1>About page</h1>
    </div>
  )
}

export default About
