import CallToAction from "../components/CallToAction";

const Projects = () => {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects Ideas</h1>
      <p className="text-md text-gray-500">
        Interested in web development? Explore these projects to enhance your
        web development skills.
      </p>
      <CallToAction />
    </div>
  );
};

export default Projects;
