import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    background: rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    flex-direction: column;
    color: white;
    width: 50px;

    height: 100vh;
`;

const LinkBox = styled.div`
    background: teal;
    padding: 10px;
    width: 100px;
    margin: 5px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
`;

const Nav = () => {
    return (
        <Wrapper>
            <Link to={"/"}>
                <LinkBox>Library</LinkBox>
            </Link>
            <Link to={"/a"}>
                <LinkBox>a</LinkBox>
            </Link>
            <Link to={"/b"}>
                <LinkBox>b</LinkBox>
            </Link>
            <Link to={"/c"}>
                <LinkBox>c</LinkBox>
            </Link>
        </Wrapper>
    );
};

export default Nav;
