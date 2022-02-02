import React from 'react'
import {useParams} from 'react-router-dom'
import ShowSubcategoryProductcss from './css/ShowSubcategoryProduct.css'
import Cards from './Card'

const ShowSubCategoryProduct=()=>{
    const CATEGORY_ID= useParams().catgid
    const SUBCATEGORY_ID=useParams().subcatgId
    
    return(
        <div className='show-sub-catg-product-container'>
             <Cards catgId={CATEGORY_ID} subCatgId={SUBCATEGORY_ID}/>
        </div>
    )
}
export default ShowSubCategoryProduct