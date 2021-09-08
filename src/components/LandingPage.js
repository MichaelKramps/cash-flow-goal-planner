import React from 'react';
import './LandingPage.css';
import Shared from "./Shared/Shared";

class LandingPage extends React.Component {
    render() {
        return (
            <div className={"landing-page " + this.props.className + " " + Shared.determineVisibility(this.props)}>
                <section className="hero-section">
                    <div className="feature-text-container">
                        <div className="feature-text">
                            <h1>THE INVESTOR'S HANDBOOK</h1>
                            <h2>A collection of cash flow based financial software tools for new investors.</h2>
                            <button>$20 Lifetime Access</button>
                        </div>
                    </div>
                    <div className="feature-video">
                        <div className="feature-video-container">
                            <iframe className="responsive-iframe" src="https://www.youtube.com/embed/2vLgRd0-zQQ"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                </section>
                <section className="lead-in">
                    <p>A cash flow investing strategy can allow you to <strong>quit your job in less than half the time</strong> of traditional investing strategies.</p>
                </section>
                <section>
                    graph
                </section>
                <section className="features-section">
                    <div className="features-list">
                        <div>
                            <div><p>Cash flow based financial planning</p></div>
                        </div>
                        <div>
                            <div><p>Set a monthly cash flow goal using your own personal budget</p></div>
                        </div>
                        <div>
                            <div><p>Get credit for your current investments and plan your future investments</p></div>
                        </div>
                        <div>
                            <div><p>Get step by step instructions for your next real estate purchase, business acquisition or stock purchase</p></div>
                        </div>
                        <div>
                            <div><p>Cash flow based calculators that help you measure the primary metric for reaching retirement</p></div>
                        </div>
                        <div>
                            <div><p>Lifetime access to features that get regularly updated</p></div>
                        </div>
                    </div>
                </section>
                <section className="why-us">
                    <h2>Why Use a Cash Flow Based Investment Tool?</h2>
                    <p>I worked my job in corporate America for years, and I bought into the idea that the best way to secure my financial future was to put money away into tax protected retirement account, like a 401k. Like you I soon realized that using this method, I wouldn't be quitting my job for decades. And I needed a better solution.</p>
                    <p>The trouble is there's just not much good information out there on how to retire early. Most of what I've found refers to the FIRE method, which is a methodology that requires you to cut your spending drastically and invest the rest into stocks.</p>
                    <p>Done correctly, the FIRE method can get you to retirement in less than 10 years, but it just didn't work for me and my family. We weren't going to be happy living off 30-40% of our income and investing the rest for 5 to 10 years.</p>
                    <h3>Cash Flow Investing</h3>
                    <p>My wife Kate and I found another methodology, that I call cash flow investing. In less than three years we used our process to replace the income of Kate's $70,000 per year job. Now she manages our short term rental properties and has more time to spend with our two daughters. And just a couple years later we've nearly replaced my $100,000 per year income.</p>
                    <p>The formula is simple: just buy cash flowing assets.</p>
                    <p>The only catch is that you have to find the money to buy these assets. To determine our return on investment we use a metric called cash on cash return. The easiest way I can describe it is by saying if you invest $100 and your investment gets a cash on cash return of 30%, then you will have bought an asset that pays you $30 per year.</p>
                    <p>Our investments have averaged about a 35% cash on cash return, so in order to replace a $70,000 salary we had to invest $200,000.</p>
                    <p>That's a lot of money, but compare that to investing $200,000 in the stock market, where you would be making only about 10% ROI on that money, or about $20,000 a year. Buying cash flowing assets, done correctly, is in my experience the fastest way to quitting your job.</p>
                    <p>And I've recently stumbled upon a way to earn over 100% cash on cash return (you can turn a $100,000 investment into $100,000 of profit each year). I'll be doing this by purchasing an already profitable business with an SBA guaranteed loan.</p>
                    <h3>I Honestly Want To Help</h3>
                    <p>I built this software to help people, plain and simple. Obviously, if you choose to buy my software then it will help me make more money. So yeah of course I built this to help myself, but I also built it to help you.</p>
                    <p>Over the last couple years I've started to realize that I'll soon be free from my employer and I get to choose my own path in life. I've told Kate this many times, but my goal in life is to reach the end of my life and be proud of myself. To me part of that is personal achievement, yes. And part of it is self improvement, or just becoming a great version of myself. But another part of it is to positively influence the world around me.</p>
                    <p>There are a million ways to help others, but the thing I'm best at is investing. So I want to help others like me free themselves from the prison of a full time job and live their own lives in a way they can be proud of.</p>
                    <p>So yeah I want to make some money, and I want to better myself, but I also genuinely want to help you.</p>
                    <h3>Software that Holds Your Hand</h3>
                    <p>This software is inspired by three questions:</p>
                    <ol>
                        <li>Where are you at financially?</li>
                        <li>Where are you going financially?</li>
                        <li>How do you get there?</li>
                    </ol>
                    <p>When you log in your first task is to inform the software of your current financial state and your goals. Specifically, the software cares about cash flow. How much do you spend on things like food, utilities, insurance and loan payments every month? What investments do you already own, and how much do they pay you each month?</p>
                    <p>Then you can plan you next investment (or next several).</p>
                    <p>Once you've entered at least one future investment for yourself, you can access the road map for that investment. The road map will take you through the entire process of acquiring your next investment, from coming up with the cash needed to buy, to securing any necessary loans, to your due diligence to writing up purchase agreements, to closing and then keeping your investment profitable.</p>
                    <p>And if you have questions you can always reach out directly to me.</p>
                    <h3>Lifetime Access to a Growing Software Suite</h3>
                    <p>Once you purchase access to the Investor's Handbook you will have lifetime access to a growing group software tools that becomes more robust and feature rich over time.</p>
                    <p>The road maps are regularly updated and added to. The investment calculators get more features and better visual displays. And more tools are added all the time.</p>
                    <p>You will never be asked to pay any more for access to these features.</p>
                </section>
            </div>
        )
    }
}

export default LandingPage;