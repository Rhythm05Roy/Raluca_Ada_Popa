import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const Service = ({ dark }) => {
  const [data, setData] = useState([]);
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(async () => {
    setData(await fatchData("/static/service.json"));
    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(data && data[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Experties</span>
            <h3>What I Love to Do</h3>
            {/* <p>
              Most common methods of working with security is find the bug test with all the possible ricks. Keep Patience & stick with your work.
            </p> */}
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            {parse(data.icon.svg)}
                            {dark ? (
                              <img
                                className="back"
                                src={data.icon.iconBgDark}
                                alt="image"
                              />
                            ) : (
                              <img
                                className="back"
                                src={data.icon.iconBg}
                                alt="image"
                              />
                            )}
                          </span>
                          <div className="title">
                            <h3>{data.title}</h3>
                            {/* <span className="price">
                              Starts from <span>${data.price}</span>
                            </span> */}
                          </div>
                          <div className="text">
                            <p>{data.shortDec}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <img
                            className="popup_service_image"
                            src="img/service/1.jpg"
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;





// {
//   "title": "Data analytics",
//   "price": "299",
//   "img": "img/service/3.jpg",
//   "shortDec": "We are indeed big believers in releasing code whenever possible for our projects. For example, we released code for many of our cryptographic systems projects (e.g., Piranha, Snoopy, MAGE, Cerebro, DORY, Delphi, Muse, JEDI, WAVE, DIZK, Opaque, CryptDB, etc.).",
//   "icon": {
//     "svg": "<svg xmlns='http://www.w3.org/2000/svg' height='480pt' viewBox='0 -28 480 480' width='480pt' class='svg replaced-svg'><path d='m60 404v-324c-.007812-22.09375 17.90625-40.007812 40-40h368.699219c-4.53125-17.667969-20.460938-30.015625-38.699219-30h-380c-22.09375-.007812-40.007812 17.90625-40 40v324c-.007812 22.09375 17.90625 40.007812 40 40h11.300781c-.894531-3.257812-1.332031-6.621094-1.300781-10zm0 0' fill='none'></path><g fill='#000'><path d='m430 0h-380c-27.609375.0117188-49.9882812 22.390625-50 50v324c.0117188 27.609375 22.390625 49.988281 50 50h380c27.609375-.011719 49.988281-22.390625 50-50v-324c-.011719-27.609375-22.390625-49.9882812-50-50zm-380 20h380c16.546875.046875 29.953125 13.453125 30 30v41.699219h-440v-41.699219c.046875-16.546875 13.453125-29.953125 30-30zm380 384h-380c-16.546875-.046875-29.953125-13.453125-30-30v-262.300781h440v262.300781c-.046875 16.546875-13.453125 29.953125-30 30zm0 0'></path><path d='m405.398438 281.101562h-126.5c-5.519532 0-10 4.476563-10 10 0 5.519532 4.480468 10 10 10h126.5c5.523437 0 10-4.480468 10-10 0-5.523437-4.476563-10-10-10zm0 0'></path><path d='m405.398438 339.300781h-126.5c-5.519532 0-10 4.476563-10 10 0 5.523438 4.480468 10 10 10h126.5c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0'></path><path d='m405.398438 164.699219h-126.5c-5.519532 0-10 4.476562-10 10 0 5.523437 4.480468 10 10 10h126.5c5.523437 0 10-4.476563 10-10 0-5.523438-4.476563-10-10-10zm0 0'></path><path d='m405.398438 222.898438h-126.5c-5.519532 0-10 4.480468-10 10 0 5.523437 4.480468 10 10 10h126.5c5.523437 0 10-4.476563 10-10 0-5.519532-4.476563-10-10-10zm0 0'></path></g><path d='m143.398438 258c28.527343.027344 51.675781-23.074219 51.703124-51.601562.027344-28.523438-23.074218-51.671876-51.601562-51.699219-28.527344-.027344-51.671875 23.074219-51.699219 51.601562.035157 28.496094 23.101563 51.605469 51.597657 51.699219zm0-83.300781c12.8125-.019531 24.371093 7.683593 29.28125 19.515625 4.914062 11.832031 2.207031 25.457031-6.851563 34.515625-9.054687 9.058593-22.683594 11.761719-34.511719 6.851562-11.832031-4.914062-19.535156-16.472656-19.515625-29.28125.046875-17.433593 14.167969-31.550781 31.597657-31.601562zm0 0' fill='#000'></path><path d='m143.398438 277.101562c-21.148438-.136718-41.441407 8.347657-56.199219 23.5-15 15.296876-23.199219 36.097657-23.199219 58.699219.015625 5.515625 4.484375 9.984375 10 10h138.898438c5.519531-.015625 9.984374-4.484375 10-10 0-22.601562-8.199219-43.402343-23.199219-58.699219-14.796875-15.15625-35.121094-23.640624-56.300781-23.5zm-58.699219 72.199219c1.714843-13.074219 7.605469-25.246093 16.800781-34.699219 11.066406-11.199218 26.15625-17.5 41.898438-17.5 15.746093 0 30.835937 6.300782 41.902343 17.5 9.175781 9.464844 15.066407 21.628907 16.800781 34.699219zm0 0' fill='#000'></path></svg>",
//     "iconBg": "img/brushes/service/3.png"
//   },
//   "dec": [
//     "I believe that confidential computing, while relatively recent in academic research, will revolutionize data systems in industry in the coming years. By confidential computing here I refer to the combination of hardware security via hardware enclaves and cryptographic techniques. Many organizations have a lot of confidential data that they cannot share between different teams in their organization or different organizations. Sharing it would enable better medical studies, better fraud detection, increased business effectiveness, and other benefits. And unlike purely cryptographic solutions, many of these systems are highly performant and suitable for use in practice. In recent years in academia, there has been a rich amount of work on confidential computing, showing how to enable secure collaboration and how to improve the security of data systems, as well as studying its limitations and improvements. Recently, the major cloud providers have also recognized the potential of confidential computing and have deployed confidential computing clouds. My prediction is that many data systems in the cloud (e.g., data analytics and machine learning) will migrate to use confidential computing platforms in the coming years."
//   ]
// },
// {
//   "title": "Data Encription",
//   "price": "399",
//   "img": "img/service/4.jpg",
//   "shortDec": "As we all know that cyber security is a growing domain with trending and evolving technologies and rising risks. It becomes critical for larger organizations to look after the crucial information assets and the existing security controls.",
//   "icon": {
//     "svg": "<svg xmlns='http://www.w3.org/2000/svg' height='400pt' viewBox='0 -22 400 400' width='400pt' class='svg replaced-svg'><path d='m50 256.007812v-246.015624c-22.089844 0-40 17.910156-40 40v256.015624c0 22.089844 17.910156 40 40 40h300c22.089844 0 40-17.910156 40-40v-10h-300c-22.089844 0-40-17.910156-40-40zm0 0' fill='none'></path><g fill='#000'><path d='m198.410156 99.574219c-17.421875 0-31.59375-14.398438-31.59375-32.105469s14.171875-32.105469 31.59375-32.105469c17.417969 0 31.589844 14.402344 31.589844 32.105469s-14.171875 32.105469-31.589844 32.105469zm0-44.210938c-6.6875-.292969-12.34375 4.890625-12.632812 11.578125-.292969 6.683594 4.890625 12.339844 11.574218 12.632813 6.6875.292969 12.34375-4.890625 12.636719-11.574219.007813-.175781.011719-.351562.011719-.527344.132812-6.542968-5.050781-11.957031-11.589844-12.109375zm0 0'></path><path d='m127.953125 99.574219c-17.417969 0-31.589844-14.398438-31.589844-32.105469s14.171875-32.105469 31.589844-32.105469 31.59375 14.398438 31.59375 32.105469-14.171875 32.105469-31.59375 32.105469zm0-44.210938c-6.683594-.292969-12.339844 4.890625-12.632813 11.578125-.289062 6.683594 4.894532 12.339844 11.578126 12.632813 6.6875.292969 12.34375-4.890625 12.636718-11.574219.007813-.175781.011719-.351562.011719-.527344.132813-6.542968-5.050781-11.957031-11.59375-12.109375zm0 0'></path><path d='m61.816406 99.574219c-17.417968 0-31.589844-14.398438-31.589844-32.105469s14.171876-32.105469 31.589844-32.105469c17.421875 0 31.59375 14.398438 31.59375 32.105469s-14.171875 32.105469-31.59375 32.105469zm0-44.210938c-6.683594-.289062-12.339844 4.894531-12.628906 11.578125-.292969 6.6875 4.890625 12.339844 11.578125 12.632813 6.683594.292969 12.339844-4.890625 12.632813-11.574219.007812-.175781.011718-.351562.011718-.527344.136719-6.542968-5.050781-11.960937-11.59375-12.109375zm0 0'></path></g><path d='m400 50c0-27.613281-22.386719-50-50-50h-300c-27.613281 0-50 22.386719-50 50v256c0 27.613281 22.386719 50 50 50h300c27.613281 0 50-22.386719 50-50zm-350-30h300c16.558594.015625 29.980469 13.433594 30 29.992188v74.007812h-360v-74.007812c.019531-16.558594 13.441406-29.976563 30-29.992188zm300 316h-300c-16.558594-.015625-29.980469-13.433594-30-29.992188v-162.007812h360v162.007812c-.019531 16.558594-13.441406 29.976563-30 29.992188zm0 0' fill='#000'></path></svg>",
//     "iconBg": "img/brushes/service/4.png"
//   },
//   "dec": [
//     "I believe that confidential computing, while relatively recent in academic research, will revolutionize data systems in industry in the coming years. By confidential computing here I refer to the combination of hardware security via hardware enclaves and cryptographic techniques. Many organizations have a lot of confidential data that they cannot share between different teams in their organization or different organizations. Sharing it would enable better medical studies, better fraud detection, increased business effectiveness, and other benefits. And unlike purely cryptographic solutions, many of these systems are highly performant and suitable for use in practice. In recent years in academia, there has been a rich amount of work on confidential computing, showing how to enable secure collaboration and how to improve the security of data systems, as well as studying its limitations and improvements. Recently, the major cloud providers have also recognized the potential of confidential computing and have deployed confidential computing clouds. My prediction is that many data systems in the cloud (e.g., data analytics and machine learning) will migrate to use confidential computing platforms in the coming years."
//   ]
// }
