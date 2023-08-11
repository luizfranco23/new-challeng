import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 28px 9%;
  background: var(--white-primary);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
`;

export const Logo = styled.div``;

export const Links = styled.nav`
  padding-right: 13%;
  ul {
    display: flex;
    gap: 48px;
  }

  li {
    list-style: none;
  }

  a {
    font-style: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--gray-primary);
    position: relative;
  }

  a:hover {
    color: var(--pink-primary);
  }

  a:hover::after {
    content: "";
    bottom: -250%;
    left: 0;
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #d14b8f;
  }
`;

export const Icons = styled.div`
  display: flex;

  justify-content: center;
  gap: 34px;
`;

export const Acount = styled.div`
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
