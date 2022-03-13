import Button from "./Button";

const MissionStatement = () => {
  return (
    <section>
      <div className="container">
        <h1>
          Being a full stack developer means that I have the tools needed to
          work on every part of a project.
        </h1>
        <p>
          I am able to leverage knowledge gained through past experiences to
          bridge the gap between design and technical implementation. I am a
          team player that is able to collaborate with peers, by being
          enthusiastic, giving constructive assessments, and empowering those
          around me.
        </p>
        <Button
          className="button"
          text="View Skills"
          styles="align-self: center;"
        />
      </div>
      <style jsx>{`
        section {
          height: 100vh;
        }
        h1 {
          color: salmon;
          font-size: 3rem;
          margin: 0 auto;
          max-width: 720px;
          text-align: center;
        }
        p {
          max-width: 1080px;
          margin: 2rem auto;
          color: grey;
          font-size: 1.4rem;
          text-align: center;
        }
        .container {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default MissionStatement;
