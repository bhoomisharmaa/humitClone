import "./station.css";

function Station() {
  const stations = [
    { name: "#5char", image: "./station-image/Rectangle 11.png" },
    { name: "#acidic", image: "./station-image/Rectangle 11 (1).png" },
    {
      name: "#AltRock",
      image: "./station-image/Rectangle 11 (2).png",
    },
    {
      name: "#Best_Soundtracks",
      image: "./station-image/Rectangle 11 (3).png",
    },
    {
      name: "#DontTrip",
      image: "./station-image/Rectangle 11 (4).png",
    },
    {
      name: "#DISBANDED",
      image: "./station-image/Rectangle 11 (5).png",
    },
  ];

  return (
    <div className="following-stations">
      <p className="heading">📻 following stations</p>
      <div className="station-list">
        {stations.map((station) => (
          <button className="station-button">
            <img src={station.image} />
            {station.name}
          </button>
        ))}
        <button className="station-button view-all-btn">view all{" >"}</button>
      </div>
    </div>
  );
}

export default Station;
