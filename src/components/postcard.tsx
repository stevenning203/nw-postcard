import React from 'react'

import {PostcardWrap, PostcardTitle, Form, ComponentWrap, ImgWrap, Stamp, PostageOverlay, GridWrap, MessageWrap, Message, Divider, FromToWrap, From, To, PrintDate, Flowers } from './postcardElements'

const PostCard = () => {
  return (
    <PostcardWrap> 
      <PostcardTitle>POSTCARD</PostcardTitle>
      <Form>
        <ComponentWrap>
          <ImgWrap>
          <Stamp />
          <PostageOverlay />
          </ImgWrap>
          <GridWrap>
            <MessageWrap>
              <Message>Message</Message>
              <Divider /> 
              <FromToWrap>
                <From>From</From>
                <To>To</To>
                <PrintDate />
              </FromToWrap>
            </MessageWrap>
          </GridWrap>
          <Flowers />
        </ComponentWrap>
      </Form>
    </PostcardWrap>
  )
}

export default PostCard