import React from "react";

type Video = {
    src: string;
};

const Video = ({src}: Video) => {

    return (
        <>
        <div className="">
            <iframe width="700" height="400" src="https://www.youtube-nocookie.com/embed/hEdzv7D4CbQ?si=geoPhnt76Pg7cu2e" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        </>
    )

}

export default Video;