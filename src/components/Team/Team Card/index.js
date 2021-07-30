import React from 'react';
import './team-card.css';

function TeamCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        Occupation: {props.occupation}
                    </li>
                </ul>
            </div>
        </div>
};
}


export default TeamCard;



