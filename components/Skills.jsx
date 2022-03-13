import Card from "./Card";

const Skills = () => {
  return (
    <article>
      <section>
        <Card
          header="Potato"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet consectetur reprehenderit, quibusdam et voluptatum architecto. Iste, expedita consequuntur. Mollitia nihil debitis dolorum temporibus necessitatibus rem eveniet nostrum corrupti ullam."
        />
        <Card
          header="Potato"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet consectetur reprehenderit, quibusdam et voluptatum architecto. Iste, expedita consequuntur. Mollitia nihil debitis dolorum temporibus necessitatibus rem eveniet nostrum corrupti ullam."
        />
        <Card
          header="Potato"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet consectetur reprehenderit, quibusdam et voluptatum architecto. Iste, expedita consequuntur. Mollitia nihil debitis dolorum temporibus necessitatibus rem eveniet nostrum corrupti ullam."
        />
      </section>
      <style jsx>{`
        article {
          height: 100vh;
          display: grid;
          place-items: center;
        }
        section {
          display: flex;
        }
      `}</style>
    </article>
  );
};

export default Skills;
