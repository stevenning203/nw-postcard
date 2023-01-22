import React from 'react'
import { CD, PostcardWrap, Form, PostCardTitle, GridWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, PrintDate, Flowers } from './bigPostcardElements'
import CanvasDraw from "react-canvas-draw";
import { useRef, useEffect } from 'react';

const BigPostcard = (props: { content: string, from: string, to: string, image: string }) => {
    const canvasRef = useRef<CanvasDraw>(null);

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
                                <CanvasDraw canvasWidth={150} canvasHeight={200} ref={canvasRef} />
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

