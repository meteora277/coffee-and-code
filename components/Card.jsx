const Card = ({ header, body }) => {
  return (
    <article>
      <header>
        <h1>{header}</h1>
      </header>
      <p>{body}</p>
      <style jsx>{`
        article {
          max-width: 33%;
        }
      `}</style>
    </article>
  );
};

export default Card;
