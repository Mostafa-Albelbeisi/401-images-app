import React, { useState } from 'react';
import ImagesPP from './ImagesPP';

function Parent() {

    let [totalNumOfLike, setTotalNumOfLike] = useState(0);

    const incrementNumOfImg = () => {
        setTotalNumOfLike(totalNumOfLike + 1)
    }
    return (
        <>
            <h1>Parent</h1>
            <h2>Total Num of Like : {totalNumOfLike}</h2>
            <ImagesPP
                id='1'
                imgPath="https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg"
                title="nature1"
                likes={incrementNumOfImg}
            />
            <ImagesPP
                id='2'
                imgPath="https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg"
                title="nature2"
                likes={incrementNumOfImg}
            />
            <ImagesPP
                id='3'
                imgPath="https://wallpapercave.com/wp/u9AVLry.jpg"
                title="nature3"
                likes={incrementNumOfImg}
            />
        </>
    )
}

export default Parent;