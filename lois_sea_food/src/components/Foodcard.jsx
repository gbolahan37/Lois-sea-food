import './foodcard.css'
import { Data } from './data'

function Foodcard( {postData} ) {
  return (
    <div className='card'>
        <div className="card-image">
            <img src={postData.image} alt="" />
        </div>
        <div className="card-description">
            <div className="name">
                <h4>{postData.name}</h4>
                <span>{postData.price}</span>
            </div>
            <div className="food-description">
                <p>{postData.describtion}</p>
            </div>
            <button className='card-btn'>+ Add to Cart</button>
        </div>
    </div>
  )
}

export default Foodcard