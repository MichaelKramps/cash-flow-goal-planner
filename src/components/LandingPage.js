import React from 'react';
import './LandingPage.css';
import Shared from "./Shared/Shared";

class LandingPage extends React.Component {
    render() {
        return (
            <div className={"landing-page " + this.props.className + " " + Shared.determineVisibility(this.props)}>
                <section className="hero-section">
                    <div className="feature-text">
                        <h1>The Investor's Handbook</h1>
                        <h2>A collection of cash flow based financial software tools for new investors.</h2>
                        <button>Buy our software</button>
                    </div>
                    <div className="feature-video">
                        <div className="feature-video-container">
                            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/2vLgRd0-zQQ"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
                <div className="landing-page-minor-sections-container">
                    <section className="features-section">
                        <h2>Features of the software</h2>
                        <div className="features-list">
                            <div>
                                <div>feature 1</div>
                            </div>
                            <div>
                                <div>feature 2</div>
                            </div>
                            <div>
                                <div>feature 3</div>
                            </div>
                            <div>
                                <div>feature 4</div>
                            </div>
                            <div>
                                <div>feature 5</div>
                            </div>
                            <div>
                                <div>feature 6</div>
                            </div>
                        </div>
                    </section>
                    <section className="why-us">
                        <h2>Why Use a Cash Flow Based Investment Tool?</h2>
                        <p>convincing text</p>
                    </section>
                </div>
            </div>
        )
    }
}

export default LandingPage;