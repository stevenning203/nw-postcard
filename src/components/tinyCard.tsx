import { PostcardWrap, Form, PostCardTitle, GridWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, Flowers } from './tinyCardElements'
import React, { useEffect } from 'react'
import classNames from 'classnames';
import lzString from "lz-string";
import {useRef, useState } from 'react'
import CanvasDraw from "react-canvas-draw";

const TinyCard = (props: {content:string, from:string, to:string, index:number, image:string, sticker:string }) => {
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
        className: classNames("canvas", "scale-[50%]", "ml-[10%]"),
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
                        {props.sticker && <img className='w-10 h-10 mt-[-22%]' src={props.sticker} alt="tiny stick" />}
                            <Message>{props.content}</Message>
                            <Flowers />
                        </MessageWrap>
                        <Divider />
                        <FromToWrap className='3xl'>
                                <CanvasDraw {...canvasProps} />
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

