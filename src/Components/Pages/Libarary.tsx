import SoundComponent from "../SoundComponent";
import testSFX from "../../assets/AmbientSound/test.mp3";
import LibrarySFX from "../../assets/AmbientSound/Library1.mp3";

const Library = () => {
  return <SoundComponent sound={testSFX} />;
};

export default Library;
