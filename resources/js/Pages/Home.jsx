const Home = ({ test }) => {
  return (
    <>
      <h1 className="title">Home {test}</h1>
      <h1>Learning Laravel | Notes App</h1>
      <p>Click the button to see notes.</p>

      <a href="/notes" className="btn mt-4 inline-block">
        View notes
      </a>
    </>
  );
};

export default Home;
