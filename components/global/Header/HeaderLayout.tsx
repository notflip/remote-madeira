'use client'
import Link from 'next/link'
import Image from 'next/image'

import { useEffect } from 'react'

import useWindowSize from '@/lib/useWindowSize'
import { stickyNav } from '@/lib/utils'

import Menu from '../Navbar/Menu'
import { urlForImage } from '@/sanity/lib/utils'
import ImageBox from '@/components/shared/ImageBox'

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
      {/*====== Header Navigation ======*/}
      <div className="header-navigation navigation-white">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img src={logoUrl} alt="Site Logo" />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className="nav-menu">
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                    />
                  </a>
                </Link>
              </div>
              {/*=== Nav Search ===*/}
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
              {/*====== main Menu ======*/}
              <Menu />
              {/*====== Menu Button ======*/}
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn secondary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </Link>
              </div>
            </div>
            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <Link legacyBehavior href="/contact">
                  <a className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
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
