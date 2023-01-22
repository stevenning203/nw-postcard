import { CD, Container, PostcardWrap, Form, PostCardTitle, ComponentsWrap, GridWrap, ImgWrap, Stamp, PostageOverlay, MessageWrap, Message, Divider, FromToWrap, From, To, PrintDate, Flowers, UndoIcon, SearchIcon, LeftArrowIcon, AddIcon, ProfileIcon, ExportIcon, CIcon } from './postcardElements'
import { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from 'classnames';
import React from 'react';

function NavbarElement(props: { className?: string, children: React.ReactNode, href: string }) {
  return (
    <a href={props.href}>
      <div className={props.className + " flex flex-row content-center p-5"}>
        <div>{props.children}</div>
      </div>
    </a>
  )
}

function NavbarColour(props: { className?: string }) {
  return (
    <div className={"items-center flex flex-row content-center p-5"}>
      <CIcon style={{ color: props.className }} />
    </div>
  )
}

const Postcard = () => {

  const defaultProps = {
    loadTimeOffset: 5,
    lazyRadius: 0,
    brushRadius: 3,
    catenaryColor: "#0a0302",
    hideGrid: true,
    canvasWidth: 150,
    canvasHeight: 200,
  };

  const colors = [
    "white",
    "grey",
    "black",
    "red",
    "yellow",
    "green",
    "blue"
  ];

  const [brushColor, setBrushColor] = useState("black");
  const canvasRef = React.createRef();


  const props = {
    ...defaultProps,
    className: classNames("canvas"),
    brushColor,
    ref: canvasRef,
    catenaryColor: brushColor,
  };




  return (
    <>
      <nav className='bg-[#EBE3D7] items-center flex'>
        <NavbarElement className='items-center' href='/'>
          <LeftArrowIcon />
        </NavbarElement>

        <div className='flex flex-center items-center justify-center grow'>
          <NavbarElement className='items-center' href='/'>
            <SearchIcon />
          </NavbarElement>

          <NavbarColour className='white' />
          <NavbarColour className='grey' />
          <NavbarColour className='black' />
          <NavbarColour className='red' />
          <NavbarColour className='yellow' />
          <NavbarColour className='green' />
          <NavbarColour className='blue' />

          <UndoIcon onClick={() => {
            canvasRef.current.undo();
          }} />

          <NavbarElement className='items-center' href='/'>
            <AddIcon />
          </NavbarElement>
          <NavbarElement className='items-center' href='/'>
            <ProfileIcon />
          </NavbarElement>
        </div>

        <div className='ml-auto pr-5'><form onSubmit={() => { }}><button type='submit'>
          <ExportIcon />
        </button></form></div>
      </nav >

      <Container>
        <PostcardWrap>
          <PostCardTitle>POSTCARD</PostCardTitle>
          <Form>
            <ComponentsWrap>
              <GridWrap>
                <MessageWrap>
                  <Message
                    required
                    label="Required"
                    defaultValue="Insert your own special message here!"
                    multiline
                    maxRows={4}
                    variant="standard"

                    inputProps={{
                      style: {
                        fontSize: 40,
                        lineHeight: 2,
                        fontFamily: "Homemade Apple",
                      }
                    }}
                  />

                  <Flowers />
                </MessageWrap>
                <Divider />
                <FromToWrap>
                  <ImgWrap>
                    <Stamp>
                      <CD {...props} />
                    </Stamp>
                    {/* <PostageOverlay /> */}
                  </ImgWrap>
                  <From
                    required
                    label="Required"
                    defaultValue="From: sender"
                    multiline
                    maxRows={2}
                    variant="standard"

                    inputProps={{
                      style: {
                        fontSize: 30,
                        lineHeight: 2,
                        letterSpacing: 2,
                        fontFamily: 'Roboto Slab',
                      }
                    }}
                  />
                  <To
                    required
                    label="Required"
                    defaultValue="To: Recipient"
                    multiline
                    maxRows={2}
                    variant="standard"

                    inputProps={{
                      style: {
                        fontSize: 30,
                        lineHeight: 2,
                        letterSpacing: 2,
                        fontFamily: "Roboto Slab",
                      }
                    }}
                  />
                  <PrintDate>{(new Date().getMonth()) + '/' + (new Date().getDay()) + '/' + (new Date().getFullYear())}</PrintDate>
                </FromToWrap>
              </GridWrap>
            </ComponentsWrap>
          </Form>
        </PostcardWrap>
      </Container>
    </>
  )
}

export default Postcard