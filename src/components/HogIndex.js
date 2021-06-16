import React from 'react';
import HogTile from './HogTile'

// import hog-imgs from 


class HogIndex extends React.Component{


    render(){
        return(
            <div className="ui grid container">
                {this.props.hogs.map(hog => 
                    <HogTile
                    key={hog.id}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    highestMedalAchieved={hog["highest medal achieved"]}
                    />)}
            </div>
        )
    }
}

export default HogIndex;