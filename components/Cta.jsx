import Button from "./Button";

const Cta = () => {
  return (
    <article>
      <div className="custom-shape-divider-top-1647023911">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="heading">
        <h1>Junior Web Developer and long time Coffee Enthusiast</h1>
      </section>
      <Button text="More.." />
      <Button text="Contact Me ->" />

      <style jsx>{`
        article {
          height: 720px;
          padding: 2rem;
        }
        h1 {
          margin: 0;
          color: salmon;
          font-size: 4rem;
        }
        .heading {
          height: 600px;
        }
        .custom-shape-divider-top-1647023911 {
          z-index: -10;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .custom-shape-divider-top-1647023911 svg {
          position: relative;
          display: block;
          width: calc(200% + 1.3px);
          height: 100vh;
          transform: translateX(-25%);
        }

        .custom-shape-divider-top-1647023911 .shape-fill {
          fill: #ffdcdc;
        }
      `}</style>
    </article>
  );
};

export default Cta;
