import React, { useEffect } from 'react'
import classNames from 'classnames';
import {useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

import { CD, PostcardWrap, Form, PostCardTitle, GridWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, PrintDate, Flowers } from './tinyCardElements'
const defaultProps = {
    loadTimeOffset: 5,
    lazyRadius: 0,
    brushRadius: 3,
    catenaryColor: "#0a0302",
    hideGrid: true,
    canvasWidth: 60,
    canvasHeight: 80,
};



const TinyCard = (props: {content:string, from:string, to:string, index:number, image:string }) => {
    const [brushColor, setBrushColor] = useState("black");  
    const canvasRef = useRef<CanvasDraw>(null);

    const ref = React.useRef(null);
    const colors = [
        "white",
        "grey",
        "black",
        "red",
        "yellow",
        "green",
        "blue"
    ];

    const canvasProps = {
        ...defaultProps,
        className: classNames("canvas"),
        brushColor,
        ref: canvasRef,
        catenaryColor: brushColor,
        img: props.image,
    };

    useEffect(() => {
        canvasRef.current.loadSaveData(props.image, false);
    })

    return (
        <>
            <PostcardWrap>
                <PostCardTitle>POSTCARD</PostCardTitle>
                <Form>
                    <GridWrap>
                        <MessageWrap>
                            <Message>{props.content}</Message>
                            <Flowers />
                        </MessageWrap>
                        <Divider />
                        <FromToWrap>
                                <Stamp>
                                <CanvasDraw {...canvasProps} />
                                </Stamp>
                            <From
                                defaultValue={props.from}
                                disabled
                            />
                            <To
                            defaultValue={props.to}
                            disabled
                            />
                            <PrintDate>{(new Date().getMonth()) + '/' + (new Date().getDay()) + '/' + (new Date().getFullYear())}</PrintDate>
                        </FromToWrap>
                    </GridWrap>
                </Form>
            </PostcardWrap>
        </>
    )
}

export default TinyCard

