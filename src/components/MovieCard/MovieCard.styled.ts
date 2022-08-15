import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled("div")`
  padding: ${({ theme }) => theme.space[4]}px 0;
  margin: 0 auto;
`;

export const GoBackBtn = styled("button")`
  width: 65px;
  height: 30px;
  padding: ${(p) => p.theme.space[3]}px;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  font-size: 12px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border: none;
  outline: none;
  border-radius: ${(p) => p.theme.radii.normal};
  color: ${(p) => p.theme.colors.primary};
  background: ${(p) => p.theme.colors.background};
  &:hover {
    background: ${(p) => p.theme.colors.reverseBackground};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      ${(p) => p.theme.colors.primary} 0px -12px 30px,
      ${(p) => p.theme.colors.primary} 0px 4px 6px,
      ${(p) => p.theme.colors.primary} 0px 12px 13px,
      ${(p) => p.theme.colors.primary} 0px -3px 5px;
  }
`;

export const InfoContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
`;

export const ImgWraper = styled("div")`
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  & img {
    display: block;
    width: 100%;
    object-fit: fill;
  }
`;

export const TextWraper = styled("div")`
  padding: 30px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
`;

export const MovieTitle = styled("h2")`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0 2px 4px ${({ theme }) => theme.colors.primary};
`;

export const TextWrap = styled("div")`
  margin-bottom: ${({ theme }) => theme.space[5]}px;
  line-height: ${(p) => p.theme.lineHeights.body};
  color: ${({ theme }) => theme.colors.white};
  @media (min-width: 1200px) {
    font-size: 18px;
  }

  & p {
    display: inline-block;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const StyledSpan = styled("span")`
  margin-right: 10px;
  font-size: 22px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

//additional info:
export const AddInfoWrap = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 10px 0 0 0;
`;

export const Title = styled("h3")`
  padding: 10px;

  font-size: ${(p) => p.theme.fontSizes.m}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
  border-radius: 10px;
  color: ${(p) => p.theme.colors.white};
  background: ${({ theme }) => theme.colors.reverseBackground};
  border-bottom: 1px solid ${(p) => p.theme.colors.accent};
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 4px;
  &:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  &.active {
    font-weight: bold;
    color: ${(p: any) => p.theme.colors.active};
    text-shadow: rgba(255, 255, 255, 0.5) 0px 2px 2px;
  }
`;
