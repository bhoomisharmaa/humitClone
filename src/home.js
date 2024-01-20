import Header from "./Header/header.js";
import Avatar from "./AvatarInfo/avatar-info.js";
import Artist from "./TopArtist/artist.js";
import Station from "./FollowingStations/station.js";
import Hums from "./Hums/hums.js";
function Home() {
  return (
    <>
      <Header />
      <Avatar />
      <Artist />
      <Station />
      <Hums />
    </>
  );
}

export default Home;
