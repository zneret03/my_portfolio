import React from 'react';
import Img from '../components/workImages';

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
                    <Img image={'github-pages.png'} link={'https://gitprofilee.netlify.app'} projects={'ReactJs/tailwind'}/>
                    <Img image={'BCIF.png'} link={'https://bcif.netlify.app'} projects={'ReactJs/NodeJs'}/>
                    <Img image={'3-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                </div>
                <div className="flex-image wow fadeInUp" alt="second column image">
                    <Img image={'4-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                    <Img image={'5-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                    <Img image={'6-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                </div>
                <div className="flex-image wow fadeInUp" alt="third column image">
                    <Img image={'7-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                    <Img image={'8-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                    <Img image={'9-min.jpg'} link={'https://www.facebook.com/ian.drilon.7'} projects={'ReactJs/NodeJs'}/>
                </div>
            </div>
        </div>
        );
    }
}
export default Work;