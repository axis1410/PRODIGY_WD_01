const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        Scroll down to see the effect
      </div>
      <div
        id="second-page"
        className="flex flex-col justify-center items-center min-h-screen bg-indigo-500"
      >
        Second Page
      </div>
    </div>
  );
};

export default Home;
