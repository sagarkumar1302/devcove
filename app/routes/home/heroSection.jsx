import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './heroSection.module.css';
export const HeroSection = () => {
  return (
    <>
      <div
        // className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        className={styles.heroContainer}
      >
        <p className={styles.herop}>Hi, we’re DevsCove.</p>
        {/* <p className="text-xl mb-5">Hey, I'm Brayden.</p> */}
        <h1
          className={styles.heroh1}
          // className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg"
        >
          We craft modern  <span className={styles.heroShiny2}>websites</span> that turn your{' '}
          <span className={styles.heroShiny2}>ideas</span> into stunning online experiences.
          <img
            className={styles.img}
            // className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: '0.1s', width: '4rem', top: '-90px', right: '5%' }}
            src="/static/hero/dotnet.png"
            alt="HTML"
          />
          <img
            className={styles.img}
            // className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{
              animationDelay: '0.2s',
              width: '2.75rem',
              right: '0px',
              top: '75px',
            }}
            alt="Next.js"
            src="/static/hero/mongo.png"
          />
          {/* <img
            className={styles.img}
            style={{
              animationDelay: '0.3s',
              width: '300px',
              bottom: '-200px',
              right: '-25%',
              opacity: '0.7',
              rotate: '-20deg',
            }}
            src="/static/hero/coder1.png"
          /> */}
          <img
            className={styles.img}
            // className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: '0.4s',width : "100px", bottom: '-40px', left: '-180px', opacity: '0.7' }}
            src="/static/hero/react.png"
          />
          <img
            className={styles.img}
            // className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
            style={{ animationDelay: '0.5s', right: '200px', bottom: '-150px', opacity: '0.7', width: '100px', rotate: '20deg' }}
            src="/static/hero/js.png"
          />
          {/* <img
            className={styles.img}
            // className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: '0.6s', bottom: '-320px', right: '65%' }}
            src="/static/hero/dino.svg"
          /> */}
          <img
            className={styles.img}
            // className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: '0.7s', bottom: '-180px', left: '60px', width: '100px', rotate: '20deg', opacity: '0.7' }}
            src="/static/hero/nodejs.png"
          />
          <img
            className={styles.img}
            // className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            style={{ animationDelay: '0.8s', top: '-130px', left: '15%' }}
            alt="Pop1"
            src="/static/hero/pop1.png"
          />
          <img
            className={styles.img}
            // className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
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
          {/* <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            Tell me more
          </div> */}
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
