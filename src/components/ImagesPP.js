import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ImagesPP(props) {

    let [numOfSee, setNumOfSee] = useState(0);
    let [numOfLike, setNumOfLike] = useState(0);

    const totalNumOfLike = () => {
        setNumOfSee(numOfSee + 1)
    }

    useEffect(() => {
        console.log("Hello");
    })

    const takingLike = () => {
        setNumOfLike(numOfLike + 1)
        props.likes();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgPath} onClick={totalNumOfLike} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>See: {numOfSee}</p>
                        <p>Like: {numOfLike}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={takingLike}>Like!</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ImagesPP;