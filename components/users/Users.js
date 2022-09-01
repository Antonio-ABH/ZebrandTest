/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const initialState = [];

const Users = () => {
  const [users, setUsers] = useState(initialState);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.login}
          image={user.avatar_url}
          kind={user.type}
          site={user.html_url}
        />
      ))}
    </Container>
  );
};

export default Users;
