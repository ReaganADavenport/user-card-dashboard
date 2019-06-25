import React from 'react';

const cardStyle = {
    background: 'linear-gradient(to bottom, #384350, #384350 45%, white 45%)',
    border: 'solid 1px rebeccapurple',
    height: '330px',
    // padding:'10px',
    margin: '10px',
    width: '217px',
}

const imageStyle = {
    border: 'solid 4px snow',
    borderRadius: '15%',
    margin: '15px'
}


const Card = props => {
    const {user} = props;
    console.log("user is", user)
    return (
        <div className="card" style={cardStyle}>
            <img src={user.picture.large} alt={`${user.name.first} headshot`} style={imageStyle}></img>
            <div className="textBlock">
                <p>{user.name.first} {user.name.last}</p>
                <p>{user.phone}</p>
                <p>{user.location.street}</p>
                <p>{user.location.city} {user.location.state} {user.nat}</p>
            </div>
            
        </div>
    )
}

export default Card;