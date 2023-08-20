import React from "react";
import { FaGithub } from "react-icons/fa/index.js";

const ProjectHeader = ({
    title,
    tech,
    github,
}: {
    title: string;
    content?: string;
    github?: string;
}) => {
  return (
    <div>
        <div className="mt-8">
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="">
            {github ? 
                <a href={github} target="blank">
                    <FaGithub className={"mr-1 -mt-1 inline-block"} />
                </a>: ""
            }
            {tech}
        </div>
    </div>
  );
};

export default ProjectHeader;
