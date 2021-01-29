import React from 'react';

function Cards(props){
    return(
        <>
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt="series-img" className='card_img'/>
                <div className='card_details'>
                    <h2 className='card_title'>{props.sname}</h2>
                    <a href={props.link} target='_blank'>
                        <button id="btn"> Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Cards;