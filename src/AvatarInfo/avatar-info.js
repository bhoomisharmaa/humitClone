import "./avatar-info.css";

function Avatar() {
  return (
    <>
      <div className="user-info">
        <img src="./avatar-image/avatar.png" className="avatar" />
        <div className="info">
          <div className="name-button">
            <div className="name-user">
              <p className="name">Rohit Ganapathy</p>
              <p className="user-name">@rohitisnot</p>
            </div>
            <button className="follow-button">follow</button>
          </div>
          <div className="metrics">
            <p>
              <span className="metric-qt">448k</span>
              <span className="metric-type"> hums</span>
            </p>
            <p>
              <span className="metric-qt">1.2k</span>
              <span className="metric-type"> followers</span>
            </p>
            <p>
              <span className="metric-qt">448</span>
              <span className="metric-type"> following</span>
            </p>
          </div>
          <p className="bio">
            Max limit of the user bio is 240 characters. This is a placeholder
            text to test out how 240 characters look together. Do we need a
            'Read More' action here? Ideally, we shouldn't. Okay, I'm out of
            ideas for the text now. Imma head.
          </p>
        </div>
      </div>
    </>
  );
}

export default Avatar;
