import React from 'react';

const Navbar = () =>
{
    return (
        <nav class="mb-1 navbar navbar-expand-lg navbar-color p-3">
            <a href="#home" class="navbar-brand nav-link-color font-weight-bold"> Drilon</a>

            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#NavbarContent"
            aria-controls="navbar" aria-expanded="false" arial-label="Toggle Navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="NavbarContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#about_me" class="nav-link nav-link-color mr-3">About me</a>
                    </li>
                    <li class="nav-item">
                        <a href="#skills" class="nav-link nav-link-color mr-3">Skills</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a href="#my_work" class="nav-link nav-link-color mr-5">My work</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  