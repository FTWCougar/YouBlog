import React from "react";
import UserBlog from "./UserBlog";

const ProfilePage = ({setUser, user}) => {
  return (
  <div>
    <h1>{user.username}</h1>
    <UserBlog setUser={setUser} user={user}/>
    
  </div>
  )
};

export default ProfilePage;
