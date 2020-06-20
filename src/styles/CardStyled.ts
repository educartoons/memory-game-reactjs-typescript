import styled from "styled-components";

const CardStyled = styled.div`
  position: relative;
  height: 140px;
  .absolute {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: transform, opacity;
  }
  .front {
    background-color: #f3e7d7;
  }
  .back {
    background-color: #fcd04b;
    text-align: center;
    vertical-align: middle;
    span {
      font-size: 300%;
      line-height: 140px;
      user-select: none;
    }
  }
`;

export default CardStyled;
