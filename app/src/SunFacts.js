import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getInfo} from "./actions";

// const SunFacts = (props) => {
//     useEffect(() => {
//         getInfo();
//     }, []);

function Pokemon(props) {
    // if (isFetching) {
    //     return <h1>LOADING</h1>;
    // }


    return (
        <div className="pokemon">
            <p className="info">{props.info}</p>
        </div>
    )
}

export default Pokemon;