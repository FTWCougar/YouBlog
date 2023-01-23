import React from "react";
import UserBlog from "./UserBlog";

const ProfilePage = ({user}) => {
  return (
  <div>
    <h1>{user.username}</h1>
    <UserBlog user={user}/>
    
  </div>
  )
};

export default ProfilePage;
