'use client'
import Link from 'next/link'
import { useEffect } from 'react'

import useWindowSize from '@/lib/useWindowSize'
import { stickyNav } from '@/lib/utils'
import { urlForImage } from '@/sanity/lib/utils'

import Menu from '../Navbar/Menu'

interface HeaderProps {
  settings: any
}

const Header = ({ settings }: HeaderProps) => {
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
    settings.logo &&
    urlForImage(settings.logo)?.height(110).url()

  return (
    <header className="header-area header-three">
      <div className="header-top-bar pt-30 pb-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 d-none d-xl-block">
              <div className="site-branding max-h-[100px]">
                <Link href="/" className="brand-logo">
                  <img src={logoUrl} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              <div className="information-wrapper">
                <div className="row justify-end">
                  {settings.address && (
                    <div className="col-lg-4">
                      <div className="single-info-item-two">
                        <div className="inner-info">
                          <div className="icon">
                            <i className="far fa-map-marker-alt" />
                          </div>
                          <div className="info">
                            <span className="title">Office Address</span>
                            <h5>{settings.address}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {settings.mail && (
                    <div className="col-lg-4">
                      <div className="single-info-item-two">
                        <div className="inner-info">
                          <div className="icon">
                            <i className="far fa-envelope" />
                          </div>
                          <div className="info">
                            <span className="title">Email Address</span>
                            <h5>
                              <a href={`mailto:${settings.mail}`}>
                                {settings.mail}
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {settings.phone && (
                    <div className="col-lg-4">
                      <div className="single-info-item-two">
                        <div className="inner-info">
                          <div className="icon">
                            <i className="far fa-phone-plus" />
                          </div>
                          <div className="info">
                            <span className="title">Call Us</span>
                            <h5>
                              <a href={`tel:${settings.phone}`}>
                                {settings.phone}
                              </a>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-navigation">
        <div className="nav-overlay" />
        <div className="container-fluid">
          <div className="primary-menu gray-bg">
            <div className="site-brading d-block d-xl-none">
              <Link href="/" className="brand-logo">
                <img src={logoUrl} alt="Logo" />
              </Link>
            </div>
            <div className="nav-menu">
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link href="/" className="brand-logo">
                  <img src={logoUrl} alt="Logo" />
                </Link>
              </div>
              <Menu />
              <div className="menu-button mt-40 d-xl-none">
                <Link legacyBehavior href="#">
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
