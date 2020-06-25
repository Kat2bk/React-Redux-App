import React, { useEffect } from "react";
import {connect} from "react-redux";
import {getInfo} from "./actions";

const SunFacts = ({}) => {
    useEffect(() => {
        getInfo();
    }, [getInfo]);

    if (isFetching) {
        return <h1>LOADING</h1>;
    }


    return (
        <div className="sun-facts">
            <button></button>
            <p className="info"></p>
            <p className="info"></p>
        </div>
    )
}


export default connect(mapStateToProps, {getInfo})(SunFacts);