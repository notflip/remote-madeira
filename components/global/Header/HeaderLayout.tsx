'use client'
import Link from 'next/link'
import { useEffect } from 'react'

import useWindowSize from '@/lib/useWindowSize'
import { stickyNav } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

import Menu from '../Navbar/Menu'

interface HeaderProps {
  logo: any
}

const Header = ({ logo }: HeaderProps) => {
  useEffect(() => {
    stickyNav()
  }, [])
  const { width } = useWindowSize()
  useEffect(() => {
    const headers = document.querySelectorAll('.header-navigation')
    headers.forEach((header) => {
      if (width <= 1199) {
        header.classList.add('breakpoint-on')
      } else {
        header.classList.remove('breakpoint-on')
      }
      // toggle
      const toggleBtn = header.getElementsByClassName('navbar-toggler')[0],
        overlay = header.getElementsByClassName('nav-overlay')[0],
        menu = header.getElementsByClassName('nav-menu')[0]
      toggleBtn.addEventListener('click', () => {
        overlay.classList.add('active')
        menu.classList.add('menu-on')
      })
      overlay.addEventListener('click', () => {
        overlay.classList.remove('active')
        menu.classList.remove('menu-on')
      })
    })
  }, [width])

  const logoUrl =
    logo && urlForImage(logo)?.height(120).width(175).fit('crop').url()

  return (
    <header className="header-area header-one transparent-header">
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="site-branding">
              <Link href="/" className="brand-logo">
                <img src={logoUrl} alt="Site Logo" />
              </Link>
            </div>
            <div className="nav-menu">
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link className="brand-logo" href="/">
                  <img src={logoUrl} alt="Site Logo" />
                </Link>
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
                <Link href="#" className="main-btn primary-btn">
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
export default Header
