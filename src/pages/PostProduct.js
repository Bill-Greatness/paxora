import React from 'react'
import {Grid, Form, Input, TextArea, Segment, Select,Header,  Button} from 'semantic-ui-react'

export default class PostItem extends React.Component{

    render(){
        return(
            <Grid padded >
                <Grid.Column computer={14} mobile={16} tablet={14}>
                    <Segment raised>
                        <Grid>
                            <Grid.Column computer={10}>
                                <h3>Image Here</h3>
                            </Grid.Column>
                            <Grid.Column computer={6}>
                                <Header as='h3' content="Add New Product" subheader="React out to customers" />
                            <Form>
                                <Form.Field control={Input} label="Product Name" required /> 
                                <Form.Fiedl control={Input} label="Product Image" type="file" accept="image/*" />
                                <Form.Field control={TextArea} label="Product Description" maxLength="200" />
                                <Form.Field label="Select Category" control={Select} options={[{}]} /> 
                                <Form.Field control={Input} required label="Price" />
                                <Button icon="send" type="submit" circular color="red" /> 
                            </Form>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}