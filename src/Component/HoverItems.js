import React from 'react'

const HoverItems = () => {
    return (
        <div className="hoverItems page-content-wrapper pt-5 pb-5">
        <div className="container">
            <div className="row"> 
                <div className="col-3">
                <img src="/images/enroll.png" />
                <h3> ENROLL </h3>
                    <p> Register yourself to be the greatest change-maker who contributes towards social responsibility. </p>

                </div>
                <div className="col-3">
                    <img src="/images/evaluate.png"/>
                    <h3> EVALUATE </h3>
                   <p> Think of the current issues that are blockers to the objectives and hurdles to the overall developmen </p> 
                </div>
                <div className="col-3">
                    <img src="/images/engage.png"/>
                    <h3> ENGAGE </h3>
                       <p> Youth is the best solution for the problems. Engage yourself to think through it and eliminate the hurdles assessed. </p> 
                </div>
                <div className="col-3">
                    <img src="/images/elevate.png"/>
                    <h3> ELEVATE </h3>
                       <p> When you are into it, know how to act and handle it. Just feel the drive, be a touchstone to drive others! </p> 
                </div>
            </div>
        </div>
        </div>
    )
}

export default HoverItems
