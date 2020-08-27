import React from "react";
import { getInfo } from "./actions";
import {connect} from "react-redux";
import "./index.css";

function Pokemon(props) {
    console.log("props from Pokemon.js", props);
    const getdata = event => {
        event.preventDefault();
        props.getInfo();
    }

    const Pokemon = props.info;
    console.log("props from const Pokemon", Pokemon);

    // function getPokemon(cards){
    //     for(i = 0; i < cards.length; i++) {
    //     return cards.name
    // }

// <p className="info">{Object.entries((props.info.cards) {   
            // })}
            // </p>

    let pokemon;

    return (
        <div className="pokemon-container">
        <button onClick={getdata}>Catch 'em</button>
        {props.isFetching && (
            <h3>We're searching...</h3> )} 
           {props.fetched && (<div className="info">{[(props.info.cards)].map((item, index) => {
             return item.map(items => (
                 <div className="pokemon">
                <p>Name: {items.name}</p>
                </div>
            ))
             })
           })
          </div>
           )
        }
        </div>
    )
    }

const mapStateToProps = state => {
    console.log("state from props", state.info)
    return {
        info: state.info,
        isFetching: state.isFetching,
        error: state.error,
        fetched: state.fetched
    }
}

export default connect(mapStateToProps, {getInfo})(Pokemon);