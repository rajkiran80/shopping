import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import HomePage from './frontend/HomePage'
import SubCategory from './frontend/ShowAllSubCategory'
import Navbar from './frontend/Navbar'
import Cart from './frontend/Cart'
import ShowSubCategoryProduct from './frontend/ShowSubCategoryProduct'
import ProductDetails from './frontend/ProductDetails'
import Canva from './Canva'

function App() {
  return(
    <div className="App">
         <Router>
              <Navbar/>
            <Routes>
                <Route path="/shopping" element={<HomePage/>}/>
                <Route path="/subcategory/:id/*" element={<SubCategory/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/products/:catgid/:subcatgId/" element={<ShowSubCategoryProduct/>}/>
                <Route path="/product-details/:pid/:catId/:subCatId/:sizeIntStr" element={<ProductDetails/>}/>
                <Route path="/shopping/canva" element={<Canva/>}/>
            </Routes>
         </Router>
    </div>
  )
}
export default App
