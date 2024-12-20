import { Button } from "flowbite-react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about coding?</h2>
        <p className="text-gray-500 my-2">
          Checkout these projects to improve your coding skills.
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.100jsprojects.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            100 coding Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="/coding.jpg"
          alt="coding"
          className="rounded-tl-3xl rounded-br-3xl w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CallToAction;
