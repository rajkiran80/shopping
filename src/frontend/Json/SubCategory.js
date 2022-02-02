import FormalShirts from '../images/subcategoryImages/formal-shirts.jfif'
import Jeans from '../images/subcategoryImages/jeans.jfif'
import Shirts from '../images/subcategoryImages/shirts.jfif'
import Tshirts from '../images/subcategoryImages/tshirts.jfif'

const SUB_CATEGORY=new Map([
   //subcategory name of corresponding category
     [1,[{
           id:1,type:"TopWear",name:"T-shirts",img:Tshirts
        },
        {
           id:2,type:"TopWear",name:"Casual Shirts",img:Shirts
        },
        {
           id:3,type:"TopWear",name:"Formal Shirts",img:FormalShirts 
        },
        {
           id:4,type:"BottomWear",name:"Jeans",img:Jeans
        }]
     ],
     [2,[{
           id:1,type:"Indian & Fusion Wear",name:"Kurtas & Suits",img:'/images/wkurta.jpg'
        },
        {
           id:2,type:"Indian & Fusion Wear",name:"Ethnic Wear",img:'/images/weth.jpg'
        },
        {
           id:3,type:"Indian & Fusion Wear",name:"Sarees",img:'/images/wsaree.jpg'
        },
        {
           id:4,type:"Western Wear",name:"Dresses",img:'/images/wdress.jpg'
        }]
    ],
    [3, [{
            id:1,type:"Boys Clothing",name:"T-shirts",img:'/images/kidst.png'
        },
        {
            id:2,type:"Boys Clothing",name:"Shirts",img:'/images/kshi.png'
        },
        {
            id:3,type:"Boys Clothing",name:"Shorts",img:'/images/ksh.png'
        },
        {
            id:4,type:"Girls Clothing",name:"Dresses",img:'/images/kidsdress.jpg'
        },
        { 
            id:5,type:"Girls Clothing",name:"Tops",img:'/images/ktop.jpg'
        }]
    ],
    [4, [{
           id:1,type:"Makeup",name:"Lipstick",img:'/images/lip.jpg'
        },
        {
           id:2,type:"Makeup",name:"Lip Gloss",img:'/images/lipgl.jpg'
        },
        {
           id:3,type:"Haircare",name:"Shampoo",img:'/images/sh.jpg'
        }]
    ]
])
export default SUB_CATEGORY