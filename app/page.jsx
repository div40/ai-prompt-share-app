import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Share and Find <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Prompts</span>
      </h1>
      <p className="desc text-center">
        An open source tool for everyone to discover, share or create AI
        prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
