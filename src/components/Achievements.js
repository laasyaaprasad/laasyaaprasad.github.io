import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class Achievements extends Component {
  render() {
    const styles = {
      resultsLink: {
        marginTop: "10px",
        fontSize: "1rem",
        color: "#555",
        fontWeight: "400",
      },
      link: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
      },
      linkHover: {
        color: "#0056b3",
        textDecoration: "underline",
      },
    };

    if (this.props.resumeAchievements && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.achievements;
      var achievements = this.props.resumeAchievements.map((achievement, i) => {
        return (
          <div
            className="achievement-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="achievement-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="achievement-content">
              <div className="achievement-text-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
                {achievement.tags && (
                  <div className="achievement-tags">
                    {achievement.tags.map((tag, index) => (
                      <Badge
                        pill
                        className="achievement-badge mr-2 mb-2"
                        key={index}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                {/* Button for Laurel and Scroll */}
                {achievement.title === "Society of Distinction 2025- Laurel and Scroll 100" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://news.northeastern.edu/2025/04/15/laurel-scroll-induction-ceremony-2025/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Check it out!
                      </a>
                    </div>
                  </p>
                )}
                {/* Button for Harvard Agriculture Datathon */}
                {achievement.title === "Harvard Agriculture Datathon 2024" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://datascience.harvard.edu/2024/10/25/tackling-agriculture-and-food-security-in-a-changing-climate-celebrating-solutions-from-the-hdsi-agri-datathon/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Results
                      </a>
                    </div>
                  </p>
                )}
                {/* Button for Research Publication */}
                {achievement.title === "Research Publication" && (
                  <p
                    style={{
                      ...styles.resultsLink,
                      color: "white",
                      fontSize: "1.2rem",
                    }}
                  >
                    <div className="resume-button-container">
                      <a
                        href="https://ieeexplore.ieee.org/document/10170349"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                      >
                        Read the paper
                      </a>
                    </div>
                  </p>
                )}
              </div>
              {achievement.image && (
                <div className="achievement-image-wrapper">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="achievement-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/placeholder.jpg"; // Fallback image
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="achievements" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName || "Achievements"}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <div className="achievements-container">{achievements}</div>
        </div>
      </section>
    );
  }
}

export default Achievements;
