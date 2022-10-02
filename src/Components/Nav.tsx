import { Link } from "react-router-dom";
import styled from "styled-components";
import routeData from "../routeData";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { navToggleAtom, playerAtom } from "../atom";

interface ILinkProps {
    img: string;
}

//dummyData 생성 후, 한 번에 4개의 Route Render. FramerMotion 사용해서 왔다갔다.

const Wrapper = styled.div<{ visible: boolean }>`
    position: fixed;
    top: ${(props) => (props.visible ? "0px" : "-170px")};
    transition: ease-in-out 0.2s;
    width: 100vw;
    background: #434343;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
`;

const ToggleBtn = styled.div`
    position: absolute;
    left: 20px;
    width: 100px;
    height: 25px;
    border-radius: 0px 0px 5px 5px;
    background: #434343;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
    :hover {
        cursor: pointer;
    }
`;

const Slider = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px 30px 10px 10px;
    height: 150px;
    color: white;
`;

const LinkBox = styled.div<ILinkProps>`
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
        url(${(props) => props.img});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-radius: 5px;
    font-weight: 600;
    text-align: center;
    color: white;
    transition: ease-in-out 0.2s;
    :hover {
        background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
            url(${(props) => props.img});
        background-size: cover;
    }
`;

const AfterBtn = styled.input.attrs({ type: "button" })`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 100%;
    right: 0px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    position: absolute;
    transition: ease-in-out 0.2s;
    font-weight: 600;
    :hover {
        background: rgba(0, 0, 0, 0.7);
        cursor: pointer;
    }
`;

const Nav = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [isVisible, setVisible] = useRecoilState(navToggleAtom);

    const afterHandler = () => {
        setSlideIndex((prev) => {
            if (routeData.length / 4 >= prev) {
                return (prev += 1);
            }
            return 1;
        });
    };

    const toggleHandler = () => {
        setVisible((prev) => !prev);
    };

    return (
        <Wrapper visible={isVisible}>
            <Slider>
                {routeData
                    .slice(4 * (slideIndex - 1), 4 * slideIndex)
                    .map((v, i) => (
                        <Link key={i} to={v.path}>
                            <LinkBox img={v.img}>{v.name}</LinkBox>
                        </Link>
                    ))}
                <AfterBtn onClick={afterHandler} value=">" />
            </Slider>
            <ToggleBtn onClick={toggleHandler} />
        </Wrapper>
    );
};

export default Nav;
