import  React from 'react';
import Image from "/Users/macowner/Documents/react-workspace/portfolio2021/src/images/binod.png"
import './avatar.module.css'





function Avatar() {
    return (
    <div>
        <img className="my-image" src={Image} alt="binod"  />
        <h1>Binod Shrestha</h1>
    </div>

    );
}
export default  Avatar;