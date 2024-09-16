import React from 'react'
// import arrow_icon from '../Assets/breadcrum_arrow.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <>
        <div className='breadcrum flex container mx-auto gap-2 my-5'>
           <Link to='/'>HOME</Link> <MdKeyboardArrowRight className='my-auto text-lg' />  <Link to={`/${product.category}`} className='capitalize'>{product.category}</Link> <MdKeyboardArrowRight className='my-auto text-lg' /> {product.name}
        </div>
    </>
  )
}

export default Breadcrum