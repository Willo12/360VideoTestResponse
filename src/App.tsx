import Video from "./360video";
import "./App.css";
import Info from "./information";

function App() {
  return (
    <body>
      <h1 className=" h-16 flex justify-center items-center text-3xl drop-shadow-md bg-gray-900 text-white">
        360 video demonstration
      </h1>
      <Video src="https://www.youtube.com/watch?v=hEdzv7D4CbQ" />
      <hr className="mt-10" />
      <Info
        title="The purpose of this site"
        explanation="This site demonstrates how 360 video can be easily implemented in a website"
        madeWith="This version uses the YouTube API"
      />
    </body>
  );
}

export default App;
