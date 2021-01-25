import React from 'react';
import './Profile.css';
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaRegHandPointer } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


const Profile = () => {
    return (
        <div className='profile'>
            <a>
                <img className='profile__pic' src='https://image.flaticon.com/icons/png/512/64/64495.png' alt='Profile Pic' />
            </a>
               
            <h2>Shan Tirmizi</h2>
            <div className="profile__contact">
                <a href="https://github.com/ShanTirmizi" target="_blank">
                    <FaGithub className="profile__contact__icon"/>
                </a>
                <a href="https://www.linkedin.com/in/shan-tirmizi-7b3114159/" target="_blank">
                    <GrLinkedin className="profile__contact__icon" />
                </a>
                <button>Contact me <FaRegHandPointer id='mouse___pointer' /></button>
            </div>
            <div className="profile__bio">
                <h2>Bio</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat rerum consectetur, deserunt iusto sit voluptatem, tempora aliquam quasi eligendi libero repellat corrupti nihil cum. In amet expedita illum earum incidunt. Debitis, in hic. Natus sint aliquid debitis exercitationem perferendis maiores id culpa aperiam, incidunt fugiat, ut placeat</p>
            </div>
            <div className="profile__skills">
                <h2>Technologies</h2>
                <div className="profile__skills__icons">
                    <div>
                        <p>React</p>
                        <FaReact />
                    </div>
                    <div>
                        <p>React</p>
                        <FaReact />
                    </div>
                    <div>
                        <p>React</p>
                        <FaReact />
                    </div>
                    <div>
                        <p>React</p>
                        <FaReact />
                    </div>
                    <div>
                        <p>React</p>
                        <FaReact />
                    </div>
                    <div>
                        <p>React</p>
                        <FaReact />
                    </div>
                </div>
            </div>
        </div>
    )

    
}

export default Profile
