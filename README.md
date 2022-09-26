# AmbientPlayer

### Concept1
- 선화를 이용한 PNG 파일을 이용해 ThemeToggle 기능 사용.

1. 호그와트 느낌나는 중세 벽돌 도서관.

```tsx
import {useRecoilState} from "recoil";
import {isOnAtom} from "./atom";

const Lantern = styled.div<{isOn: boolean}>`
    filter: ${(props)=>props.isOn ? saturate(3) : null};
`

const LanternComponent = () => {
    const [isOn, setIsOn] = useRecoilState(isOnAtom);
    return <Lantern toggle={isOn} onClick={toggleHandler} />;
}
```

  

Lantern의 ToggleBtn은 onClick일때 콜백함수로 toggleHandler가 사용됨.
toggleHandler은 아래의 특징을 가짐.

```tsx
const toggleHandler = () => {
// setIsOn((prev) => !prev);
// soundPlayer() // audio tag는 Promise함수임을 인지하고, 여러 Ambient를 사용할 경우 핸들링 레이턴시 최소화. 경우에 따라 Promise.all()사용.
}

```
ToggleBtn은 단순히 <Button />으로 구현하는 것이 아니라,
label을 이용한 커스텀 Component를 사용하거나 Img || PNG 파일을 이용해 조금 더 직관적이게 커스텀.

- Components 별로 여러가지 Ambient제공.
- Data 크롤링은 유튜브, freeSound

ThemeToggle ? <Working/> : <Pause/>