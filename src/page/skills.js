import React from 'react';


class Skills extends React.Component
{
    render()
    {
        return(
            <div className="skills" id="skills">
                <h1 className="about font-weight-bold skills wow fadeInLeft">MY SKILLS</h1>
                <div className="name-tag-line wow fadeInLeft"></div>
                <div className="container">
                    <br/>
                    <div className="row">
                        <div className="col-lg-3 wow fadeInLeft">
                                <div className="circle-wrap">
                                    <div className="circle">
                                        <div className="mask full">
                                            <div className="fill-Html"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill-Html"></div>
                                        </div>
                                        <div className="inside-circle"> 80%</div>
                                        <h5 className="label"><span className="badge badge-danger">HTML</span></h5>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-3 wow fadeInLeft">
                                <div className="circle-wrap">
                                    <div className="circle">
                                        <div className="mask full">
                                            <div className="fill-CSS"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill-CSS"></div>
                                        </div>
                                        <div className="inside-circle">  80%</div>
                                        <h5 className="label"><span className="badge badge-warning text-white">CSS</span></h5>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-3 wow fadeInRight">
                                <div className="circle-wrap">
                                    <div className="circle">
                                        <div className="mask full">
                                            <div className="fill-React"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill-React"></div>
                                        </div>
                                        <div className="inside-circle"> 70%</div>
                                        <h5 className="label"><span className="badge badge-primary">REACT</span></h5>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-3 wow fadeInRight">
                                <div className="circle-wrap">
                                    <div className="circle">
                                        <div className="mask full">
                                            <div className="fill-Nodejs"></div>
                                        </div>
                                        <div className="mask half">
                                            <div className="fill-Nodejs"></div>
                                        </div>
                                        <div className="inside-circle"> 70%</div>
                                        <h5 className="label"><span className="badge badge-success text-white">NODE</span></h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Skills;