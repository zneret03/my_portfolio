import React from 'react';

const Navbar = () =>
{
    //<a href="#home" class="navbar-brand nav-link-color font-weight-bold ml-5 brand-logo"> Drilon</a>
    return (
        <nav class="mb-1 navbar navbar-expand-lg p-3">
        
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#NavbarContent"
            aria-controls="navbar" aria-expanded="false" arial-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="NavbarContent">
                <ul class="navbar-nav nav">
                    <li class="nav-item">
                        <a href="#about_me" class="nav-link nav-link-color mr-5">ABOUT ME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link nav-link-color mr-5">SKILLS</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a href="#my_work" class="nav-link nav-link-color mr-5">MY WORK</a>
                    </li>
                    <div class="line"></div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  