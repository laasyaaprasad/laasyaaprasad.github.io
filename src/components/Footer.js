import React, { Component } from "react";

class Footer extends Component {
  render() {
    let networks;
    if (this.props.sharedBasicInfo) {
      networks = this.props.sharedBasicInfo.social.map(function (network) {
        const iconStyle = {
          display: "inline-block",
          margin: "0 6px", // Reduced margin for closer spacing
          fontSize: "24px",
          color: "#fff",
          transition: "box-shadow 0.3s ease",
        };

        const hoverStyle = {
          boxShadow: "0 0 30px rgba(157, 138, 222, 0.5)", // Brighter and bigger halo
        };

        return (
          <span key={network.name} className="m-4">
            <a
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              style={iconStyle}
              onMouseOver={(e) =>
                (e.target.style.boxShadow = hoverStyle.boxShadow)
              }
              onMouseOut={(e) =>
                (e.target.style.boxShadow = "0 0 0 transparent")
              }
            >
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    const emailButtonStyle = {
      display: "inline-block",
      padding: "10px 20px",
      margin: "5px 0",
      backgroundColor: "rgba(31, 31, 56, 1)", // Purple background
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
      boxShadow: "0 0 0 transparent",
      transition: "box-shadow 0.3s ease",
    };

    const emailButtonHoverStyle = {
      boxShadow: "0 0 30px rgba(157, 138, 222, 0.5)", // Brighter and bigger halo
    };

    return (
      <footer>
        <div className="col-md-12">
          <div className="email-section" style={{ marginTop: "20px" }}>
            <h3>Let's Connect!</h3>
            <p>
              I'm always eager to connect and explore new opportunities. Whether
              you have a question, need assistance, or simply want to say hello,
              feel free to reach out anytime!
            </p>
            <a
              href="mailto:laprasad20@gmail.com"
              className="email-button"
              style={emailButtonStyle}
              onMouseOver={(e) =>
                (e.target.style.boxShadow = emailButtonHoverStyle.boxShadow)
              }
              onMouseOut={(e) =>
                (e.target.style.boxShadow = "0 0 0 transparent")
              }
            >
              Send Email
            </a>
          </div>
          <div className="social-links">{networks}</div>

          <div className="achievements-container">
            <div className="copyright py-4 text-center">
              <div className="container">
                <small>
                  Made with <span style={{ color: "red" }}>❤</span> by Laasya
                  Anantha Prasad
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
