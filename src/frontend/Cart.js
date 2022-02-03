import Cartcss from './css/Cart.css'
import ProductDetails from './ProductDetails'
import store from './reduxFile'

const cartAddedProduct=new Map()
const CART=()=>{
    store.subscribe(()=>{
        
    })
    return(
        <div className="cart-container">
            <h3>Cart Added Products</h3>
            {
                store.getState().allProductsId.map((item)=>{
                    return  <div className='card'>
                                <div className='img-title'>
                                    <div className='img'><img src={process.env.PUBLIC_URL+item.img}/></div>
                                    <div className='title'><h3>{item.title}</h3></div>
                                </div>
                                <div className='price-incre-decre'>
                                    <div className='incre'><button>-</button></div>
                                    <div className='qty'>{item.price}</div>
                                    <div className='decre'><button>+</button></div>
                                </div>
                                <div className='price'><h4>Rs.{item.price}</h4></div>
                            </div>
                })
            }
        </div>
    )
}
export default CART