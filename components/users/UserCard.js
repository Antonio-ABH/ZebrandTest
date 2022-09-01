/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: antiquewhite;
  padding: 10px;
  margin-top: 20px;

  @media (min-width: 376px) {
    box-shadow: 10px 7px 4px 2px gray;
    margin: 30px;
  }
`;

const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const Name = styled.div`
  background-color: #bfa7887a;
  border-radius: 5px;
  padding: 5px;
  width: 90%;

  p {
    display: flex;
    color: brown;
    font-weight: 700;
  }
  span {
    margin: 0 15px;
    color: black;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: brown;
    font-weight: 700;
  }

  a {
    font-weight: 700;
  }
`;

const UserCard = ({ name, image, kind, site }) => {
  return (
    <Card>
      <div>
        <Photo src={image} width={150} height={150} alt="user-image" />
      </div>
      <Name>
        <p>
          User:<span>{name}</span>
        </p>
        <p>
          Type:<span>{kind}</span>
        </p>
      </Name>
      <Info>
        <p>Site:</p>
        <Link href={site}>
          <a target="_blank" rel="noopener noreferrer">
            {site}
          </a>
        </Link>
      </Info>
    </Card>
  );
};

export default UserCard;
