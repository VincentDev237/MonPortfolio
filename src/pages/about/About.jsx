import React from 'react';
import Infos from '../../components/Infos';
import Stat from '../../components/Stat';
import Skills from '../../components/Skills';
import ResumeItem from '../../components/ResumeItem';
import { resume } from '../../data';
import {FaDownload} from 'react-icons/fa'
import CV from "../../assets/Vincent_cv.pdf"
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className="info__list grid">
              <Infos />
            </ul>

            <a href={CV} download='' className="button">
              Download Cv
              <span className="button__icon">
                <FaDownload />
                </span>
              </a>
          </div>

          <div className="stats grid">
            <Stat />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle subtitle__center">My Skills</h3>

        <div className="skills__container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
      <h3 className="section__subtitle subtitle__center">
        Experience & Education
      </h3>

      <div className="resume__container grid">
        <div className="resume__data">
          {resume.map((val) => {
            if (val.category === 'experience') {
              return <ResumeItem key={val.id} {...val}/>
            }
          })}
        </div>

        <div className="resume__data">
          {resume.map((val) => {
            if (val.category === 'education') {
              return <ResumeItem key={val.id} {...val}/>
            }
          })}
        </div>
      </div>
      </section>
    </main>
  )
}

export default About