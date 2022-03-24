import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  display: flex;
  align-items: center;

  p {
    font-family: 'Inter';
    font-weight: 500;
    line-height: 17px;
    font-size: 1.125rem;
    margin-left: 0.5rem;
    color: #fff;
  }
`;

const Logo = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <LogoWrapper onClick={() => router.push('/')}>
      <Image
        src="/assets/arconnect-logo.svg"
        alt="arconnect logo"
        width={30}
        height={30}
      />
      <p>ArConnect</p>
    </LogoWrapper>
  );
};

export default Logo;
