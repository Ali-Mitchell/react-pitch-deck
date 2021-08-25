import React from 'react';
import "./Team.css";
// import background from './neon-wave2.jpg';

function Team() {

    return (
       <article className="team">
           <h1>Meet our Team</h1>
           <div className="container row">
        
                <div className="team-card col-3">
                        <img alt="" src="https://avatars.githubusercontent.com/u/77705260?v=4"/>
                        <h1>Name</h1>
                        <a href="https://github.com/yana-mkr">View Github...</a>
                </div>
                <div className="team-card col-3">
                        <img alt="" src="https://avatars.githubusercontent.com/u/78945554?v=4"/>
                        <h1>Name</h1>
                        <a href="https://github.com/ds1242">View Github...</a>
                </div>
                <div className="team-card col-3">
                        <img alt="" src="https://avatars.githubusercontent.com/u/79877350?v=4"/>
                        <h1>Name</h1>
                        <a href="https://github.com/Ali-Mitchell">View Github...</a>
                </div>
                <div className="team-card col-3">
                        <img alt="" src="https://avatars.githubusercontent.com/u/80012050?v=4"/>
                        <h1>Name</h1>
                        <a href="https://github.com/CastroOlympias">View Github...</a>
                </div>

           </div>
       </article>
    );
}

export default Team;