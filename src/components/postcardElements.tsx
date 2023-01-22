import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import CanvasDraw from "react-canvas-draw";
import ReplayIcon from '@mui/icons-material/Replay';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import WestIcon from '@mui/icons-material/West';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import { CirclePicker } from "react-color";

export const LeftArrowIcon = styled(WestIcon)`
transform: scale(1.7);
`
export const SearchIcon = styled(ImageSearchIcon)`
transform: scale(1.7);
`
export const AddIcon = styled(AddCircleOutlineIcon)`
transform: scale(1.7);
`
export const ProfileIcon = styled(PersonOutlineIcon)`
transform: scale(1.7);
`
export const ExportIcon = styled(IosShareIcon)`
transform: scale(1.7);
`
export const CPick = styled(CirclePicker)`
&:hover{
    cursor: url('/pen.png'), auto;
  }
`
export const ButtonWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #EBE3D7;
height: 35px;
`
export const CD = styled(CanvasDraw)`
margin-left: 50%;
margin-top: 10%;
`
export const UndoIcon = styled(ReplayIcon)`
transform: scale(1.5);
`
export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh; 
background: #426574;
`
export const PostcardWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #EBE3D7;
width: 60%;
height: 80%;

border: 20px solid white;
border-image: repeating-linear-gradient(
    45deg,
    maroon,
    maroon 20px,
    #EBE3D7 20px,
    #EBE3D7 40px
  )
  20;

@media (max-width: 1200px) {
    width: 80%;
  }

@media (max-width: 600px) {
    width: 100%;
  }
`
export const ImgWrap = styled.div`
height: 60%;
`
export const Stamp = styled.div`
margin-left: 20%;
`
export const PostageOverlay = styled.div`
background: url('/post.png');
background-position: center;
height:100%;
width: 100%;
background-repeat: no-repeat;
background-size: 50% auto;
`
export const PostCardTitle = styled.p`
font-family: 'Roboto Slab';
font-weight: 4000;
font-type: bold;
letter-spacing: 3px;
font-size: 3rem;
color: #426574;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
padding: 5%;
padding-top:0;
`
export const ComponentsWrap = styled.div`
`
export const GridWrap = styled.div`
display: flex;
justify-content: center;
height: 100%;
width: 100%;
gap: 10%;
`
export const MessageWrap = styled.div`
height: 100%;
width: 50%;
padding-top: 5%;
`
export const Message = styled(TextField)`
padding: 5%;
`
export const Divider = styled.div`
border-left: 4px solid black;
height: 50%;
position: absolute;
align-items: center;
justify-content: center;
margin-top: 3%;
`
export const FromToWrap = styled.div`
width: 50%;
height: 100%;
margin-left: -5%;
margin-top: -10%;

`
export const From = styled(TextField)`
margin-left: 15%;

`
export const To = styled(TextField)`
margin-left: 15%;

`
export const PrintDate = styled.p`
font-family: 'Roboto Slab';
font-type: bold;
font-size: 30px;
margin-left: 15%;
`
export const Flowers = styled.div`
background: url('/flowers.png');
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
width:100%;
height:100%;
margin-top: -20%;
`

