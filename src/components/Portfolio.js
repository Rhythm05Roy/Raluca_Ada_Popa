import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
            Computer security, applied Cryptography 
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Student
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  Teaching
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Award
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Service
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Research Papers"
                    data-category="See Details"
                  >
                    <a
                      className="popup-youtube"
                      href="https://conferences.sigcomm.org/hotnets/2022/"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Research Paper</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Research Paper"
                    data-category="See Detailss"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.usenix.org/conference/usenixsecurity22"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/7.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Research Paper</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Research Papers"
                    data-category="See Details"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.ieee-security.org/TC/SP2022/"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/8.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Research Paper</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="My Students"
                    data-category="See Detais"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://pratyushmishra.com/"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/s1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>My Students</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="My Students"
                    data-category="See Details"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://www.chenweikeng.com/"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/s2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>My Students</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="My Students"
                    data-category="See Details"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://people.eecs.berkeley.edu/~samkumar/"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/s3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>My Students</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Teaching"
                    data-category="See Details"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://fa21.cs161.org/"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/t3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Teaching</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Teaching"
                    data-category="See Details"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://inst.eecs.berkeley.edu/~cs276/fa20//"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/t2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Teaching</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Teaching"
                    data-category="See Details"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://sp20.cs161.org/"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/t1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Teaching</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Awards"
                    data-category="See Details"
                  >
                    <a className="zoom" href="https://www.ieee-security.org/TC/EuroSP2022/accepted_and_awards.html">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/a1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Awards</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Awards"
                    data-category="See Details"
                  >
                    <a className="zoom" href="https://awards.acm.org/hopper">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/a2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Awards</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Awards"
                    data-category="See Details"
                  >
                    <a className="zoom" href="https://www.microsoft.com/en-us/research/blog/investing-in-leading-minds-microsoft-research-faculty-fellowship/">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/a3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Awards</h3>
                    <span>See Details</span>
                  </div>
                </div>
              </li>
              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}

              <li className="detail grid-item" >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Services"
                    data-category="See Details"
                  >
                    <a className="portfolio_popup" href="https://sosp2023.mpi-sws.org/">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sr1.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Services</h3>
                    <span>See Detail</span>
                  </div>
                </div>
              </li>
              <li className="detail grid-item" >
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Services"
                    data-category="See Details"
                  >
                    <a className="portfolio_popup" href="https://sosp2021.mpi-sws.org/">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sr2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Services</h3>
                    <span>See Detail</span>
                  </div>
                </div>
              </li>
              <li className="detail grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Services"
                    data-category="See Details"
                  >
                    <a className="portfolio_popup" href="https://www.usenix.org/conference/usenixsecurity16/technical-sessions">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sr3.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Services</h3>
                    <span>See Detail</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
