import Link from "next/link";
import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";

export default function Header() {
  const [showNav, setShowNav] = useState(true);
  const [onScroll, setOnScroll] = useState(false);
  const breakpointDesktop = 991.95

  const verifyWindowToShowNav = () => window.innerWidth < breakpointDesktop ? setShowNav(false) : setShowNav(true)
  const verifyScroll = () => window.scrollY > 30 ? setOnScroll(true) : setOnScroll(false)

  useEffect(() => {
    verifyWindowToShowNav()
    verifyScroll()
    window.addEventListener('resize', verifyWindowToShowNav)
    window.addEventListener('scroll', verifyScroll)
  }, []);

  useEffect(() => {
    if (window.innerWidth < breakpointDesktop) {
      if (showNav && window.scrollY <= 30) {
        setOnScroll(true)
      } else if (!showNav && window.scrollY <= 30) {
        setOnScroll(false)
      }
    }
  });

  return(
    <header className={`${onScroll && 'on-scroll'}`}>
      <nav className="container">
        <Link href={'/'}>
          <img src="/vercel.svg" alt="" />
        </Link>
        <button className="btn p-0 btn-toggle-nav d-lg-none" onClick={() => setShowNav(!showNav)}>
          <ion-icon name="menu-outline" />
        </button>
        <div className="col-12 col-lg-auto">
          <Collapse isOpened={showNav}>
            <ul>
              <li>
                <Link href={'/'}>
                  <a title="alguma coisa">
                    Exemplo
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a title="alguma coisa">
                    Exemplo
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a title="alguma coisa">
                    Exemplo
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a title="alguma coisa">
                    Exemplo
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <a title="alguma coisa">
                    Exemplo
                  </a>
                </Link>
              </li>
            </ul>
          </Collapse>
        </div>
      </nav>
    </header>
  )
}