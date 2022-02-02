import { useParams,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ShowAllSubCategoryCSS from './css/ShowAllSubCategory.css'
import SubCategoryJSON from './Json/SubCategory'


const ShowAllSubCategory=()=>{
    const CATEGORY_ID= useParams().id
    const [getCateGoryId,setCategoryId]=useState(null)
    const [subcategoryAllData,setSubCategoryAllData]=useState([])
    useEffect(()=>{
        let CATEGORY_ID_INT=parseInt(CATEGORY_ID)
        setCategoryId(CATEGORY_ID_INT)
        setSubCategoryAllData(SubCategoryJSON.get(CATEGORY_ID_INT))
    },[])
    return(
        <div className="show-subcategory-container">
             <div className="show-subcategory-items">
                    {
                      subcategoryAllData.map((subcategory)=>{
                         return <Link to={"/products/"+getCateGoryId+"/"+subcategory.id}>
                                    <div className="eachSubCategory" key={subcategory.id}>
                                        <div className='img'><img src={subcategory.img}/></div>
                                        <div className='title'><p>{subcategory.name}</p></div>
                                    </div>
                                 </Link>
                      })
                    }
             </div>
             {
                 getCateGoryId===null && <h2>Loading...............</h2>
             }
        </div>
    )
}
export default ShowAllSubCategory