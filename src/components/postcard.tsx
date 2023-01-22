import { Container, PostcardWrap, Form, PostCardTitle, ComponentsWrap, GridWrap, ImgWrap, Stamp, PostageOverlay, MessageWrap, Message, Divider, FromToWrap, From, To, PrintDate, Flowers } from './postcardElements'

const Postcard = () => {

  return (
    <>
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
                <Stamp />
                <PostageOverlay />
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