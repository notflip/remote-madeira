'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'

interface MenuProps {
  items: any[]
}

const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  )
}
export default Menu

const DeskTopMenu = () => {
  const currentPath = usePathname()

  return (
    <Fragment>
      <nav className="main-menu d-none d-xl-block">
        <ul className="underline-offset-4">
          <li className="menu-item">
            <Link
              href="/"
              style={{
                textDecoration: currentPath === '/' ? 'underline' : 'none',
              }}
            >
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">
              <span
                className="main-btn secondary-btn !pl-0 px-3 py-2"
                style={{
                  textDecoration:
                    currentPath === '/tours' ? 'underline' : 'none',
                }}
              >
                All Tours
              </span>
            </Link>
          </li>
          {/* <li className="menu-item">
            <Link href="/west-tour-madeira" style={{ textDecoration: currentPath === '/west-tour-madeira' ? 'underline' : 'none' }}>West Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/wine-tour-madeira" style={{ textDecoration: currentPath === '/wine-tour-madeira' ? 'underline' : 'none' }}>Wine Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/rock-climbing-madeira" style={{ textDecoration: currentPath === '/rock-climbing-madeira' ? 'underline' : 'none' }}>Rock Climbing Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/east-tour-madeira" style={{ textDecoration: currentPath === '/east-tour-madeira' ? 'underline' : 'none' }}>East Tour</Link>
          </li> */}
          {/*<li className="menu-item">*/}
          {/*  <Link href="/climb-pico-das-torres">Pico Das Torres</Link>*/}
          {/*</li>*/}
          {/*<li className="menu-item">*/}
          {/*  <Link href="/private-tour-madeira">Private Tour</Link>*/}
          {/*</li>*/}
        </ul>
      </nav>
    </Fragment>
  )
}

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState('')
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? '' : value),
    activeLi = (value) =>
      value === activeMenu ? { display: 'block' } : { display: 'none' }
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item">
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link href="/tours" className="main-btn">
            <span className="border-r border-black/50 pr-4">All Tours</span>
          </Link>
        </li>
        {/* <li className="menu-item">
          <Link href="/west-tour-madeira">West Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/east-tour-madeira">East Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/private-tour-madeira">Private Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/wine-tour-madeira">Wine Tour</Link>
        </li> */}
        {/*<li className="menu-item">*/}
        {/*  <Link href="/rock-climbing-madeira">Rock Climbing Tour</Link>*/}
        {/*</li>*/}
        {/*<li className="menu-item">*/}
        {/*  <Link href="/climb-pico-das-torres">Pico Das Torres</Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  )
}
