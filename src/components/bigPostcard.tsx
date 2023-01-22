import React from 'react'
import {PostcardWrap, Form, PostCardTitle, GridWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, Flowers } from './bigPostcardElements'
import CanvasDraw from "react-canvas-draw";
import { useRef, useEffect, useState } from 'react';
import lzString from "lz-string";
import classNames from 'classnames';

const BigPostcard = (props: { content: string, from: string, to: string, image: string, sticker:string }) => {
    const [brushColor, setBrushColor] = useState("black");  
    const canvasRef = useRef<CanvasDraw>(null);
    const imgsrc = "/" + props.sticker;
    console.log(imgsrc)

    const canvasProps = {
        className: classNames("canvas", "scale-[50%]", "ml-[0%]", "mt-[-40%]"),
        brushColor,
        ref: canvasRef,
        catenaryColor: brushColor,
        canvasWidth: 350,
        canvasHeight: 420,
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
                    
                        {props.sticker && <img className='w-16 h-16 mt-[-20%]' src={imgsrc} alt="tiny sticker" />}
                            <Message>{props.content}</Message>
                            <img className='scale-90 mb-[-1%]' src="/flowers.png" />
                        </MessageWrap>
                        <Divider />
                        <FromToWrap>
                                <Stamp>
                                <CanvasDraw  {...canvasProps}/>
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

export default BigPostcard

