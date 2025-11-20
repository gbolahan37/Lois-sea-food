import './footer.css'
import Footerbrand from './Footerbrand'
import FooterOuicklinks from './FooterOuicklinks'
import Footercontact from './Footercontact'
import Bussinesshour from './Bussinesshour'
import Footerbuttom from './Footerbuttom'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <Footerbrand />
            <FooterOuicklinks />
            <Footercontact />
            <Bussinesshour />
        </div>
        <Footerbuttom />
    </div>
  )
}

export default Footer