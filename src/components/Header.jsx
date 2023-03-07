import React from 'react'

const Header = () => {
  return (
    <nav>
            <img alt="menu" className="menu" />
            <div className="navbar-left">
                <img alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Sale</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">
                        example@labstore.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img alt="shopping cart" />
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Header