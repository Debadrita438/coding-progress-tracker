import React from "react";

import Courses from "../components/Courses";

function Homepage() {
    return (
        <div className="container">
            <div className="container--heading">
                <div className="container--heading--Cname">
                    <h1>Coding Interview Progress Tracker</h1>
                </div>
            </div>
            <Courses />
        </div>
    );
}

export default Homepage;
