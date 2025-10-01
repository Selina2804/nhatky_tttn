import React, { useState } from 'react';
import "./style.css";

ColorBox.propTypes = { 
};
function getRandomColor(){
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
        // Dùng để thực hiện random 5 màu trên
    const randomIndex = Math.trunc(Math.random() * 5); 
    return COLOR_LIST[randomIndex];
}
function ColorBox() {
    
    const [color,setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';
        console.log(initColor);
        return initColor;
    });
    function handleBoxClick(){
        // cho một cái màu ngẫu nhiên --> set color
            const newColor = getRandomColor();
            setColor(newColor);
            localStorage.setItem('box_color',newColor);
    }
    return (
        <div 
        className='color-box' 
        style={{backgroundColor:color}}
        onClick={handleBoxClick}> 
        </div>
    );
}
export default ColorBox;