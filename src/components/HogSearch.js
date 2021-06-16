import React from 'react';



class HogSearch extends React.Component{


    render(){
        return(
            <div>
                <button onClick={this.props.filterHogs}> Filter Greased </button>
                <button onClick={this.props.sortHogsByName}> Sort By Name </button>
                <button onClick={this.props.sortByWeight}> Sort By Weight </button>
                <button onClick={this.props.showAll}> Show All (THEM PIGGIES) BRING THAT BACON HOME </button>
            </div>
        )
    }
}

export default HogSearch;