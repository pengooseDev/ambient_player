import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import routeData from "../routeData";
import { useState, useEffect } from "react";

interface ILinkProps {
  img: string;
}

//dummyData 생성 후, 한 번에 4개의 Route Render. FramerMotion 사용해서 왔다갔다.

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  width: 100vw;
  background: rgba(0, 0, 0, 0.1);
`;

const LinkBox = styled(motion.div)<ILinkProps>`
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.img});
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 5px;
  font-weight: 600;
  color: white;
`;

const Slider = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
  height: 200px;
  color: white;
`;

const AfterBtn = styled.input.attrs({ type: "button" })`
  width: 20px;
  height: 100%;
  right: 0px;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  position: absolute;
`;

const BeforeBtn = styled.input.attrs({ type: "button" })`
  width: 20px;
  height: 100%;
  left: 0px;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  position: absolute;
`;

const Nav = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const afterHandler = () => {
    setSlideIndex((prev) => {
      if (routeData.length / 4 >= prev) {
        return (prev += 1);
      }
      return 1;
    });
  };
  return (
    <Wrapper>
      <Slider>
        {routeData.slice(4 * (slideIndex - 1), 4 * slideIndex).map((i) => (
          <Link to={i.path}>
            <LinkBox img={i.img}>{i.name}</LinkBox>
          </Link>
        ))}
        <AfterBtn onClick={afterHandler} />
      </Slider>
    </Wrapper>
  );
};

export default Nav;
