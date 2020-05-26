import React from 'react';

const workImages = (props) =>{
    return(
        <div className="flex">
            <img className="img" src={require(`../components/image/${props.image}`)} alt="Img 1"/>
            <div className="overlay">
                <div className="text">
                    <h5 className="text-white">{props.projects}</h5>
                    <br/>
                    <a href={props.link} className="work-btn text-white">Learn more</a>
                </div>
            </div>
        </div>
    );
}

export default workImages;