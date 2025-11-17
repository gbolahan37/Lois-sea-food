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
        <div className="banner">
            <img src="/seafoodbanner.jpg" alt="" />
        </div>
    </div>
  )
}

export default ExploreMeun