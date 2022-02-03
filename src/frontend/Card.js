import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import ALLPRODUCTS from './Json/AllProductsJSON'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
 }));

const Cards=(props)=>{
    return(
        <div className='card-container'>
           <Grid container spacing={2}>
                    { 
                        ALLPRODUCTS[props.catgId][props.subCatgId].map((item)=>{
                            return <Grid item xs={6} sm={3} md={3} xl={3} lg={3} container key={item.id}>
                                        <Item>
                                                <Card sx={{ maxWidth: 250 }}>
                                                        <CardMedia
                                                                    component="img"
                                                                    height="140"
                                                                    image={process.env.PUBLIC_URL+item.img}
                                                        />
                                                        <CardContent>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                        <h5>{item.name}</h5>
                                                                        <Button variant="contained" color="error"><Link to={"/product-details/"+item.id+"/"+props.catgId+"/"+props.subCatgId+"/"+item.size}>DETAILS</Link></Button>
                                                                </Typography>
                                                        </CardContent>
                                                </Card>
                                        </Item>
                                    </Grid>
                        })
                    }
            </Grid>
        </div>
    )
}
export default Cards