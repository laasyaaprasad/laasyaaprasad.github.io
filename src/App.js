import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements"; // Import Achievements component
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from "./components/Education";
import BeyondCode from "./components/BeyondCode";

// In componentDidMount:
AOS.init({
  duration: 1000,
  once: true
});

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
      loading: true,
      loadError: null,
    };
    this.pendingRequests = 0;
    this.loadGeneration = 0;
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const generation = ++this.loadGeneration;
    this.pendingRequests = 2;
    this.setState({ loading: true, loadError: null });
    this.loadSharedData(generation);
    this.loadResumeFromPath("res_primaryLanguage.json", generation);
  }

  finishRequest(data, generation) {
    if (generation !== this.loadGeneration) return;
    this.setState(data, () => {
      if (generation !== this.loadGeneration) return;
      this.pendingRequests -= 1;
      if (this.pendingRequests === 0) {
        this.setState({ loading: false });
      }
    });
  }

  handleLoadError(xhr, status, err, generation) {
    if (generation !== this.loadGeneration) return;
    console.error("Portfolio content failed to load:", err || status);
    this.setState({
      loading: false,
      loadError: "Some portfolio content could not load. Check your connection and try again.",
    });
  }

  loadResumeFromPath(path, generation) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      timeout: 15000,
      success: (data) => this.finishRequest({ resumeData: data }, generation),
      error: (xhr, status, err) => this.handleLoadError(xhr, status, err, generation),
    });
  }

  loadSharedData(generation) {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      timeout: 15000,
      success: (data) => {
        document.title = data.basic_info.name;
        this.finishRequest({ sharedData: data }, generation);
      },
      error: (xhr, status, err) => this.handleLoadError(xhr, status, err, generation),
    });
  }

  render() {
    return (
      <div>
        {(this.state.loading || this.state.loadError) && (
          <div
            role={this.state.loadError ? "alert" : "status"}
            aria-live="polite"
            style={{
              padding: "12px 20px",
              color: this.state.loadError ? "#572b00" : "#32285a",
              background: this.state.loadError ? "#fff2cc" : "#f3f0ff",
              textAlign: "center",
            }}
          >
            {this.state.loadError ? (
              <>
                {this.state.loadError}{" "}
                <button type="button" onClick={() => this.loadData()}>
                  Retry
                </button>
              </>
            ) : (
              "Loading portfolio content…"
            )}
          </div>
        )}
        <Header sharedData={this.state.sharedData.basic_info} />
        <About
          resumeBasicInfo={this.state.resumeData.basic_info}
          sharedBasicInfo={this.state.sharedData.basic_info}
        />
        <Experience
          resumeExperience={this.state.resumeData.experience}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Skills
          sharedSkills={this.state.sharedData.skills}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Projects
          resumeProjects={this.state.resumeData.projects}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Achievements
          resumeAchievements={this.state.resumeData.achievements}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <BeyondCode />
        <Education
          resumeEducation={this.state.resumeData.education}
          resumeBasicInfo={this.state.resumeData.basic_info}
        />
        <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
      </div>
    );
  }
}

export default App;
