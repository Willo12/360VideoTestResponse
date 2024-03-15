type VideoProps = {
  src: string;
};

const Video = ({ src }: VideoProps) => {
  return (
    <>
      <div className="flex mt-2 justify-center items-center">
        <div className="shadow-md">
          <iframe
            className="w-[330px] h-[450px]  lg:w-[720px] lg:h-[400px] 2xl:w-[1280px] 2xl:h-[720px] "
            src="https://www.youtube-nocookie.com/embed/hEdzv7D4CbQ?si=geoPhnt76Pg7cu2e"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
