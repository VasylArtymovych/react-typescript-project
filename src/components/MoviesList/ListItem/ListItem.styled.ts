import styled from "styled-components";
import { TbMovie } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Item = styled("li")`
  padding: ${(p) => p.theme.space[2]}px;
  border-radius: ${({ theme }) => theme.radii.normal};

  background: ${({ theme }) => theme.colors.background};
  box-shadow: rgba(255, 111, 80, 0.25) 0px 54px 55px,
    rgba(255, 111, 80, 0.12) 0px -12px 30px,
    rgba(255, 111, 80, 0.12) 0px 4px 6px, rgba(255, 111, 80, 0.17) 0px 12px 13px,
    rgba(255, 111, 80, 0.09) 0px -3px 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(p) => p.theme.colors.white};
  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

export const ImgWrap = styled("div")`
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const TextWraper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  & p {
    text-align: center;
  }
`;

export const Icon = styled(TbMovie)`
  margin-right: 5px;
`;
