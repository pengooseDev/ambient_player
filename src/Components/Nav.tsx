import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

/* RouteIMG */
import lib1IMG from "../assets/AmbientImg/Library1/01.webp";
import televisorIMG from "../assets/AmbientImg/TeleVisor/teleVisor.webp";
import Latelier1IMG from "../assets/AmbientImg/L'atelier of the Memory/01.webp";
import Orchestration1IMG from "../assets/AmbientImg/Orchestration/01.webp";

interface ILinkProps {
  img: string;
}

const pathData = [
  { name: "Library", path: "/", img: lib1IMG },
  { name: "Televisor", path: "a", img: televisorIMG },
  { name: "L'atelier of the Memory", path: "b", img: Latelier1IMG },
  { name: "End of the Symphony", path: "c", img: Orchestration1IMG },
];

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding: 10px;
  height: 200px;
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
  color: white;
`;

const Nav = () => {
  return (
    <Wrapper>
      {pathData.map((i) => (
        <Link to={i.path}>
          <LinkBox img={i.img}>{i.name}</LinkBox>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Nav;
