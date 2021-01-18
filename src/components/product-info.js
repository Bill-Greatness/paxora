import React from 'react'
import { Item, Header, Segment, Sidebar } from 'semantic-ui-react'
import phone1 from '../images/phone1.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { close_info } from '../container/actions'


export const ProductInfo = ({ product_details }) => {

    const portalState = useSelector(state => state.show_info)
    const dispatch = useDispatch()
    return (
            <Sidebar visible={portalState} as={Segment} direction="right">
                <Item>
                    <Item.Image size='medium' src={phone1} />

                    <Item.Content>
                        <br />
                        <Item.Header as='h3' content="Neat Iphone X">Neat Iphone 8+</Item.Header>
                        <Item.Meta>530$</Item.Meta>
                        <Item.Description>
                            <Header.Subheader>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available
          </Header.Subheader>
                        </Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                    </Item.Content>
                </Item>
            </Sidebar>

    )
}