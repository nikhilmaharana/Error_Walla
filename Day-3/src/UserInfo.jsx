function UserInfo({ user }) {
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default UserInfo;
