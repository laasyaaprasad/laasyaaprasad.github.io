import React from "react";

const BeyondCode = () => (
  <section id="beyond-code" className="beyond-code">
    <h1 className="section-title"><span>Beyond Code</span></h1>
    <div className="beyond-code-grid">
      <article className="beyond-code-card">
        <img src="images/creative/vsco-preview.jpeg" alt="Photography preview from Laasya VSCO gallery" />
        <div className="beyond-code-card-body">
          <h2>Photography</h2>
          <p>I click pictures</p>
          <a href="https://vsco.co/dailyhours/gallery" target="_blank" rel="noopener noreferrer" className="beyond-code-link">View my VSCO</a>
        </div>
      </article>
      <article className="beyond-code-card">
        <img src="images/creative/spotify-upside-down.jpg" alt="Spotify cover artwork for Upside Down - Acoustic Version" />
        <div className="beyond-code-card-body">
          <h2>Design</h2>
          <p>I once designed a Spotify cover for a friend.</p>
          <a href="https://open.spotify.com/track/7hWFTawux4kDNwUykj9oId" target="_blank" rel="noopener noreferrer" className="beyond-code-link">Listen on Spotify</a>
        </div>
      </article>
    </div>
  </section>
);

export default BeyondCode;