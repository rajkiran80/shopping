import React, { useEffect } from "react"
import {Link} from 'react-router-dom'
import CategoryJson from "./Json/Category"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import HomeCategoryCss from './css/HomeCategory.css'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'

  const Item = styled(Paper)(({ theme }) => ({
     ...theme.typography.body2,
     padding: theme.spacing(1),
     textAlign: 'center',
     color: theme.palette.text.secondary,
  }));

const HomeCategory=()=>{
    return(
       <div className="categoryContainer">
            <Grid container spacing={2}>
                        {
                            CategoryJson.map((category)=>{
                                return  <Grid item xs={6} sm={3} md={3} xl={3} lg={3} container key={category.id}>
                                            <Item>
                                                <Card sx={{ maxWidth: 250 }}>
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={category.img}
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                 <Button variant="contained" color="error"><Link to={"/subcategory/"+category.id+"/"+category.categoryName.toLowerCase()}>{category.categoryName}</Link></Button>
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
export default HomeCategory