import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "./redux/action";
import User from "./components/User";

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const alert = useSelector((state) => state.alert);

  const handleGetUsers = () => {
    dispatch(getUsers());
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={handleGetUsers}>Get users</button>
      {alert && <div>{alert}</div>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} onDeleteUser={handleDeleteUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
