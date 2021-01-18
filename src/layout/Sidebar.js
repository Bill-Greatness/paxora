import React from 'react'
import { List, Segment, Divider, Form, Radio, Header, Sidebar } from 'semantic-ui-react'


export default function SideBar() {
    return (
        <Sidebar  as={Segment} visible={true}>  
            <Header as='h1' content="Paxora" subheader="..." />
            <List relaxed>
                <List.Item icon="laptop" header="Electronics" description="200+ items" />

                <List.Item icon="user" header="Side Category 2" description="200+ items" />

                <List.Item icon="user" header="Side Category 3" description="200+ items" />

                <List.Item icon="user" header="Side Category 4" description="200+ items" />
            </List>
            <Divider horizontal />

            <Header as='h3' content="Price Range" subheader="With Reach" />
            <List relaxed>
                
                <Form>
                    <Form.Field>
                        <Radio
                            label='500$ +'
                            name='radioGroup'
                            value='500'                      
                        />
                    </Form.Field>
                    <Form.Field>
                        <Radio
                            label='400$ - 499$'
                            name='radioGroup'
                            value='400'
                           
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='300$ - 399$'
                            name='radioGroup'
                            value='300'           
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='200$ - 299$'
                            name='radioGroup'
                            value='300'           
                        />
                    </Form.Field>

                    <Form.Field>
                        <Radio
                            label='100$ - 199$'
                            name='radioGroup'
                            value='300'           
                        />
                    </Form.Field>


                </Form>
            </List>
        </Sidebar>
    )
}