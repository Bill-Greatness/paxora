import React from 'react' 
import {Grid, Segment} from 'semantic-ui-react'

export default function Cart() {
    return(
        <Segment raised>
        <Grid padded>
            <Grid.Column computer={10}>
                <Segment raised>
                Profile Image , Details, Some Details, History
                </Segment>
               
            </Grid.Column>
            <Grid.Column computer={6}>
                <Segment raised>
                Items in Cart
                Date Added
                Owner Details
                Pricing and Timing...
                </Segment>
            </Grid.Column>
        </Grid>
        </Segment>
    )
}