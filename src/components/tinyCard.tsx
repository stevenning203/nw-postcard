import { CD, PostcardWrap, Form, PostCardTitle, GridWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, Flowers } from './tinyCardElements'
import React, { useEffect } from 'react'
import classNames from 'classnames';
import {useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

const TinyCard = (props: {content:string, from:string, to:string, index:number, image:string }) => {
    const [brushColor, setBrushColor] = useState("black");  
    const canvasRef = useRef<CanvasDraw>(null);

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
        className: classNames("canvas", "scale-50"),
        brushColor,
        ref: canvasRef,
        catenaryColor: brushColor,
        canvasWidth: 150,
        canvasHeight: 200,
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
                        </FromToWrap>
                    </GridWrap>
                </Form>
            </PostcardWrap>
        </>
    )
}

export default TinyCard

