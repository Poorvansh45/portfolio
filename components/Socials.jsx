import Link from "next/link";

import {
  RiGithubLine,
  RiLinkedinLine,
  RiCodeSSlashLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Github",
    link: "https://github.com/Poorvansh45",
    Icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    Icon: RiLinkedinLine,
  },
  {
    name: "LeetCode",
    link: "https://leetcode.com/u/Poorvansh45/",
    Icon: RiCodeSSlashLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
