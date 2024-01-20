import React from "react";
import "./artist.css";

function Artist() {
  const artists = [
    { name: "Fang Suave", image: "./top-artist/Ellipse64.png" },
    { name: "Radiohead", image: "./top-artist/Ellipse64(1).png" },
    { name: "FKJ", image: "./top-artist/Ellipse64(2).png" },
    { name: "Gojira", image: "./top-artist/Ellipse64(3).png" },
    {
      name: "The Replacements",
      image: "./top-artist/Ellipse64(4).png",
    },
    { name: "TOOL", image: "./top-artist/Ellipse64(5).png" },
    {
      name: "Peter Cat Recording Co",
      image: "./top-artist/Ellipse64(6).png",
    },
    { name: "Audioslave", image: "./top-artist/Ellipse64(7).png" },
    { name: "Tame Impala", image: "./top-artist/Ellipse64(8).png" },
    {
      name: "God Is An Astronaut",
      image: "./top-artist/Ellipse64(9).png",
    },
  ];

  return (
    <div className="top-artists">
      <p className="heading">🎙️ top artists</p>
      <div className="artist-list">
        {artists.map((artist, index) => (
          <button className="artist-button" key={index}>
            <img src={artist.image} className="image-artist" />
            {artist.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Artist;
