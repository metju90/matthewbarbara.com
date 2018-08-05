import React from 'react';
import Image from '../../images/photo.jpeg'
export default () => {
    return (
      <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img className="profile-img" src={Image} alt="Matthew Barbara" />
            {/* <img class="profile-img" src="http://chuckgroom.com/onepage-bio/img/profile.png" alt="Matthew Barbara"> */}
            <div className="intro-text">
              <span className="name">Matthew Barbara</span>
              <hr />
              <span className="skills">Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
};