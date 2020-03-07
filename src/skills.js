import React from 'react';

    const Skills = () =>
    {
        return(
            <div class="skills" id="skills">
                <h1 class="about font-weight-bold skills wow fadeInLeft">MY SKILLS</h1>
                <div class="name-tag-line wow fadeInLeft"></div>
                <div class="container">
                    <br/>
                    <div class="row">
                        <div class="col-lg-3 wow fadeInLeft">
                                <div class="circle-wrap">
                                    <div class="circle">
                                        <div class="mask full">
                                            <div class="fill-Html"></div>
                                        </div>
                                        <div class="mask half">
                                            <div class="fill-Html"></div>
                                        </div>
                                        <div class="inside-circle"> 80%</div>
                                        <h5 class="label"><span class="badge badge-danger">HTML</span></h5>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 wow fadeInLeft">
                                <div class="circle-wrap">
                                    <div class="circle">
                                        <div class="mask full">
                                            <div class="fill-CSS"></div>
                                        </div>
                                        <div class="mask half">
                                            <div class="fill-CSS"></div>
                                        </div>
                                        <div class="inside-circle">  80%</div>
                                        <h5 class="label"><span class="badge badge-warning text-white">CSS</span></h5>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 wow fadeInRight">
                                <div class="circle-wrap">
                                    <div class="circle">
                                        <div class="mask full">
                                            <div class="fill-React"></div>
                                        </div>
                                        <div class="mask half">
                                            <div class="fill-React"></div>
                                        </div>
                                        <div class="inside-circle"> 70%</div>
                                        <h5 class="label"><span class="badge badge-primary">REACT</span></h5>
                                    </div>
                                </div>
                        </div>
                        <div class="col-lg-3 wow fadeInRight">
                                <div class="circle-wrap">
                                    <div class="circle">
                                        <div class="mask full">
                                            <div class="fill-Nodejs"></div>
                                        </div>
                                        <div class="mask half">
                                            <div class="fill-Nodejs"></div>
                                        </div>
                                        <div class="inside-circle"> 70%</div>
                                        <h5 class="label"><span class="badge badge-success text-white">NODE</span></h5>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Skills;