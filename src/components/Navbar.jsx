import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { IconChevronDown, IconSun, IconMoon } from './Icons.jsx'
import { useTheme } from '../ThemeContext.jsx'
import ScheduleDemo from './ScheduleDemo.jsx'
import config from "../config/api";

const PRODUCT_ITEMS = [
  { label: 'Seamless Event Platform', to: '#' },
  { label: 'Registration And Ticketing', to: '#' },
  { label: 'Dynamic Event Websites', to: '#' },
  { label: 'All-In Event App', to: '#' },
  { label: 'Exhibitions And Sponsors Management', to: '#' },
  { label: 'Access Control Tools', to: '#' },
  { label: 'TEPS Onsite Support Team', to: '#' },
]

const RESOURCE_ITEMS = [
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'TEPS Blog', to: '/blog' },
  { label: 'Upcoming Events', to: '#' },
  { label: 'FAQ', to: '/#faq' },
]

function NavDropdown({ label, title, items, isOpen, onEnter, onLeave }) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        className="flex items-center gap-1.5 text-sm font-medium text-ink/80 hover:text-ink dark:text-white dark:hover:text-white transition-colors py-2"
      >
        {label}
        <IconChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue' : ''}`}
        />
      </button>

      <div
        className={`fixed inset-x-0 top-[72px] z-40 transition-all duration-200 ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-paper dark:bg-ink-2 dark:border-paper/10 shadow-xl p-8">
            <img
              src="/about_teps.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 object-contain opacity-10"
            />

            <p
              className={`underline-grow relative inline-block text-sm font-bold text-blue mb-6 ${
                isOpen ? 'is-visible' : ''
              }`}
            >
              {title}
            </p>
            <div className="relative grid grid-rows-3 grid-flow-col gap-x-16 gap-y-4 sm:auto-cols-max">
              {items.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="block whitespace-nowrap text-sm font-medium text-ink dark:text-paper hover:text-blue transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileAccordion({ label, items, isOpen, onToggle, onNavigate }) {
  return (
    <div className="border-b border-ink/8 dark:border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-ink dark:text-white"
      >
        {label}
        <IconChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-3' : 'max-h-0'}`}>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={onNavigate}
              className="text-sm text-ink/70 dark:text-white/70 hover:text-blue transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [isScheduleDemoOpen, setIsScheduleDemoOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState(null)
  const { theme, toggleTheme } = useTheme()
  const closeTimeoutRef = useRef(null)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileSection(null)
  }

  // small delay before closing so moving the mouse from the trigger down to the
  // fixed-position dropdown (which sits outside the trigger's own layout box)
  // doesn't get read as "left the menu" and close it before you get there.
  const openMenuHover = (menu) => {
    clearTimeout(closeTimeoutRef.current)
    setOpenMenu(menu)
  }

  const closeMenuHover = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 250)
  }

  useEffect(() => () => clearTimeout(closeTimeoutRef.current), [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 dark:border-white/10 bg-paper/85 dark:bg-black backdrop-blur-lg transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-[72px]">
        {/* logo, extreme left */}
        <Link to="/"><img src="/teps_logo.svg" alt="TEPS Logo" /></Link>

        {/* nav links + right controls, grouped together on the right */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8">
            <NavDropdown
              label="Products"
              title="Products & Services"
              items={PRODUCT_ITEMS}
              isOpen={openMenu === 'product'}
              onEnter={() => openMenuHover('product')}
              onLeave={closeMenuHover}
            />
            <NavDropdown
              label="Resources"
              title="Resources"
              items={RESOURCE_ITEMS}
              isOpen={openMenu === 'resources'}
              onEnter={() => openMenuHover('resources')}
              onLeave={closeMenuHover}
            />
            <Link
              to="/about"
              className="text-sm font-medium text-ink/80 hover:text-ink dark:text-white dark:hover:text-white transition-colors"
            >
              About Us
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsScheduleDemoOpen(true)}
              className="hidden items-center rounded-full border border-blue px-4 py-2 text-sm font-medium text-blue transition-colors hover:bg-blue hover:text-white lg:inline-flex"
            >
              Schedule A Demo
            </button>

            <Link
              to={config.getApiUrl(config.endpoints.LOG_IN)}
              className="hidden sm:inline text-sm font-medium text-ink/80 hover:text-ink dark:text-paper/80 dark:hover:text-paper transition-colors"
            >
              Log in
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="relative flex h-8 w-14 items-center rounded-full border border-ink/15 dark:border-paper/20 bg-ink/5 dark:bg-paper/10 px-1 transition-colors"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-paper dark:bg-ink shadow-sm transition-transform duration-300 ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                }`}
              >
                {theme === 'dark' ? (
                  <IconMoon className="h-3.5 w-3.5 text-paper" />
                ) : (
                  <IconSun className="h-3.5 w-3.5 text-amber" />
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 items-center justify-center text-ink dark:text-white lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* mobile nav panel */}
      <div
        className={`overflow-hidden border-t border-ink/8 transition-all duration-300 dark:border-white/10 lg:hidden ${
          isMobileMenuOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0 border-t-0'
        }`}
      >
        <div className="px-6 py-2">
          <MobileAccordion
            label="Products"
            items={PRODUCT_ITEMS}
            isOpen={openMobileSection === 'product'}
            onToggle={() => setOpenMobileSection((s) => (s === 'product' ? null : 'product'))}
            onNavigate={closeMobileMenu}
          />
          <MobileAccordion
            label="Resources"
            items={RESOURCE_ITEMS}
            isOpen={openMobileSection === 'resources'}
            onToggle={() => setOpenMobileSection((s) => (s === 'resources' ? null : 'resources'))}
            onNavigate={closeMobileMenu}
          />
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="block border-b border-ink/8 py-3.5 text-sm font-medium text-ink dark:border-white/10 dark:text-white"
          >
            About Us
          </Link>
          <Link
            to={config.getApiUrl(config.endpoints.LOG_IN)}
            onClick={closeMobileMenu}
            className="block py-3.5 text-sm font-medium text-ink dark:text-white sm:hidden"
          >
            Log in
          </Link>

          <button
            type="button"
            onClick={() => {
              closeMobileMenu()
              setIsScheduleDemoOpen(true)
            }}
            className="mt-3 mb-4 inline-flex w-full items-center justify-center rounded-full border border-blue px-4 py-2.5 text-sm font-medium text-blue transition-colors hover:bg-blue hover:text-white"
          >
            Schedule A Demo
          </button>
        </div>
      </div>

      <ScheduleDemo isOpen={isScheduleDemoOpen} onClose={() => setIsScheduleDemoOpen(false)} />
    </header>
  )
}