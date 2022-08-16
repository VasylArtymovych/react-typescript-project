import styled from "styled-components";
import { Form, Field } from "formik";

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid ${(p) => p.theme.colors.primary};
  @media (min-width: 768px) {
    top: 28px;
    left: 65%;
  }

  @media (min-width: 1200px) {
    top: 28px;
    left: 50%;
  }
`;

const StyledInput = styled(Field)`
  width: 320px;
  min-height: 25px;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: ${(p) => p.theme.space[3]}px;
  background: grey;
  ::placeholder {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Button = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 0;
  background: ${(p) => p.theme.colors.background};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background: ${(p) => p.theme.colors.accent};
  }
`;

export { StyledForm, StyledInput, Button };
