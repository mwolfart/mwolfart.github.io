import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const githubUrl = "https://github.com/mwolfart";
const linkedinUrl = "https://www.linkedin.com/in/murilo-wolfart/";
const email = "mwolfart@gmail.com";

const linkClasses =
  "no-underline inline-flex gap-4 items-center bg-copy text-background py-4 px-8 rounded-full font-semibold w-fit transition hover:bg-primary";

export const ContactPage = () => {
  return (
    <div className="flex-grow flex flex-col gap-8">
      <p>Get in touch with me!</p>
      <div className="h-[1px] bg-copy w-full" />
      <div className="flex-grow flex flex-col gap-8">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          <FaGithub size={42} />
          <span>GitHub profile</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          <FaLinkedin size={42} />
          <span>LinkedIn profile</span>
        </a>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          className={linkClasses}
        >
          <MdEmail size={42} />
          <span>E-mail address</span>
        </a>
      </div>
      <div className="h-[1px] bg-copy w-full" />
    </div>
  );
};
