import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { t, i18n } = useTranslation();
const handleChangelanguage = (languge) => {
i18n.changeLanguage(languge);
}
    return (
           <>
               <NavDropdown title={i18n.langugage === 'vi'? 'Việt Nam': 'English'} id="basic-nav-dropdown2" className='languages'>
                 <NavDropdown.Item onClick={()=> handleChangelanguage('en')}>English</NavDropdown.Item>
                 <NavDropdown.Item onClick={()=> handleChangelanguage('vi')} >Việt Nam</NavDropdown.Item>
               </NavDropdown>
           </>
    )
}
export default Language;