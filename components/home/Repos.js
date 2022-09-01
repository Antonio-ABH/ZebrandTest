import Link from "next/link";
import styled from "styled-components";

const ContainerRepos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #1d2020;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;

  a {
    color: #72bbb1;
    line-height: 1cm;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Title = styled.p`
  text-align: center;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #19b9dd;
`;

const Repos = ({ reduce }) => {
  return (
    <ContainerRepos>
      <Title>10 Most Important Repositories</Title>
      {reduce.map((repo) => (
        <div key={repo.id}>
          <Link href={repo.html_url}>
            <a target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </Link>
        </div>
      ))}
    </ContainerRepos>
  );
};

export default Repos;
