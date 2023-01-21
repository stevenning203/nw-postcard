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

`
export const Stamp = styled.div`

`
export const PostageOverlay = styled.div`

`
export const PostCardTitle = styled.h1`
font-family: 'Roboto Slab', serif;
font-weight: 2000;
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
background: blue;
height: 100%;
width: 40%;
margin-top: -5%;
`
export const Message = styled(TextField)`
padding: 5%;
`
export const Divider = styled.div`
border-left: 5px solid black;
height: 100%;
position: absolute;
left: 50%;
margin-left: -3px;
top: 0;
`
export const FromToWrap = styled.div`
background: green;
height: auto;
width: 40%;
align-self: flex-end;
margin-top: 15%;
`
export const From = styled(TextField)`

`
export const To = styled(TextField)`

`
export const PrintDate = styled.h3`
font-family: 'Roboto Slab', serif;
`
export const Flowers = styled.div`

`

