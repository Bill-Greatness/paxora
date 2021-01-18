import React from 'react'
import {Menu, Icon} from 'semantic-ui-react'

export default function Navbar(){
    return(
        <Menu fixed="top" borderless size="large">
            <Menu.Item>
                <Menu.Header>Home</Menu.Header>
            </Menu.Item>

            <Menu.Menu position="right">
             
            <Menu.Item>
                <Menu.Header>
                    Post Product
                </Menu.Header>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>
                    Cart
                </Menu.Header>
            </Menu.Item>
            <Menu.Item>
                <Menu.Header>
                    Account
                </Menu.Header>
            </Menu.Item>
            <Menu.Item className="mobile-bar" onClick={(e) => {}}>
                <Icon name="bars" size={24} />
            </Menu.Item>
            </Menu.Menu>
            



        </Menu>
    )
}