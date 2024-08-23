'use client'

import Link from 'next/link'
import { Fragment, useState } from 'react'

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
  return (
    <Fragment>
      <nav className="main-menu d-none d-xl-block">
        <ul>
          <li className="menu-item">
            <Link href="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">
              <span className="border-r border-black/50 pr-4">All Tours</span>
            </Link>
          </li>
          <li className="menu-item">
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
          </li>
          <li className="menu-item">
            <Link href="/rock-climbing-madeira">Rock Climbing Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/climb-pico-das-torres">Pico Das Torres</Link>
          </li>
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
          <Link href="/tours">
            <span className="border-r border-black/50 pr-4">All Tours</span>
          </Link>
        </li>
        <li className="menu-item">
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
        </li>
        <li className="menu-item">
          <Link href="/rock-climbing-madeira">Rock Climbing Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/climb-pico-das-torres">Pico Das Torres</Link>
        </li>
      </ul>
    </nav>
  )
}
