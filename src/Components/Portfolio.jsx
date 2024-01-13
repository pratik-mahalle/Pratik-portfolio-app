/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Build an AI text summerizer app🎉",
    description:
      "Introducing my AI Text Summarizer App - a powerful tool designed to distill lengthy documents, articles, or paragraphs into concise and informative summaries. Leveraging advanced natural language processing algorithms, this app employs cutting-edge AI technology to identify key insights, delivering time-efficient and digestible summaries. Whether you're a student, professional, or avid reader, streamline your information consumption with precision and speed using this innovative AI Text Summarizer App.",
    url: "https://github.com/pratik-mahalle/ai-summerizer-app",
  },
  {
    title: "Microsoft Student Ambassador",
    description:
      "Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future",
    url: "https://mvp.microsoft.com/studentambassadors/certificate/3c2fea10-f3a9-472a-979e-71b88b705001",
  },
  {
    title: "Postman Student Expert",
    description:
      "Adept in API testing, collaboration, and automation through hands-on experience with the industry-leading Postman platform. Proficient in designing, testing, and documenting APIs, with a recognized credential showcasing expertise in modern software development.      Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
