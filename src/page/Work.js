import React from 'react';

class Work extends React.Component
{
    render()
    {
        return(
            <div className="work" id="work">
                <h1 className="about font-weight-bold wow fadeInRight">MY WORK</h1>
                <div className="name-tag-line wow fadeInRight"></div>
                <div className="container mrg">
                    <div className="flex-image wow fadeInUp" alt="first column image">
                        <div className="flex">
                        <img className="img" src={require('../components/image/1-min.jpg')} alt="Img 1"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="img" src={require('../components/image/2-min.jpg')} alt="Img 2"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="img" src={require('../components/image/3-min.jpg')} alt="Img 3"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-image wow fadeInUp" alt="second column image">
                        <div className="flex">
                        <img className="img" src={require('../components/image/4-min.jpg')} alt="Img 4"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="img" src={require('../components/image/5-min.jpg')} alt="Img 5"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="img" src={require('../components/image/6-min.jpg')} alt="Img 6"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-image wow fadeInUp" alt="third column image">
                        <div className="flex">
                        <img className="img" src={require('../components/image/7-min.jpg')} alt="Img 7"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="img" src={require('../components/image/8-min.jpg')} alt="Img 8"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="img" src={require('../components/image/9-min.jpg')} alt="Img 9"/>
                        <div className="overlay">
                            <div className="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" className="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
export default Work;