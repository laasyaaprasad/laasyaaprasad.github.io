import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    if (this.props.resumeExperience && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.experience;
      var work = this.props.resumeExperience.map((work, i) => {
        const technologies = work.technologies;
        const mainTechnologies = work.mainTech;

        // Render main technologies
        var mainTech = mainTechnologies.map((technology, i) => {
          return (
            <Badge pill className="main-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        // Render other technologies
        var tech = technologies.map((technology, i) => {
          return (
            <Badge pill className="experience-badge mr-2 mb-2" key={i}>
              {technology}
            </Badge>
          );
        });

        // Render bullet points from the content field
        var bulletPoints = work.content?.map((point, i) => (
          <li key={i} style={{ marginBottom: "8px" }}>
            {point}
          </li>
        ));

        // Determine the icon based on the index
        let iconElement;
        if (i === 0) {
          // First icon: wolters_kluwer.png
          iconElement = (
            <img
              src= "images/Wolters_Kluwer.png"
              alt="Wolters Kluwer"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else if (i === 1) {
          // First icon: Validifi.png
          iconElement = (
            <img
              src="images/Validifi.png"
              alt="Validifi"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else if (i === 2) {
          // Second icon: Cisco.png
          iconElement = (
            <img
              src="images/Cisco.png"
              alt="Cisco"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else if (i === 3) {
          // Third icon: krtrimaiq.jpg
          iconElement = (
            <img
              src="images/krtrimaiq.jpeg"
              alt="Krtrimaiq"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else if (i === 4) {
          // Fourth icon: HPE.png
          iconElement = (
            <img
              src="images/HPE.png"
              alt="HPE"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          );
        } else {
          // Triangle icon for subsequent elements
          iconElement = <i className="fab fa-angular experience-icon"></i>;
        }

        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={work.years}
            iconStyle={{
              background: "#FFFFFF", // Default white background for all icons
              color: "#fff",
              textAlign: "center",
              boxShadow: "0 0 15px 5px #7B6FAD",
              border: "2px solid #FFFFFF", // Reduced white border thickness
            }}
            icon={iconElement}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              {mainTech}
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {work.title}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {work.company}
            </h4>
            <div style={{ textAlign: "left", marginTop: "15px" }}>{tech}</div>

            {/* Render bullet points */}
            {bulletPoints && (
              <ul
                style={{
                  textAlign: "left",
                  marginTop: "15px",
                  paddingLeft: "20px",
                  listStyleType: "disc",
                }}
              >
                {bulletPoints}
              </ul>
            )}
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#6E5AAD", // Dark purple background color
                color: "#FFFFFF", // White color for the icon itself
                textAlign: "center",
                border: "2px solid #FFFFFF", // Reduced white border thickness
                boxShadow: "0 0 15px 5px #7B6FAD",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
