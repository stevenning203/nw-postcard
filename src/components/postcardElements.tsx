import styled from 'styled-components'
import TextField from '@mui/material/TextField';

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
background: url('/lion.png');
background-position: center;
height:100%;
height: 100%;
background-repeat: no-repeat;
background-size: auto 100%;
margin-left: 50%;
`
export const PostageOverlay = styled.div`
background: url('/post.png');
background-position: center;
height:100%;
height: 100%;
background-repeat: no-repeat;
background-size: 100% auto;
margin-left: 50%;
transform: translate(-50%, -80%);
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
`
export const From = styled(TextField)`
`
export const To = styled(TextField)`
`
export const PrintDate = styled.p`
font-family: 'Roboto Slab';
font-type: bold;
font-size: 30px;
`
export const Flowers = styled.div`
background: url('/flowers.png');
background-repeat: no-repeat;
background-size: 100%;
background-position: center;
width:100%;
height:100%;
margin-top: -10%;
`

