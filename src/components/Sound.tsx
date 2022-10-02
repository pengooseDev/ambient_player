import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { navToggleAtom, playerAtom } from "../atom";
import styled from "styled-components";
import { IRouteData } from "../routeData";
import { FastAverageColor } from "fast-average-color";
import { useEffect, useMemo } from "react";

const Wrapper = styled.div<{ imgUrl: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(30deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.65)),
        url(${(props) => props.imgUrl});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    color: white;
`;

const ImgContainer = styled.div<{ imgUrl: string; avgColor: string }>`
    position: relative;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
        url(${(props) => props.imgUrl});
    height: 500px;
    width: 500px;
    background-size: cover;
    box-shadow: 5px 5px 15px ${(props) => props.avgColor};
    border-radius: 5px;
    :hover {
        cursor: pointer;
    }
`;

const PlayBtn = styled.div<{ avgColor: string }>`
    width: 100px;
    height: 100px;
    position: absolute;
    left: 200px;
    top: 200px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ease-in-out 0.15s;
    color: ${(props) => props.avgColor};
    :hover {
        cursor: pointer;
    }
`;

const Sound = ({ name, path, img, sound }: IRouteData) => {
    const [isVisible, setVisible] = useRecoilState(navToggleAtom);
    const [isPlaying, setIsPlaying] = useRecoilState<boolean>(playerAtom);
    const [avgColor, setAvgColor] = useState<string>("");

    const soundHandler = () => {
        setIsPlaying((prev) => !prev);
        console.log("isplaying?", isPlaying);
        if (isPlaying) {
            audio?.play();
        } else {
            audio?.pause();
        }
    };

    const audioRef = useRef<HTMLAudioElement>(null);
    const audio = audioRef.current;
    // new Audio Promise 때문에 duration 발생하는데 어떻게함?

    useEffect(() => {
        /* Generate Color */
        const fac = new FastAverageColor();
        fac.getColorAsync(img, { algorithm: "sqrt" }).then((i) => {
            setAvgColor((prev) => i.hex);
        });

        /* Audio AutoPlay */
        if (!isPlaying) {
            console.log(isPlaying);
            audioRef.current?.play();
        } else {
            console.log(isPlaying);
        }

        /* useEffect cleanup
            useEffect 내부에서 ArrowFunc를 return할 경우, 
            useEffect가 걸려있는 Component가 언마운트 될 때 실행됨.*/
        //return () => {};
    }, [path]);

    const navCloseHandler = () => {
        if (isVisible) {
            setVisible((prev) => !prev);
        }
    };

    const audioEndHandler = (
        e: React.SyntheticEvent<HTMLAudioElement, Event>
    ) => {
        const { duration } = e.currentTarget;
        let { currentTime } = e.currentTarget;

        const replayTime = duration - 3;
        console.log(duration, currentTime);
        if (currentTime >= replayTime) {
            if (audioRef.current) audioRef.current.currentTime = 2;
        }
    };

    return (
        <Wrapper onClick={navCloseHandler} imgUrl={img}>
            <ImgContainer
                onClick={soundHandler}
                imgUrl={img}
                avgColor={avgColor}
            >
                <PlayBtn avgColor={avgColor}>
                    {isPlaying ? <Play /> : <Pause />}
                </PlayBtn>
            </ImgContainer>
            <audio ref={audioRef} src={sound} onTimeUpdate={audioEndHandler} />
        </Wrapper>
    );
};

export default Sound;

const Play = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
        </svg>
    );
};

const Pause = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
        </svg>
    );
};

/*
 **중요**
 Props 전달하는 과정에서 실수 없애기. 
 반복되는 실수
 **중요**
 객체 구조 분해 할당
 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%EA%B0%9D%EC%B2%B4_%EA%B5%AC%EC%A1%B0_%EB%B6%84%ED%95%B4
 https://ko.javascript.info/destructuring-assignment
 
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
  const Sound = (props) => {
    const [play] = useSound(props.sound);
    return null;
  }

  Type도 제발 실수 멈춰!!
*/
