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
                                <div>Cash flow based financial planning</div>
                            </div>
                            <div>
                                <div>Set a monthly cash flow goal using your own personal budget</div>
                            </div>
                            <div>
                                <div>Get credit for your current investments and plan your future investments</div>
                            </div>
                            <div>
                                <div>Get step by step instructions for your next real estate purchase, business acquisition or stock purchase</div>
                            </div>
                            <div>
                                <div>Cash flow based calculators that help you measure the primary metric for reaching retirement (monthly cash flow)</div>
                            </div>
                            <div>
                                <div>Lifetime access to features that get regularly updated</div>
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