import "../css/ShowProduct.css";
import React,{useEffect,useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link,useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {AddCart} from  '../redux/action';
import {useSelector} from 'react-redux';
function BasicExample() {
  const navigate=useNavigate();
  const [data,setData]=useState([]);
  const {login,handleClick}=useNavigate();
  const [cartDec, setDec]=useState([]);
  const [upDateInput, setUpdate]=useState([]);
  const [cartWishlist, setWlist]=useState([]);
  const [cartTitle, setTitle]=useState([]);
  const state =useSelector((state)=>state.handleCart);
  const  dispatch = useDispatch();
  const addProduct =  (product) =>{
    dispatch(AddCart(product));
    setTitle(product);
    setUpdate([...upDateInput,
      product
    ])
    

 
    
  }
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/').then((result)=>{
        result.json().then((resp)=>{
          setData(resp)
        })
      })
  }, [])

  const navigateShop = () => {
    navigate('/userlogin');
  };

  function viewData(product){
    setWlist(product);
    setDec([...cartDec,product])

  }
  
  function getData(e)
  {
    setTitle(e.target.value);
  }

  function viewcart(){
    window.scrollTo({ 
      bottum:document.getElementsByClassName('addCart'),
      behavior: 'auto'
    }); 
    
  }
  function viewlist(){
    window.scrollTo({ 
      bottum:document.getElementsByClassName('wishlistd'),
      behavior: 'auto'
    });
  }

  // function 
  return (
    <>
  
    <nav className="ShowProductNav">
        <ul className="ulist">
            <li><h1 className="icon">BuyMore</h1></li>
            <li className="list">
                <Link  className="cart" onClick={viewcart()} >Cart({state.length})</Link>
            </li>
            <li className="list">
                <Link  className="wishlist" to="/userlogin">Sign Out</Link>
            </li>
        </ul>
    </nav>
    <div className="row">
    <div className="col">
    <div className="container">
      {
        data.map((item)=>{
          return(
            <form>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} value={item.image} alt="Wait.."/>
                  <Card.Body>
                    <Card.Title value={item.title} onChange={(e)=> setTitle(e.target.value)}>{item.title}</Card.Title>
                      <Card.Text value={item.description} onChange={(e)=> setDec(e.target.value)}>{item.description}</Card.Text>
                      <Button  onClick={()=>{addProduct(item)}} variant="dark">Add to cart</Button>
                      <Button onClick={()=>{viewData(item)}} className="wishlistb" variant="dark">Add To Wishlist</Button>
                  </Card.Body>
                </Card>
            </form>
          )
        })
      }
    </div>
    </div>
    <div className="col">
      <div className="addCart">
        <h1 className="cartname">Cart</h1> 
        {
        upDateInput.map(carts => {
          return(
        <Card className="addcartcard" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={carts.image}  alt="Wait.."/>
                  <Card.Body>
                    <Card.Title value={carts.title} >{carts.title}</Card.Title>
                      <Card.Text value={carts.description} >{carts.description}</Card.Text>
                      <Button className="addbtn" variant="dark">Buy Now</Button>
                  </Card.Body>
          </Card>
          )})}
      </div>
      </div>
      <div className="col">
      <div className="wishlistd">
        <h1 className="wishlisth" >WishList</h1>{
        cartDec.map(wishl => {
          return(
        <Card className="addcartwish" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={wishl.image}  alt="Wait.."/>
                  <Card.Body>
                    <Card.Title value={wishl.title} >{wishl.title} </Card.Title>
                      <Card.Text value={wishl.description} >{wishl.description}</Card.Text>
                      <Button variant="dark">Buy Now</Button>
                  </Card.Body>
                </Card>
          )
        })}
      </div>
      </div>
      </div>
  </>
  );
}

export default BasicExample;