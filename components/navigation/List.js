import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Navigations.module.css";
import styled from "styled-components";

const Ul = styled.ul`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  flex-flow: column nowrap;
  background-color: #383844;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  list-style: none;
  color: white;
  padding-top: 60px;

  li {
    padding: 18px 10px;
    margin: 0 5px;
  }

  li a {
    font-size: 1.2rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
  }
  li a:hover {
    text-decoration: underline;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-flow: row nowrap;
    position: relative;
    height: 60px;
    background-color: #b9ad91;
    padding-top: 0;
    transform: translateX(0);
  }

  @media (min-width: 769px) {
    li {
      color: black;
      margin: 0 10px;
      padding: 18px 20px;
    }
  }
`;

const List = ({ open }) => {
  const router = useRouter();

  return (
    <Ul open={open}>
      <li>
        <Link href="/">
          <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/users">
          <a className={router.pathname === "/users" ? styles.active : ""}>
            Users
          </a>
        </Link>
      </li>
    </Ul>
  );
};

export default List;
