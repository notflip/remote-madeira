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
            <Link href="/tours">West Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">East Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">Private Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">Wine Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">Rock Climbing Tour</Link>
          </li>
          <li className="menu-item">
            <Link href="/tours">Pico Das Torres</Link>
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
          <Link href="/tours">West Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/tours">East Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/tours">Private Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/tours">Wine Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/tours">Rock Climbing Tour</Link>
        </li>
        <li className="menu-item">
          <Link href="/tours">Pico Das Torres</Link>
        </li>
      </ul>
    </nav>
  )
}
