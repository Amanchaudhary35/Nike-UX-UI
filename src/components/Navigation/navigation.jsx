import './navigation.css'

import BrandLogo from '../../assets/brand_logo.png'


const Navigation= ()=>{
return(
    <nav>

    <div className='logo'>
      <img src={BrandLogo} alt="logo" />
      </div>
      
      <ul>
        <li href= "">Menu</li>
        <li href= "#">Location</li>
        <li href= "#">About</li>
        <li href= "#">Contact us</li>
      </ul>

      <button>login</button>
   
  </nav>
)
}
export default Navigation;