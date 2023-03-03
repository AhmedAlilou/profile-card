import './App.css';
import pfp from './image-victor.jpg'

function App() {
  return (
    <div className="App">
      <div className="card"> 
        <div className="upper-container">
          <img src={pfp} className="photo" />
        </div>
        <div className="text">
          <h3 className="name">Victor Crest</h3>
          <h3 className="age"> 26 </h3>
          <p className="location"> London </p>
        </div>
        <div className="lower-container">
          <hr className="line"/>
          <div>
            <b className="followersNum">80K </b>
            <b className="likesNum">803K</b>
            <b className="photosNum">1.4K</b>
          </div>
          <div>
            <h6 className="followers"> Followers </h6>
            <h6 className="likes">Likes</h6>
            <h6 className="photos">Photos</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
