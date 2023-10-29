import { useRecoilState } from "recoil";
import { textState } from ".";
import "./App.css";

function App() {
  const [text, setText] = useRecoilState(textState);
  return (
    <section>
      <span>{text}</span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </section>
  );
}

export default App;
