import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import { DisplayCard, ProductInfo } from '../components'



export default function Main() {

    const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])
    return (
        <>
            <Grid stackable>
                <Header as="h3" content="Fashion" />
                <Grid.Row>
                    {[1, 3, 4, 5, 6].map(idc => (
                        <Grid.Column computer={3}>
                            <DisplayCard cat={"hey"} />
                        </Grid.Column>
                    ))}
                </Grid.Row>

                <Header as="h3" content="Electronics" />
                <Grid.Row>
                    {[1, 3, 4, 5, 6].map(idc => (
                        <Grid.Column computer={3}>
                            <DisplayCard cat={"elect"} />
                        </Grid.Column>
                    ))}
                </Grid.Row>

            </Grid>
            <ProductInfo />
        </>

    )
}