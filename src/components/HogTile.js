import React from 'react';
// let pigExample = require('../hog-imgs/piggy_smalls.jpg')

class HogTile extends React.Component{


    state={
        isFlipped: false,
        showHog: true
    }

    // you need a method that modifies the name of the pig lowercase, and replaces spaces with '_' 
    // require(`../hog-imgs/${formattedName}.jpg` and return this <<<<

   getPigImage = name =>{
    //learn this nonesense israel MAHLARKEY
       let theNewPigName = name.toLowerCase().split(' ').join('_')
       let link = require(`../hog-imgs/${theNewPigName}.jpg`)
    //    console.log(link)
       return link
   }

   

    detailHandler = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        }, ()=> console.log(this.state.isFlipped))
    }

    render(){
        return(
            <div className="ui eight wide columm" >
                
                <div >
                    <div>
                        <h2> {this.props.name}</h2>
                        <div onClick={()=>this.detailHandler()}>
                            <img src={this.getPigImage(this.props.name)} alt=''/>
                        </div>
                    </div>
                    {this.state.isFlipped ? <div>
                        <h3> Specialty: {this.props.specialty}</h3>
                        <h3> Weight: {this.props.weight}</h3>
                        <h3> Greased: {this.props.greased ? 'Greased': 'Not Greased'}</h3>
                        <h4>Highest Medal Achieved: {this.props.highestMedalAchieved}</h4>
                    </div> : null}
                    
                    <br/>
                </div>
            </div>
        )
    }
}

export default HogTile;