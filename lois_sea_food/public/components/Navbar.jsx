import './navbar.css'
import { useRef } from 'react'

function Navbar() {

    const meunRef = useRef(null)
    const openRef = useRef(null)
    const closeRef = useRef(null)

    function openNav (){
        meunRef.current.style.display = "block"
        openRef.current.style.display = "none"
        closeRef.current.style.display = "block"
    }

    function closeNav (){
        meunRef.current.style.display = "none"
        openRef.current.style.display = "block"
        closeRef.current.style.display = "none"
    }



  return (
    <div className="navbar">
        <div className="logo">
            <h2>Lois Sea Food</h2>
        </div>
        <ul className='nav-links' ref={meunRef}>
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="nav-icons">
            <div className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M230.14,58.87A8,8,0,0,0,224,56H62.68L56.6,22.57A8,8,0,0,0,48.73,16H24a8,8,0,0,0,0,16h18L67.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,160,204a28,28,0,1,0,28-28H91.17a8,8,0,0,1-7.87-6.57L80.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,230.14,58.87ZM104,204a12,12,0,1,1-12-12A12,12,0,0,1,104,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,200,204Zm4-74.57A8,8,0,0,1,196.1,136H77.22L65.59,72H214.41Z"></path></svg>
            </div>
            <div className="ham" onClick={openNav} ref={openRef}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#000000" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path></svg>
            </div>
            <div className="close" onClick={closeNav} ref = {closeRef} >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#000000" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
            </div>
        </div>
    </div>
  )
}

export default Navbar