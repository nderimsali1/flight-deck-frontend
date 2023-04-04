import { Link } from 'react-router-dom';
import { Button } from 'antd';
import React, { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  name: string;
  email: string;
  pic: string;
}

function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get<UserData>("http://localhost:5228/auth/whoami", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log(response);
        setUserData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  console.log(userData);

  return (
    <div>
      <h1>Profile Page</h1>
      {userData ? (
        <div>
          <p>Welcome, {userData.name}!</p>
          <p>Your email is: {userData.email}</p>
          <img src={userData.pic} alt="Profile pic" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">
        <Button type="primary">Go to Home Page</Button>
      </Link>
    </div>
  );
}

export default ProfilePage;
