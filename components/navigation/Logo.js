/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Image from "next/image";

const LogoImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
`;

const Logo = () => {
  return (
    <LogoImg>
      <Image src="/images/zebrands.png" width={64} height={58} alt="Logo" />
    </LogoImg>
  );
};

export default Logo;
