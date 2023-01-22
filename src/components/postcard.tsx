import { CD, Container, PostcardWrap, Form, PostCardTitle, GridWrap, ImgWrap, Stamp, MessageWrap, Message, Divider, FromToWrap, From, To, Flowers, UndoIcon, SearchIcon, LeftArrowIcon, AddIcon, ProfileIcon, ExportIcon, CPick } from './postcardElements'
import { useState } from "react";
import classNames from 'classnames';
import SubmitPostCard from '@/logic/submit';
import { useUser } from '@auth0/nextjs-auth0/client';
import Swal from 'sweetalert2';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import lzString from "lz-string";
function NavbarElement(props: { className?: string, children: React.ReactNode, href: string }) {
    return (
        <a href={props.href}>
            <div className={props.className + " flex flex-row content-center p-5 pl-6"}>
                <div>{props.children}</div>
            </div>
        </a>
    )
}


const Postcard = () => {
    const { user, error, isLoading } = useUser();

    /**
 * This function should:
 *   1. Send the post card as a image through email.
 *   2. Store the post card in localForage to be viewed in the gallery.
 * 
 *   This function should only be used if the user has signed in.
 * 
 * @param post_card the post card to submit
 */
    function SubmitPostCard(event: any, f: HTMLFormElement, imageData: string): void {


        if (isLoading) {
            return;
        }

        if (user == undefined || user == null) {
            alert("You are not logged in!")
            return;
        }

        const url = "https://script.google.com/macros/s/AKfycbzN3-Gv8UmruqE1Ejh_CfS19_1s8ObCoecutDUbAsOPNF9VM54HouqNFvk0tH-Rgrl2/exec";

        // todo
        event.preventDefault();

        if (user.nickname == null || user.nickname == undefined) {
            alert("Your Google account doesnt have a username!")
            return;
        }
        const uid: string = user.nickname;

        const form = event.target;
        const data = new FormData(f);
        const frm = data.get("To");
        if (frm == null) { return; }
        const froom: string = frm.toString();
        data.append("IDFROM", uid);
        data.append("IDTO", froom.slice(0, froom.indexOf('@')));
        data.append("Image", imageData);
        fetch(url, {
            method: 'POST',
            body: data,
        })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your postcard was sent!'
                  })
            })
    }

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
    const ref = React.useRef(null);


    const props = {
        ...defaultProps,
        className: classNames("canvas"),
        brushColor,
        ref: canvasRef,
        catenaryColor: brushColor,
    };

    







    const [sticker, setSticker] = React.useState('sparkle.gif');

    const handleChange = (event: SelectChangeEvent) => {
        setSticker(event.target.value);
      };


    return (
        <>
         <Form ref={ref} onSubmit={(e) => {
                        e.preventDefault();
                SubmitPostCard(e, document.forms[0], lzString.compressToUTF16(canvasRef.current.getSaveData()));
                    }}>
            <nav className='bg-[#EBE3D7] items-center flex'>
                <NavbarElement className='items-center' href='/'>
                    <LeftArrowIcon />
                </NavbarElement>

                <div className='flex flex-center items-center justify-center grow'>
                    <NavbarElement className='items-center' href='/posts/0'>
                        <SearchIcon />
                    </NavbarElement>
                    <CPick
                        triangle={"hide"}
                        color={brushColor}
                        colors={colors}
                        width={360}
                        circleSpacing={22}
                        onChangeComplete={(c: { hex: React.SetStateAction<string>; }) => setBrushColor(c.hex)}
                    />

                    <UndoIcon onClick={() => {
                        canvasRef.current.undo();
                    }} />


        <InputLabel />
        <Select
          value={sticker}
          label="stickers"
          name='Sticker'
          onChange={(e)=>handleChange(e)}
        >
          <MenuItem value="stars.gif" onChange={() => {}}>
          <img className='w-10' src={'stars.gif'} alt="" />
          </MenuItem>
          <MenuItem value="hearts.gif">
          <img className='w-10' src={'hearts.gif'} alt="" />
          </MenuItem>
          <MenuItem value="sparkle.gif">
          <img className='w-10' src={'sparkle.gif'} alt="" />
          </MenuItem>
        </Select>

                    <NavbarElement className='items-center' href='/'>
                        <ProfileIcon />
                    </NavbarElement>
                </div>

                
        <div className='flex justify-center pr-5 align-center'>
                            <button type='submit'>
                                <ExportIcon />
                            </button>
                        </div>

                <div className='ml-auto pr-5'></div>
            </nav >

            <Container>
                <PostcardWrap>
                    <PostCardTitle>POSTCARD</PostCardTitle>
                            <GridWrap>
                                <MessageWrap>
          <img className='w-16 h-16 mt-[-25%]' src={sticker} alt="" />
                                    
                                    <Message
                                        required
                                        label="Required"
                                        defaultValue="Insert your own special message here!"
                                        multiline
                                        maxRows={3}
                                        variant="standard"
                                        name="Content"

                                        inputProps={{
                                            style: {
                                                fontSize: 40,
                                                lineHeight: 2,
                                                whiteSpace: 'pre-wrap', 
                                                overflowWrap: 'break-word',
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
                                    </ImgWrap>
                                    <From
                                        required
                                        label="Required"
                                        defaultValue="From: sender"
                                        multiline
                                        maxRows={2}
                                        variant="standard"
                                        name='From'

                                        inputProps={{
                                            style: {
                                                fontSize: 30,
                                                lineHeight: 2,
                                                letterSpacing: 2,
                                                whiteSpace: 'pre-wrap', 
                                                overflowWrap: 'break-word',
                                                fontFamily: 'Roboto Slab',
                                            }
                                        }}
                                    />
                                    <To
                                        required
                                        label="Required"
                                        defaultValue="To: Email"
                                        multiline
                                        maxRows={2}
                                        variant="standard"
                                        name='To'

                                        inputProps={{
                                            style: {
                                                fontSize: 30,
                                                lineHeight: 2,
                                                letterSpacing: 2,
                                                fontFamily: "Roboto Slab",
                                            }
                                        }}
                                    />
                                </FromToWrap>
                            </GridWrap>
                        
                    
                </PostcardWrap>
            </Container>
            </Form>
        </>
    )
}

export default Postcard