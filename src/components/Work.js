import React from 'react';

class Work extends React.Component
{
    render()
    {
        return(
            <div class="work" id="work">
                <h1 class="about font-weight-bold wow fadeInRight">MY WORK</h1>
                <div class="name-tag-line wow fadeInRight"></div>
                <div class="container mrg">
                     
                    <div class="flex-image wow fadeInUp" alt="first column image">
                        <div class="flex">
                        <img class="img" src={require('./image/1.jpg')} alt="Img 1"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="img" src={require('./image/2.jpg')} alt="Img 2"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>Js/PHP</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="img" src={require('./image/3.jpg')} alt="Img 3"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="flex-image wow fadeInUp" alt="second column image">
                        <div class="flex">
                        <img class="img" src={require('./image/4.jpg')} alt="Img 4"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="img" src={require('./image/5.jpg')} alt="Img 5"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="img" src={require('./image/6.jpg')} alt="Img 6"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex-image wow fadeInUp" alt="third column image">
                        <div class="flex">
                        <img class="img" src={require('./image/7.jpg')} alt="Img 7"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="img" src={require('./image/8.jpg')} alt="Img 8"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <img class="img" src={require('./image/9.jpg')} alt="Img 9"/>
                        <div class="overlay">
                            <div class="text">
                                <h5>ReactJs/NodeJs</h5>
                                <br/>
                                <button type="button" class="btn btn-danger">Learn more</button>
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