import React from 'react'
import'./Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {
  return (
    <div className='sidebar'>
         <div className="top">
            <img className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon}  alt=""/>
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" srcset="" />
                    <p>What is React ...</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon}alt="" srcset="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon}alt="" srcset="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon}alt="" srcset="" />
                <p>Settings</p>
            </div>
        </div>
    </div>

)
// console.log(assets.menu_icon); // Check if this outputs the correct path
}

export default Sidebar