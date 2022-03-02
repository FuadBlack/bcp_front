import React from 'react';
import { Link } from 'react-router-dom';
import '../css/_homeServices.sass';

export const HomeServices = () => {
  return (
    <div className="homeServices">
      <div className="title">
        <h2>Xidmətlərimiz</h2>
        <Link to="/services">hamısına bax</Link>
      </div>

      <div className="services">
        <div className="services_item">
          <div className="services_inner">
            <Link to="OurServices_inner" className="website">
              <div className="name">
                <svg
                  width="74"
                  height="63"
                  viewBox="0 0 74 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7104 31.2949L65.2366 14.6383C60.5343 6.58514 50.3393 3.78845 42.4639 8.38694C34.5886 12.9854 32.0081 23.2417 36.7104 31.2949Z"
                    fill="#468680"
                  />
                  <path
                    d="M36.9995 30.7324L8.4734 47.389C13.1757 55.4422 23.3707 58.2389 31.246 53.6404C39.1214 49.0419 41.7018 38.7856 36.9995 30.7324Z"
                    fill="#468680"
                  />
                </svg>
                <h3>Veb saytlar</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="marketing">
              <div className="name">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.0664062L-1.99505e-06 35.9253C10.1233 35.9253 18.3255 27.899 18.3255 17.9992C18.3255 8.09945 10.1233 0.0664068 0 0.0664062Z"
                    fill="#468680"
                  />
                  <path
                    d="M19.5222 17.9266C19.5222 8.92604 26.724 1.53451 35.8477 1.02816L35.8477 34.8317C26.7245 34.3249 19.5222 26.9275 19.5222 17.9266Z"
                    stroke="#468680"
                    stroke-width="2"
                  />
                </svg>

                <h3>Rəqəmsal marketinq</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="design">
              <div className="name">
                <svg
                  width="31"
                  height="58"
                  viewBox="0 0 31 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8047 0.777344L16.0174 30.0964C24.2944 30.0363 30.9531 23.4252 30.8944 15.3309C30.8357 7.23664 24.0817 0.717295 15.8047 0.777344Z"
                    fill="#468680"
                  />
                  <path
                    d="M16.1104 57.2227L15.8976 27.9036C7.62061 27.9637 0.961922 34.5748 1.02065 42.6691C1.07937 50.7634 7.83332 57.2827 16.1104 57.2227Z"
                    fill="#468680"
                  />
                </svg>
                <h3>UX/UI dizayn</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="video">
              <div className="name">
                <svg
                  width="35"
                  height="36"
                  viewBox="0 0 35 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="17.0746"
                    cy="17.0741"
                    r="16.0741"
                    stroke="#468680"
                    stroke-width="2"
                  />
                  <path
                    d="M17.0746 35.4608C26.5043 35.4608 34.1486 27.8165 34.1486 18.3867H0.000488281C0.000488281 27.8165 7.64481 35.4608 17.0746 35.4608Z"
                    fill="#468680"
                  />
                </svg>
                <h3>Video çəkilişlər</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
          </div>
          <div className="services_inner">
            <Link to="OurServices_inner" className="brending">
              <div className="name">
                <svg
                  width="39"
                  height="40"
                  viewBox="0 0 39 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.132324 39.8711L38.9319 39.8711C38.9319 28.9176 30.2474 20.0428 19.5357 20.0428C8.82412 20.0428 0.132324 28.9176 0.132324 39.8711Z"
                    fill="#468680"
                  />
                  <path
                    d="M38.8628 0L0.0632515 -1.69598e-06C0.063251 10.9535 8.74774 19.8283 19.4594 19.8283C30.171 19.8283 38.8628 10.9535 38.8628 0Z"
                    fill="#468680"
                  />
                </svg>
                <h3>Brendinq</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="film">
              <div className="name">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18.5005"
                    cy="18.5"
                    r="17.5"
                    stroke="#468680"
                    stroke-width="2"
                  />
                </svg>
                <h3>Film çəkilişləri</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="teqdimat">
              <div className="name">
                <svg
                  width="63"
                  height="32"
                  viewBox="0 0 63 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.7461 15.6152L0.998599 15.8383C1.06157 24.5186 7.9948 31.5017 16.4834 31.4401C24.9721 31.3785 31.8091 24.2955 31.7461 15.6152Z"
                    fill="#468680"
                  />
                  <path
                    d="M46.5238 1.11063C54.1131 1.05558 60.4034 7.04441 60.9616 14.72L32.2793 14.9281C32.7264 7.24562 38.9341 1.1657 46.5238 1.11063Z"
                    stroke="#468680"
                    stroke-width="2"
                  />
                </svg>
                <h3>BTL və Təqdimatlar</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="it">
              <div className="name">
                <svg
                  width="42"
                  height="43"
                  viewBox="0 0 42 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.078125 42.668L41.6002 42.668C41.6002 30.9459 32.3063 21.4484 20.8431 21.4484C9.37982 21.4484 0.0781251 30.9459 0.078125 42.668Z"
                    fill="#468680"
                  />
                  <path
                    d="M20.7585 20.2196C10.1944 20.2196 1.5346 11.7236 1.02509 0.999998L40.4997 1C39.9898 11.7231 31.323 20.2196 20.7585 20.2196Z"
                    stroke="#468680"
                    stroke-width="2"
                  />
                </svg>
                <h3>İT-Kommunikasiya</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
          </div>
          <div className="services_inner">
            <Link to="OurServices_inner" className="mobilapp">
              <div className="name">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="#468680" />
                </svg>
                <h3>Mobil tətbiqlər</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="server">
              <div className="name">
                <svg
                  width="36"
                  height="66"
                  viewBox="0 0 36 66"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.3787 17.0614C34.4438 26.0283 27.1973 33.3996 18.068 33.7244L17.8279 0.630389C26.9608 0.822941 34.3137 8.09421 34.3787 17.0614Z"
                    stroke="#468680"
                  />
                  <path
                    d="M17.6797 65.791L17.4322 31.6829C7.80321 31.7528 0.0568716 39.4438 0.125186 48.8602C0.193501 58.2766 8.05066 65.8609 17.6797 65.791Z"
                    fill="#468680"
                  />
                </svg>
                <h3>Server / Hostinq</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="record">
              <div className="name">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39 38.2031L39 0.251167C28.2858 0.251167 19.6049 8.74595 19.6049 19.2236C19.6049 29.7012 28.2858 38.2031 39 38.2031Z"
                    fill="#468680"
                  />
                  <path
                    d="M18.8951 19.3018C18.8951 29.33 10.7166 37.5087 0.499998 37.7679L0.5 0.828606C10.7163 1.088 18.8951 9.27345 18.8951 19.3018Z"
                    stroke="#468680"
                  />
                </svg>
                <h3>Səsyazma və musiqi xidməti</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
            <Link to="OurServices_inner" className="threeD">
              <div className="name">
                <svg
                  width="38"
                  height="37"
                  viewBox="0 0 38 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 35.1899C8.99037 35.1899 1 27.6515 1 18.5002C1 9.34886 8.99038 1.81055 19 1.81055C29.0096 1.81055 37 9.34886 37 18.5002C37 27.6515 29.0096 35.1899 19 35.1899Z"
                    stroke="#468680"
                    stroke-width="2"
                  />
                  <path
                    d="M-0.00107652 18.5002C-0.00107694 28.2699 8.21218 36.1899 18.3437 36.1899L18.3438 0.810547C8.21218 0.810546 -0.00107609 8.73047 -0.00107652 18.5002Z"
                    fill="#468680"
                  />
                </svg>
                <h3>3d modelləmə</h3>
              </div>
              <p>
                Business audit, marketing strategy, positioning, check cashing
                franchise
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
