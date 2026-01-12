import AnimatedButton from "@/components/animation/AnimatedButton";
import Counter from "@/components/common/Counter";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mxd-section">
      <div className="mxd-hero-09">
        <div className="mxd-hero-09__wrap loading-wrap">
          <div className="mxd-hero-09__headline">
            <div className="hero-09-headline__caption loading__item">
              <p>
                Award-winning creative projects, over ten years of digital
                experience.
              </p>
            </div>
            <div className="hero-09-headline__title loading__item">
              <h1 className="hero-09-headline__hidden">Charlie Cooke</h1>
              <img
                className="hero-09-svg-mobile"
                src="/img/logo/Digital-Designer-Stacked.svg"
              />
              <img
                className="hero-09-svg-desktop"
                src="/img/logo/Digital-Designer.svg"
              />
            </div>
            <div className="hero-09-headline__tags loading__fade">
              <span className="tag tag-default tag-outline">
                Interactive design
              </span>
              <span className="tag tag-default tag-outline">
                Web experience
              </span>
              <span className="tag tag-default tag-outline">Frontend</span>
              <span className="tag tag-default tag-outline">Web design</span>
              <span className="tag tag-default tag-outline">Branding</span>
              <span className="tag tag-default tag-outline">UI</span>
              <span className="tag tag-default tag-outline">UX</span>
              <span className="tag tag-default tag-outline">
                Graphic design
              </span>
              <span className="tag tag-default tag-outline">Print design</span>
              <span className="tag tag-default tag-outline">Illustration</span>
              <span className="tag tag-default tag-outline">Motion design</span>
              <span className="tag tag-default tag-outline">3d modeling</span>
              <span className="tag tag-default tag-outline">Video editing</span>
            </div>
          </div>
          <div className="mxd-hero-09__objects">
            <div className="hero-09-objects__image loading__item">
              <Image
                className="mxd-move"
                alt="Hero Image"
                src="/img/hero/22_hero-img.webp"
                width={915}
                height={1157}
              />
            </div>
            <div className="hero-09-objects__item item-01 loading__item">
              <div className="mxd-counter horizontal">
                <p
                  id="stats-counter-1"
                  className="mxd-counter__number mxd-stats-number xsmall"
                >
                  <Counter max={15} />+
                </p>
                <p className="mxd-counter__descr t-140 t-bright t-small">
                  Years of
                  <br />
                  experience
                </p>
              </div>
            </div>
            <div className="hero-09-objects__item item-02 loading__item">
              <div className="mxd-counter horizontal">
                <p
                  id="stats-counter-2"
                  className="mxd-counter__number mxd-stats-number xsmall"
                >
                  <Counter max={70} />+
                </p>
                <p className="mxd-counter__descr t-140 t-bright t-small">
                  Successful
                  <br />
                  projects
                </p>
              </div>
            </div>
            <div className="hero-09-objects__item item-03 loading__item">
              <div className="mxd-hero__mark">
                <span className="mark-icon" />
                <span className="mark-text">Available for freelance</span>
              </div>
            </div>
          </div>
          {/* scroll for more */}
          <div className="mxd-hero-09__more loading__fade">
            <AnimatedButton
              text="Scroll for more"
              as={"a"}
              className="btn btn-line-default btn-anim slide-down"
              href="#projects"
            >
              <i className="ph-bold ph-arrow-elbow-right-down" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
