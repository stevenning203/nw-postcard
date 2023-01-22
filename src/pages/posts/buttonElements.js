import styled from 'styled-components'

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 17px;
`
export const CheckBoxLabel = styled.label`
  position: absolute;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #426574;
  cursor: pointer;
  
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #A94E4E;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

export const GalleryTitle = styled.p`
  font-family: 'Roboto Slab';
  font-weight: 4000;
  font-type: bold;
  letter-spacing: 3px;
  font-size: 3rem;
  color: #426574;'
`
  
