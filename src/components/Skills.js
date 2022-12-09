import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  useEffect(async () => {
    setData(await fatchData("/static/info.json"));
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Research Expertise and Interest</span>
                <h3>Computer security, applied Cryptography </h3>
                <p>
                I am a Robert E. and Beverly A. Brooks associate professor at UC Berkeley. I am interested in security, systems, and applied cryptography. I co-founded the RISELab and Skylab, whose aim is to build systems that are secure and intelligent. I am also a co-founder of PreVeil and Opaque, two security startups based on my research.<br/>Before joining UC Berkeley, I did a one-year postdoc at ETH Zürich in the System Security group led by Prof. Srdjan Capkun. Before that, I completed my Ph.D. in computer science at MIT, my thesis being about building practical systems that compute on encrypted data. I earned my Masters of Engineering in Computer Science in 2010 and two Bachelors in Computer Science and Mathematics in 2009 from MIT. 
                </p>
              </div>
              {/* <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.skills &&
                  data.skills.map((skill, i) => (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill.value}
                      data-color={skill.color}
                      key={i}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.value}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div> */}
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
