import styled from 'styled-components'

export const CD = styled.div`
margin-left: 30%;
height: 200px;
width: 140px;
background: #fff;
`
export const PostcardWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: #EBE3D7;
width: 70%;
height: 70%;
border: 6px solid white;
border-image: repeating-linear-gradient(
    45deg,
    maroon,
    maroon 20px,
    #EBE3D7 20px,
    #EBE3D7 40px
  )
  10;
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
`
export const GridWrap = styled.div`
display: flex;
justify-content: center;
height: 100%;
width: 100%;
`
export const MessageWrap = styled.div`
height: 100%;
width: 50%;
display: flex; 
margin-top: 3%;
flex-direction: column;
`
export const Message = styled.div`
font-size: 40px;
white-space: pre-wrap;
font-weight: 2000;
line-height: 1.8;
border-width: 0;
outline: "none";
font-family: "Homemade Apple";
padding:20px;
padding-bottom: 0;
padding-left: 40px;
resize: none;
`
export const Divider = styled.div`
border-left: 5px solid black;
height: 40%;
position: absolute;
align-items: center;
margin-top: 2%;
justify-content: center;
`
export const FromToWrap = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
padding-left:40px;
`
export const From = styled.textarea`
font-size: 30px;
line-height: 1;
letter-spacing: 2;
font-family: "Roboto Slab";
resize: none;
padding-top: 20px;
`
export const To = styled.textarea`
font-size: 30px;
line-height: 1;
letter-spacing: 2;
resize: none;
font-family: "Roboto Slab";
`
export const Flowers = styled.div`
background: url('/flowers.png');
background-repeat: no-repeat;
background-size: 80%;
background-position: center;
width:100%;
height:100%;
`

