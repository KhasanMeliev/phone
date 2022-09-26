import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2a2f3d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const PhoneBox = styled.div`
  width: 270px;
  height: 460px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  padding: 5px;
`;
export const Line = styled.div`
  width: 40%;
  height: 15px;
  background-color: #2a2f3d;
  margin-top: 10px;
`;
export const PhoneScreen = styled.div`
  width: 85%;
  height: 80%;
  background-color: #2a2f3d;
  margin: 10px;
`;
export const Round = styled.div`
  width: 60px;
  height: 60px;
  background-color: #2a2f3d;
  border-radius: 50%;
  cursor: pointer;
`;

export const Header = styled.div`
  width: 100%;
  height: 45px;
  background-color: #d00df4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;

export const Main = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  h1 {
    color: white;
    margin: 0;
  }
  p {
    color: white;
    margin: 0;
  }
`;

export const Box = styled.div`
  width: 80%;
  height: 150px;
  background-color: white;
  border-radius: 4px;
  box-sizing: border-box;
  img {
    width: 183px;
    height: 150px;
  }
`;
