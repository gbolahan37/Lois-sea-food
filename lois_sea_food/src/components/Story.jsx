import "./story.css"

const Review = ({accumulation, type}) => {
    <div className="review">
        <span>{accumulation}</span>
        <p>{type}</p>
    </div>
}

function Story() {
  return (
    <div className="story-wrapper">
        <div className="about-image">
            <img src="public/Unity in diversity.jpg" alt="" />
        </div>
        <div className="story">
            <span>SINCE 2019</span>
            <h3 className="story-header">Our Story</h3>
            <p className="story-paragraph">Lois Seafood is an online seafood brand that prepares and delivers fresh, flavourful seafood meals made to order. Operating as a home-based kitchen, we focus on quality, freshness, and thoughtful preparation, ensuring every dish meets our customers’ expectations. Lois Seafood focuses on health-conscious Nigerian seafood meals, while also offering customized services such as private chef experiences and special occasion menus. Our goal is to create meals that are not only delicious but nourishing, intentional, and made with care</p>
            <br/>
            <p className="story-paragraph">With over 9 years of experience in the seafood industry, we've built lasting relationships with suppliers who share our commitment to quality and sustainability. Every dish tells a story of tradition, expertise, and love for the sea.</p>
        </div>
        <div className="review-wrapper">
            <Review accumulation="20+" />
        </div>
    </div>
  )
}

export default Story