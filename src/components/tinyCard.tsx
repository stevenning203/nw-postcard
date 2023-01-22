import React, { useEffect } from 'react'
import classNames from 'classnames';
import lzString from "lz-string";
import {useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

import { CD, PostcardWrap, Form, PostCardTitle, GridWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, PrintDate, Flowers } from './tinyCardElements'

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
        canvasRef.current.loadSaveData(lzString.decompressFromUTF16(props.image), false);
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

