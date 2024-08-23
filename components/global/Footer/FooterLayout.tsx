import { urlForImage } from '@/sanity/lib/utils'
import Link from 'next/link'

export default function Footer(props: any) {
  const { data } = props

  const { logoLarge } = data.settings

  const logoUrl =
    logoLarge && urlForImage(logoLarge)?.height(120).width(175).fit('crop').url()

  return (
    <footer className="main-footer black-bg">
      <div className="container">
        <div className="footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget about-company-widget mb-40">
                <h4 className="widget-title">About</h4>
                <div className="footer-content">
                  <p>{data.footer.about}</p>
                  <Link href="/" className="footer-logo">
                    <img src={logoUrl} alt="Site Logo" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-3 offset-lg-2 col-md-6">
              <div className="footer-widget service-nav-widget mb-40 pl-lg-40">
                <h4 className="widget-title">Tours</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav" style={{ width: '100%' }}>
                    <li>
                      <Link href="/west-tour-madeira">West Tour</Link>
                    </li>
                    <li>
                      <Link href="/east-tour-madeira">East Tour</Link>
                    </li>
                    <li>
                      <Link href="/private-tour-madeira">Private Tour</Link>
                    </li>
                    <li>
                      <Link href="/wine-tour-madeira">Wine Tasting Tour</Link>
                    </li>
                    <li>
                      <Link href="/rock-climbing-madeira">Climbing Tour</Link>
                    </li>
                    <li>
                      <Link href="/climb-pico-das-torres">
                        Pico Das Torres Summit
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget service-nav-widget mb-40 pl-lg-40">
                <h4 className="widget-title">Links</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav" style={{ width: '100%' }}>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*<div className="col-lg-4 col-md-6">
              <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100">
                <h4 className="widget-title">Newsletter</h4>
                <div className="footer-content">
                  <p>
                    Which of us ever undertake laborious physical exercise
                    except obtain
                  </p>
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-paper-plane" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-text">
                <p>
                  Copy@ {new Date().getFullYear()}{' '}
                  <span style={{ color: '#F7921E' }}>Remote Madeira</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-nav float-lg-end">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
