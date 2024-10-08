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

  const logoUrl = settings.logo && urlForImage(settings.logo)?.height(110).url()

  return (
    <header className="header-area header-three">
      <div className="header-top-bar pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 d-none d-xl-block">
              <div className="site-branding max-h-[100px]">
                <Link href="/" className="brand-logo">
                  <img src={logoUrl} width="161" height="110" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-9 col-lg-12">
              <div className="information-wrapper">
                <div className="flex gap-6 justify-end items-center">
                  {settings.address && (
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-map-marker-alt" />
                        </div>
                        <div className="info">
                          <span className="title">Office Address</span>
                          <p>{settings.address}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {settings.mail && (
                    <div className="single-info-item-two">
                      <div className="inner-info">
                        <div className="icon">
                          <i className="far fa-envelope" />
                        </div>
                        <div className="info">
                          <span className="title">Email Address</span>
                          <p style={{fontSize: '18px', fontWeight: '600'}}>
                            <a href={`mailto:${settings.mail}`}>
                              {settings.mail}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {settings.phone && (
                    <div className="single-info-item-two">
                      <Link
                        href={`https://wa.me/${settings.phone.replace(/[^\d]/g, '')}`}
                        className="flex gap-2 items-center px-4 py-2 rounded-lg text-black bg-[#eee]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                          />
                        </svg>
                        <span className="font-medium">Chat with us</span>
                      </Link>
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
        <div className="container">
          <div className="primary-menu gray-bg">
            <div className="site-brading d-block d-xl-none">
              <Link href="/" className="brand-logo">
                <img src={logoUrl} alt="Logo" />
              </Link>
            </div>
            <div className="nav-menu">
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link href="/" className="brand-logo">
                  <img src={logoUrl} width="161" height="110" alt="Logo" />
                </Link>
              </div>

              <Menu />

              <div className="menu-button mt-40 d-xl-none">
                <Link
                  href={`https://wa.me/${settings.phone.replace(/[^\d]/g, '')}`}
                  className="flex gap-2 items-center px-4 py-2 rounded-lg text-white bg-[#25D366]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                  <span className="font-medium">Book on WhatsApp</span>
                </Link>
              </div>
            </div>
            <div className="nav-right-item">
              <div className="menu-button d-xl-block d-none">
                <Link
                  href={`https://wa.me/${settings.phone.replace(/[^\d]/g, '')}`}
                  className="flex gap-2 items-center px-4 py-2 rounded-lg text-white bg-[#25D366]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                    />
                  </svg>
                  <span className="font-medium">Book on WhatsApp</span>
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
