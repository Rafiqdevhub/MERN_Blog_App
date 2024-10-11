const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            Blog Hub
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Blog Hub App! This blog was created for learning of
              coding and programming.
            </p>

            <p>
              In this blog you can find articles and tutorials about web
              development, software engineering, and programming languages.
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people&apos;s comments and reply
              to them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
