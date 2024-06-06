type VideoProps = {
  src: string;
  Width: string;
  Height: string;
};

const Video = ({ src, Width, Height }: VideoProps) => {
  return (
    <>
      <div className="flex mt-2 justify-center items-center">
        <div className="shadow-md flex justify-center">
          <iframe
            width={Width}
            height={Height}
            src="https://www.youtube-nocookie.com/embed/vQAarFVnya4?si=v3Utut9BTg1gTpVC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
