import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 100;

  div {
    width: 1.7rem;
    height: 3px;
    background-color: ${({ open }) => (open ? "#ccc" : "#040303")};
    border-radius: 10px;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(40deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      visibility: ${({ open }) => (open ? "hidden" : "visible")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-40deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Hamburger = ({ open, toggleBurger }) => {
  return (
    <>
      <StyledBurger open={open} onClick={toggleBurger}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default Hamburger;
