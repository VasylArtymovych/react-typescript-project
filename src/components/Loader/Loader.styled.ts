import styled from "styled-components";

//============ CustomSpiner ================
export const Container = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const Loader = styled("div")`
  position: relative;
  width: 120px;
  height: 120px;
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));
    animation: animateBg 5s linear infinite;
  }
  & span::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: #00ff0a;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
      0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
    animation: animateSpan 2s linear infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  @keyframes animateSpan {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes animateBg {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

//=============== LoadingLIne ======================
export const ParentDiv = styled("div")`
  position: relative;
  margin-top: 20px;
  width: 100%;
  height: 6px;
  background-color: #fdba2c;

  div {
    content: "";
    display: inline;
    position: absolute;
    width: 0;
    height: 100%;
    left: 50%;
    text-align: center;
  }
  div:nth-child(1) {
    background-color: #da4733;
    animation: loading 3s linear infinite;
  }
  div:nth-child(2) {
    background-color: #3b78e7;
    animation: loading 3s linear 1s infinite;
  }
  div:nth-child(3) {
    background-color: #fdba2c;
    animation: loading 3s linear 2s infinite;
  }
  @keyframes loading {
    from {
      left: 0;
      width: 0;
      z-index: 100;
    }
    33.3333% {
      left: 0;
      width: 100%;
      z-index: 10;
    }
    to {
      left: 0;
      width: 100%;
    }
  }
`;
