import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './heroSection.module.css';
export const HeroSection = () => {
  return (
    <>
      <div
        className={styles.heroContainer}
      >
        <p className={styles.herop}>Hi, we’re DevsCove.</p>
        <h1
          className={styles.heroh1}
        >
          We craft modern  <span className={styles.heroShiny2}>websites</span> that turn your{' '}
          <span className={styles.heroShiny2}>ideas</span> into stunning online experiences.
          <img
            className={styles.img}
            style={{ animationDelay: '0.1s', width: '4rem', top: '-90px', right: '5%' }}
            src="/static/hero/dotnet.png"
            alt="HTML"
          />
          <img
            className={styles.img}
            style={{
              animationDelay: '0.2s',
              width: '2.75rem',
              right: '0px',
              top: '75px',
            }}
            alt="Next.js"
            src="/static/hero/mongo.png"
          />
          <img
            className={styles.img}
            style={{ animationDelay: '0.4s',width : "100px", bottom: '-40px', left: '-180px', opacity: '0.7' }}
            src="/static/hero/react.png"
          />
          <img
            className={styles.img}
            style={{ animationDelay: '0.5s', right: '200px', bottom: '-150px', opacity: '0.7', width: '100px', rotate: '20deg' }}
            src="/static/hero/js.png"
          />
          <img
            className={styles.img}
            style={{ animationDelay: '0.7s', bottom: '-180px', left: '60px', width: '100px', rotate: '20deg', opacity: '0.7' }}
            src="/static/hero/nodejs.png"
          />
          <img
            className={styles.img}
            style={{ animationDelay: '0.8s', top: '-130px', left: '15%' }}
            alt="Pop1"
            src="/static/hero/pop1.png"
          />
          <img
            className={styles.img}
            style={{
              animationDelay: '0.9s',
              bottom: '-85px',
              right: '-35px',
              opacity: '0.7',
            }}
            alt="Pop2"
            src="/static/hero/code.png"
          />
        </h1>
        <ScrollLink
          activeClass="active"
          to="learnmore"
          spy={true}
          offset={-30}
          smooth={true}
          duration={500}
        >
          <div style={{  position: 'absolute' }}>
            <div className={styles.wrapper}>
              <a href="#" className={styles.al}>
                <span className={styles.span}>Start a Project</span>
              </a>
            </div>
          </div>
        </ScrollLink>
      </div>
    </>
  );
};
