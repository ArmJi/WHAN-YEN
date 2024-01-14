import "./Hero.css";
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";
import hero4 from "../assets/hero/hero4.png";
import hero5 from "../assets/hero/hero5.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="relative flex justify-center">
        <div className="hero_background bg-tertiary"></div>
        <img className="hero_img_1 absolute" src={hero1} alt=""></img>
        <img className="hero_img_2 absolute" src={hero2} alt=""></img>
        <img className="hero_img_3 absolute" src={hero3} alt=""></img>
        <img className="hero_img_4 absolute" src={hero4} alt=""></img>
        <img className="hero_img_5 absolute" src={hero5} alt=""></img>
        <h1 className="hero_logo absolute text-primary font-primary">
          Whan-Yen
        </h1>
      </div>
    </section>
  );
};
export default Hero;
