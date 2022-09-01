/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import styled from "styled-components";
import PrincipalCard from "./PrincipalCard";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  height: 30px;
  width: 80%;
  border-radius: 5px;
  border: none;

  @media (min-width: 560px) {
    width: 300px;
  }
`;

const Button = styled.input`
  height: 30px;
  width: 100px;
  color: black;
  font-weight: 700;
  border-radius: 5px;
  border: none;
  margin-top: 30px;

  &&:hover {
    background-color: #90d6f5;
  }
`;

const initialState = "";
const PrincipalHome = () => {
  const [user, setUser] = useState(initialState);
  const [getUser, setGetUser] = useState([]);
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => setGetUser(data));

      fetch(`https://api.github.com/users/${user}/repos`)
        .then((response) => response.json())
        .then((data) => setRepos(data));

      setUser(initialState);
    } else {
      alert("Ingrese Usuario");
    }
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Input
          type="search"
          id="name"
          name="name"
          placeholder="Search User"
          autoFocus
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <Button type="submit" />
      </Form>
      <PrincipalCard getUser={getUser} repos={repos} />
    </Box>
  );
};

export default PrincipalHome;
