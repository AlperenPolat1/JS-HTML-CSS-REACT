import profilePic from './assets/alperen.jpg';

function Card() {
  return (
    <div className="card">
     <img className="card-image" src={profilePic} alt="profile picture"></img> 
     <h2 className="card-title">Alperen</h2>
     <p className="card-description">Computer Engineer</p>
    </div>
  );
}
export default Card;