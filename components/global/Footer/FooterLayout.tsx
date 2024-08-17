import { urlForImage } from '@/sanity/lib/utils'
import Link from 'next/link'

interface FooterProps {
  settings: any
  footer: any
}
export default function Footer(props: FooterProps) {
  const { settings, footer } = props

  const logoUrl =
    settings.logo &&
    urlForImage(settings.logo)?.height(120).width(175).fit('crop').url()

  return (
    <footer className="main-footer black-bg">
      <div className="container">
        <div className="footer-widget-area pt-75 pb-30">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget about-company-widget mb-40">
                <h4 className="widget-title">About</h4>
                <div className="footer-content">
                  <p>{footer.about}</p>
                  <a href="#" className="footer-logo">
                    <img src={logoUrl} alt="Site Logo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="footer-widget service-nav-widget mb-40 pl-lg-70">
                <h4 className="widget-title">Tours</h4>
                <div className="footer-content">
                  <ul className="footer-widget-nav">
                    <li>
                      <Link href="#">Caravan Soler </Link>
                    </li>
                    <li>
                      <a href="#">Family Tent Camping</a>
                    </li>
                    <li>
                      <a href="#">Classic Tent Camping</a>
                    </li>
                    <li>
                      <a href="#">Wild Tent Camping</a>
                    </li>
                    <li>
                      <a href="#">Small Cabin Wood</a>
                    </li>
                  </ul>
                  <ul className="footer-widget-nav">
                    <li>
                      <a href="#">Need a Career ?</a>
                    </li>
                    <li>
                      <a href="#">Latest News &amp; Blog</a>
                    </li>
                    <li>
                      <a href="#">Core Features</a>
                    </li>
                    <li>
                      <a href="#">Meet Our teams</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
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
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-text">
                <p>
                  Copy@ 2023 <span style={{ color: '#F7921E' }}>GoWilds</span>,
                  All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-nav float-lg-end">
                <ul>
                  <li>
                    <a href="#">Setting &amp; privacy</a>
                  </li>
                  <li>
                    <a href="#">Faqs</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
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
