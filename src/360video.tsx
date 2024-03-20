type VideoProps = {
  src: string;
};

const Video = ({ src }: VideoProps) => {
  return (
    <>
      <div className="flex mt-2 justify-center items-center">
        <div className="shadow-md">
          <iframe
            className="w-[330px] h-[450px] lg:w-[720px] lg:h-[400px] 2xl:w-[1280px] 2xl:h-[720px]"
            src="https://www.youtube.com/embed/Hl2lZl-N98U?si=l3MkjKa2Mj1UqJhj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
