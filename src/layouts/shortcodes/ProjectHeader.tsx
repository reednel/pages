import React from "react";
import { FaGithubSquare } from "react-icons/fa/index.js";

const ProjectHeader = ({
    title,
    technologies,
    github,
}: {
    title: string;
    technologies?: Array<string>;
    github?: string;
}) => {
  return (
    <div>
        <div className="mt-12">
            <h3> {title} </h3>
        </div>
        <div className="-mt-4">
            {github &&
                <a href={github} target="blank">
                    <FaGithubSquare className={"text-light -mt-1 mr-0.5 inline-block h-8 w-8"} />
                </a>
            }
            {
                technologies?.map((element) => {
                    return (
                        <li className="inline-block h-8">
                          <div className="m-1  block border border-light bg-transparent text-light rounded-sm px-2 dark:text-darkmode-light dark:border-darkmode-light">
                            {element}
                          </div>
                        </li>
                      );
                })
            }
        </div>
    </div>
  );
};

export default ProjectHeader;
