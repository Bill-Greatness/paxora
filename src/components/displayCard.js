import React from 'react'
import { Card, Image, Label, Segment } from 'semantic-ui-react'
import shirt1 from '../images/shirt-2.jpg'
import phone1 from '../images/phone1.jpg'
import {useDispatch} from 'react-redux'
import {display_info} from '../container/actions'


export const DisplayCard = ({cat}) => {
    
    const dispatch = useDispatch()

    return (
        <Segment raised>
            <Label attached="top-right" content={"500$"}  color="red"/>

        <Card onClick={(e) => dispatch(display_info(78))}>
            <Image src={cat === "elect" ? phone1:shirt1} wrapped ui={false} />
            <Card.Content>
                <Card.Header>LV Shirt</Card.Header>
                <Card.Meta>Cat: Fashion - {cat}</Card.Meta>
            </Card.Content>
        </Card>
        </Segment>
    )
}