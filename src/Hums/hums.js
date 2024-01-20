import "./hums.css";

function Hum1() {
  const humsInfo = [
    {
      caption: "Here we are, @prithvi_san, caught in the amber of the moment.",
      image: "./hums-image/cover.png",
      title: "Lover Boy",
      artist: "Felly",
    },
    {
      caption: "Small Caption",
      image: "./hums-image/cover (1).png",
      title: "When You Die",
      artist: "Curren$y",
    },
    {
      caption: "Here we are, @prithvi_san, caught in the amber of the moment.",
      image: "./hums-image/cover (2).png",
      title: "Mine",
      artist: "EZA",
    },
    {
      caption: "Small Caption",
      image: "./hums-image/cover (3).png",
      title: "Wonderful Tonight",
      artist: "Ty Dollar Sign",
    },
    {
      caption: "Small Caption",
      image: "./hums-image/cover (4).png",
      title: "You & Me",
      artist: "Marlon Craft",
    },
    {
      caption: "Here we are, @prithvi_san, caught in the amber of the moment.",
      image: "./hums-image/cover (5).png",
      title: "Can I Call You Tonight?",
      artist: "TOBi",
    },
  ];

  const fireIcon = "./button-images/fire-icon.png";
  const playIcon = "./button-images/play-icon.png";
  const commentIcon = "./button-images/comment-icon.png";
  return (
    <div className="hums-section">
      <p className="heading">🎸 hums</p>
      <div className="hums-card">
        {humsInfo.map((hum, index) => (
          <div className="hum" key={index}>
            <div className="info-user">
              <img src="./hums-image/avatar.png" alt="User Avatar" />
              <div className="hum-user-info">
                <p className="user">rohitisnot</p>
                <div className="hum-info">
                  <span className="posted-in">posted in </span>
                  <span className="hash-tag"> #quarantunes</span>
                </div>
              </div>
              <button className="save-btn">
                <img
                  src="./hums-image/save.png"
                  height={"28px"}
                  width={"28px"}
                  alt="Save Icon"
                />
              </button>
            </div>
            <p className="caption">{hum.caption}</p>
            <div className="hum-details">
              <img
                src={hum.image}
                height={"248px"}
                width={"296px"}
                className="hum-image"
                alt="Hums Image"
              />
              <div className="overlay-gradient-text">
                <p className="song-title">{hum.title}</p>
                <p className="artist-name">{hum.artist}</p>
              </div>
              <div className="play-btn">{<ActionButton icon={playIcon} />}</div>
              <div className="fire-comment-btn">
                <div className="fire-btn">
                  {<ActionButton icon={fireIcon} />}
                  <p className="count-like">1.2K</p>
                </div>
                <div className="comment-btn">
                  {<ActionButton icon={commentIcon} />}
                  <p className="count-comment">11.8K</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ActionButton({ icon }) {
  return (
    <button className="action-btn">
      <img src={icon} className="btn-icon" />
    </button>
  );
}

export default Hum1;
