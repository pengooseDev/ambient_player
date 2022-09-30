import img from "../../assets/AmbientImg/Library1/18.webp";
import useSound from "use-sound";
import LibrarySFX from "../../assets/AmbientSound/Library1.mp3";
import styled from "styled-components";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { navToggleAtom } from "../../atom";

import testSFX from "../../assets/AmbientSound/test.mp3";

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

const Btn = styled.div`
  padding: 10px;
  border-radius: 3px;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.3);
  transition: ease-in-out 0.2s;
  font-weight: 600;
  :hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.65);
    color: #111;
  }
`;

/*
 **중요**
 Props 전달하는 과정에서 실수 없애기. 
 반복되는 실수
 **중요**
 반복되는 실수
 **중요**
 반복되는 실수
 
 
 컴포넌트에서 props를 전달하는 방식은 아래와 같다.
 <SoundComponents sound={testSFX} />;
 
 이를 함수형 컴포넌트에서 받는 방식은 아래와 같다.

 1. 객체에서의 구조 분해 할당.
  const {sound} = props; 
  위와 같은 방식으로
  const SoundComponents = ({ sound }: any) => {
    const [play] = useSound(sound);
    return null;
  }

  2. default 방식.
  const SoundComponents = (props) => {
    const [play] = useSound(props.sound);
    return null;
  }

  Type도 제발 실수 멈춰!!

*/
const SoundComponents = ({ sound }: any) => {
  const [isVisible, setVisible] = useRecoilState(navToggleAtom);

  const [isPlaying, setIsPlaying] = useState(true);
  const [play, { stop }] = useSound(sound);

  const soundHandler = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  };
  const navCloseHandler = () => {
    if (isVisible) {
      setVisible((prev) => !prev);
    }
  };

  return (
    <Wrapper onClick={navCloseHandler}>
      <div>Library</div>
      <ImgContainer />
      <Btn onClick={soundHandler}>Play</Btn>
    </Wrapper>
  );
};

const Library = () => {
  return <SoundComponents sound={testSFX} />;
};

export default Library;
