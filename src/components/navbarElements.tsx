import styled from 'styled-components'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import WestIcon from '@mui/icons-material/West';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import IosShareIcon from '@mui/icons-material/IosShare';
import CircleIcon from '@mui/icons-material/Circle';

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
export const CIcon = styled(CircleIcon)`
transform: scale(1.2);
&:hover{
    cursor: url('/pen.png'), auto;
  }
`
