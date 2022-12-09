import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={64} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Research Paper
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={3} />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Theses
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a associate professor of computer science at UC Berkeley`}</span>
                {/* <h3>I am a associate professor of computer science at UC Berkeley</h3> */}
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {`I am an associate professor at UC Berkeley. I am interested in security, systems, and applied cryptography. I co-founded and co-direct the RISELab and SkyLab, labs aiming to build secure intelligent systems for the cloud and for the sky of clouds, respectively, and the DARE program for promoting diversity and equity. As faculty, I was awarded the ACM Grace Murray Hopper award 2021, a Sloan Research Fellowship, J. Lepreau Best Paper Award, Distinguished Paper Award, J. and D. Gray Award for Excellence in Undergraduate Teaching of Computer Science, Microsoft Research Faculty Fellowship, NSF CAREER, Bakar Faculty Fellowship, and I was selected to the list of 35 innovators under 35 by MIT Technology Review. `}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default About;
