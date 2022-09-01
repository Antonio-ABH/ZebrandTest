/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Repos from "./Repos";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  width: 90%;
  border: 1px solid gray;
  background-color: #2a2a2e;
  border-radius: 10px;
  padding: 10px;

  @media (min-width: 560px) {
    width: 500px;
  }
`;

const InfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: space-around;

  span {
    color: white;
    font-weight: 700;
  }
`;

const Pharaph = styled.p`
  color: #d99b4f;
  font-weight: 600;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  padding: 5px;
  background-color: #3e3e3e;
`;

const Follow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;

  span {
    color: white;
    font-weight: 700;
  }
`;

const PrincipalCard = ({ getUser, repos }) => {
  repos.sort((a, b) => b.stargazer_count - a.stargazer_count);
  let reduce = repos.slice(0, 10);
  let url = getUser.html_url;

  return (
    <ContainerCard>
      <InfoBox>
        <div>
          {getUser.avatar_url ? (
            <Image
              src={getUser.avatar_url}
              width={150}
              height={150}
              alt="user-image"
            />
          ) : (
            <Image
              src="/images/zebrands.png"
              width={100}
              height={91}
              alt="user-image"
            />
          )}
        </div>
        <div>
          <span>
            User:<Pharaph>{getUser.login}</Pharaph>
          </span>
          <span>
            Name:<Pharaph>{getUser.name}</Pharaph>
          </span>
          <span>
            Location:<Pharaph>{getUser.location}</Pharaph>
          </span>
          <span>
            Type:<Pharaph>{getUser.type}</Pharaph>
          </span>
        </div>
      </InfoBox>
      <Follow>
        <span>
          Followers<Pharaph>{getUser.followers}</Pharaph>
        </span>
        <span>
          Followings<Pharaph>{getUser.following}</Pharaph>
        </span>
        <span>
          Repos <Pharaph>{getUser.public_repos}</Pharaph>
        </span>
      </Follow>
      <Repos reduce={reduce} />
    </ContainerCard>
  );
};

export default PrincipalCard;
