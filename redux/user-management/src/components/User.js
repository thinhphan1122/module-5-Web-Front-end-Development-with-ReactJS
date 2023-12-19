import React from "react";

const User = ({ user, onDeleteUser }) => {
  const handleDelete = () => {
    onDeleteUser(user.id);
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default User;
