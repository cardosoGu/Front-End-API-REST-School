import styled from 'styled-components';

// styling Nav, size, and cotents positions
export const Container = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  height: 150%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }
  span {
    z-index: 2;
  }
`;
