import './exploremeun.css'
import Explorecard from './Explorecard'



function ExploreMeun() {
  return (
    <div className='explore'>
        <div className="explore-header">  
            <div class="explore-header">
                <h2 class="explore-title">Explore Our Menu</h2>
                <p class="explore-subtitle">
                    A great love from the sea. Premium quality range of fresh seafood
                </p>
            </div>
        </div>
        <div className="explorecard-wrapper">
            <Explorecard />
        </div>
        <div className="Carousel">
            <img src="/seafoodbanner.jpg" alt="" />
        </div>
        <div className="wrapper">
          <div className="line"></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#D4AF37" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg>
          <div className="line"></div>
        </div>
        <div className="ready">
            <h1>Ready to Order?</h1>
            <div className="para">
                <p>Browse our exquisite selection of fresh seafood and place your order today. Experience the finest quality delivered to your table</p>
            </div>
            <button className='explore-btn'>EXPLORE MENU</button>
        </div>
    </div>
  )
}

export default ExploreMeun