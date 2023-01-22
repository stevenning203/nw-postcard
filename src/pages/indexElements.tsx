import styled from 'styled-components'
import {ReactCurvedText as Curve} from 'react-curved-text';
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"

export const ReactCurvedText = styled(Curve)`
font-family: "Roboto";
`
export const TextWrap1 = styled.div`
display: flex;
flex-direction: column;
margin-bottom: -22%;
`
export const TextWrap2 = styled.div`
display: flex;
flex-direction: column;
margin-top: -30%;
margin-bottom: 5%;
`
export const Icon = styled(DynamicFeedIcon)`
transform: scale(1.3);
`