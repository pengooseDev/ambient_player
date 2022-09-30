import img from "../../assets/AmbientImg/Library1/18.webp";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #111;
  height: 100vh;
  color: white;
`;

const ImgContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(${img});
  height: 500px;
  width: 500px;
  background-size: cover;
`;

const Libarary = () => {
  return (
    <Wrapper>
      <div>Libarary</div>
      <ImgContainer />
    </Wrapper>
  );
};

export default Libarary;
