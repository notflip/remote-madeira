import Link from 'next/link'
import type { SettingsPayload } from '@/types'
import Menu from './Menu'

interface NavbarProps {
  data: SettingsPayload
}

export default function Navbar(props: NavbarProps) {
  const { data } = props

  return (
    <header className="header-area header-one transparent-header">
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container">
          <div className="primary-menu">
            <div className="site-branding">
              <Link href="/" className="brand-logo">
                <img src="assets/images/logo/logo-white.png" alt="Site Logo" />
              </Link>
            </div>
            <div className="nav-menu">
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link href="/" className="brand-logo">
                  <img
                    src="assets/images/logo/logo-black.png"
                    alt="Site Logo"
                  />
                </Link>
              </div>
              <div className="nav-search mb-30 d-block d-xl-none ">
                <form>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Search Here"
                      name="email"
                      required
                    />
                    <button className="search-btn">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </form>
              </div>

              <Menu />

              <div className="menu-button mt-40 d-xl-none">
                <Link href="#" className="main-btn secondary-btn">
                  Book Now
                  <i className="fas fa-paper-plane" />
                </Link>
              </div>
            </div>
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <Link href="#" className="main-btn secondary-btn">
                  Book Now
                  <i className="fas fa-paper-plane" />
                </Link>
              </div>
              <div className="navbar-toggler">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
