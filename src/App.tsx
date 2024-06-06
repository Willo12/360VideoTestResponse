import Video from "./360video";
import "./App.css";

let PCSizeH = "1080";
let PCSizeW = "1920";

function App() {
  return (
    <body>
      <Video
        src="https://www.youtube.com/watch?v=hEdzv7D4CbQ"
        Height={PCSizeH}
        Width={PCSizeW}
      />
    </body>
  );
}

export default App;
