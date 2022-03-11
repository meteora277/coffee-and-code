const Button = ({ text }) => {
  return (
    <button>
      {text}
      <style jsx>{`
        button {
          background: salmon;
          border: none;
          padding: 1rem 1.6rem;
          color: white;
          border-radius: 1rem;
          margin-right: 1rem;
        }
      `}</style>
    </button>
  );
};

export default Button;
