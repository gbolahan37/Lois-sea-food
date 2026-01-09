import './category.css'

const Bubbles = ({ name }) =>{
    return(
        <div className="cate-bubble">{name}</div>
    )
}

function Category() {
  return (
    <div className="category-wrapper">
        <div className="category">
            <Bubbles name="All" />
            <Bubbles name="Seafood Rice"  />
            <Bubbles name="Seafood Pasta"  />
            <Bubbles name="Seafood Soups"  />
            <Bubbles name="Sides"  />
            <Bubbles name="Platters"  />
        </div>
    </div>
  )
}

export default Category