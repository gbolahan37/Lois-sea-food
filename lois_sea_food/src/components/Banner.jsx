import './banner.css'

const Banner = ({ header, descript }) =>{
    return(
        <div className="banner">
            <div className="subtitle-wrapper">
                <div className="line"></div>
                <h1 className="banner-header">{header}</h1>
                <div className="line"></div>
            </div>
            <p className="banner-description">{descript}</p>
        </div>
    )
}

export default Banner