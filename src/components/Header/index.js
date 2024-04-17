import {AiOutlineShoppingCart} from 'react-icons/ai'
import './index.css'

const Header = props => {
  const {cartQuantity} = props

  return (
    <nav className="nav-bar">
      <h1 className="nav-heading">UNI Resto Cafe</h1>
      <ul className="nav-menu-list">
        <li className="nav-menu-item">My Orders</li>
        <li className="nav-menu-item">
          <AiOutlineShoppingCart />
          <span className="cart-quantity">{cartQuantity}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Header
