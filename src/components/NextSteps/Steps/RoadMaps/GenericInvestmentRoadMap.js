import React from 'react';
import RoadMapCheckboxSection from "./RoadMapCheckboxSection";
import Shared from "../../../Shared/Shared";

class GenericInvestmentRoadMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialInvestment: this.props.initialInvestment || null,
            financing: this.props.financing || null,
            search: this.props.search || null,
            makeOffer: this.props.makeOffer || null,
            verify: this.props.verify || null,
            close: this.props.close || null,
            trackAndManage: this.props.trackAndManage || null
        }
    }

    render() {
        return (
            <div className={Shared.determineVisibility(this.props)}>

                <h1>Road Map: Generic Investment</h1>

                <RoadMapCheckboxSection checked={this.state.initialInvestment} title="Save money for your initial investment">
                    <p>I’ve heard of people buying investments for $0 down, but that’s certainly not the norm. It can be done, but I’m not going to walk you through how that might be done, because I’ve never done it.</p>
                    <p>If you want to invest, you need some money.</p>
                    <h3>How much?</h3>
                    <p>The amount you need can vary greatly depending on your investment, but do your research and try to come up with a reasonably accurate number for how much you’ll need.</p>
                    <h3>Don’t forget behind the scenes costs</h3>
                    <p>Many large investments will require the assistance of an accountant or a lawyer. Other investments may require repairs or renovations. And most investments have some form of closing costs, especially if you need a loan to buy them.</p>
                    <p>Factor these hidden costs into your initial investment.</p>
                    <h3>How to come up with the money</h3>
                    <p>If you have no money then it can be intimidating to know you need to save tens of thousands to invest. How do you find that kind of money? If you just start saving it could be years before you’re ready.</p>
                    <p>Here are some other ideas to make the process faster:</p>
                    <ul>
                        <li>Save</li>
                        <li>Cash out refinance of any real estate you own</li>
                        <li>Cash out savings or retirement plans (yes, I’ve done this)</li>
                        <li>Ask friends and family for “gift” loans (I’ve done this, too). We’ve had family give us money and sign a letter that says the money is a gift. Meanwhile we have a verbal agreement to repay the money after buying the property.</li>
                        <li>Partner with someone, two bank accounts is better than one</li>
                        <li>Ask yourself “how?” Tell yourself there IS a way to get this money, and allow your brain to start figuring out how. Scour the web, have conversations, meditate, just spend time trying to figure it out. You’ll be amazed at how creative you can be when you believe there is a solution.</li>
                    </ul>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.financing} title="Secure financing">
                    <p>I prefer to get my financing in order before I begin my official search. I’ve had a few times where I made an offer on a house and the owner accepted my offer, but then I couldn’t get anyone to actually give me a loan to buy it. Lesson learned.</p>
                    <h3>Can you get a loan?</h3>
                    <p>Lots of investments can be bought with a loan, and lots cannot.</p>
                    <p>Generally speaking, investments that create significant revenue can be bought with a loan. These are things like businesses and real estate. They create regular revenue which can be used to make the loan payments.</p>
                    <p>Other types of investments must be bought completely with your own money. Things like collectibles, bonds and even stocks usually can’t be bought with a loan.</p>
                    <p>If you can’t get a loan, then securing financing for you just means saving the money or finding it in some other creative way.</p>
                    <h3>Call lenders and get prequalified</h3>
                    <p>If you can get a loan, and want a loan, then you need to get in touch with people who can loan you the money. I recommend calling 5-10 banks on the phone. Just tell them what you’re up to and ask to meet with a lender.</p>
                    <p>“Hi, my name is Michael. I’m in the market to buy _______, is there someone I can speak with who can answer some questions for me?”</p>
                    <p>They’ll either get someone on the phone for you or schedule a time to speak with them.</p>
                    <p>If it’s your first time, you’re not really going to know what to ask, but that’s OK. Your goal is to figure out which bankers WANT to work with you. So don’t be afraid to say things like “this is my first time buying a house, can you help me understand how you decide who to lend money to?”</p>
                    <p>You can also ask about how they pre-qualify people for a loan.</p>
                    <p>Literally just ask all your questions even if they’re dumb. Lots of people genuinely want to help you (but some won’t and that’s OK). And with every new banker you talk to you’ll feel more and more comfortable.</p>
                    <p>Your end goal here is to get a list of 2 or 3 lenders that you want to work with (probably because they seem to want you to succeed) and get pre-approval from 1.</p>
                    <p>This will make your life much, much easier when you find that investment and you’re ready to make an offer.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.search} title="Research and find an investment that meets your needs">
                    <p>Once you have your financing in order, it’s time to search for your investment.</p>
                    <h3>Get a team together</h3>
                    <p>For many types of investments, you can seek out some type of broker that helps connect buyers and sellers. Their job is literally to seek out people selling something and help them find a suitable buyer.</p>
                    <p>If brokers exist for your type of investment, it can save you a lot of time and effort.</p>
                    <p>You may also need help from an account, lawyer or some other type of consultant. Make sure you fill your gaps in knowledge with the knowledge of professionals.</p>
                    <p>Your “team” can obviously help you find your perfect investment, but they can also help ensure that your investment is a good one before you actually buy it..</p>
                    <h3>Look online and anywhere else you can think of</h3>
                    <p>A broker can help you find an investment, but they will only try to sell you on the investments where they have an agreement with the seller. There’s a whole other world of investments out there that you can find on your own.</p>
                    <p>You’d be hard pressed to find anything that can’t be bought online these days, so use the internet to your advantage.</p>
                    <p>If you can find or think of any other avenues to find investments for sale, don’t be afraid to try them out and see if they work for you.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.makeOffer} title="Make a profitable offer on the investment">
                    <p>Once you’ve found an investment that interests you, you want to make sure you’re making an offer that will lead to you making money.</p>
                    <p>In fact, I believe the most important number for determining whether your investment will be profitable is how much you pay for it. The process of determining the right price to offer is what I call “due diligence.” Due diligence requires some math, but this is a step that cannot be skipped.</p>
                    <p>YOU ABSOLUTELY MUST DO THIS IF YOU WANT TO BE A SUCCESSFUL INVESTOR!</p>
                    <h3>Cash flow approach</h3>
                    <p>You might have noticed that cash flow is my number one metric for measuring my success as an investor. So it should come as no shock that I determine a profitable purchase price based on cash flow.</p>
                    <p>Here’s what I do:</p>
                    <ol>
                        <li>Estimate average monthly revenue</li>
                        <li>Estimate average monthly expenses</li>
                        <li>Calculate the difference between the two</li>
                        <li>Use this number to find a monthly loan payment that meets my investment goal</li>
                        <li>Reverse engineer that mortgage payment into a maximum purchase price</li>
                    </ol>
                    <p>If you’re not getting a loan, you can skip steps 4 and 5. Just use the revenue minus expenses.</p>
                    <p>Let me show you an example to illustrate this approach.</p>
                    <h3>Example: Cash flow approach (with a short term rental)</h3>
                    <p>Here’s an example for a short term rental. Let’s say I find a house that’s in my perfect area of town and I think it’s going to make for a great short term rental.</p>
                    <p>I need to estimate how much I can make with it.</p>
                    <p>I look at similar properties on Airbnb, HomeAway and VRBO and try to estimate how many nights I can rent on average and how much I can charge per night. After my research I estimate that I can rent about 20 nights per month at around $100 per night.</p>
                    <p>This makes my estimated monthly revenue $2000.</p>
                    <p>Then I start to estimate expenses. I reference this article <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/comprehensive-list-of-airbnb-host-expenses/" >https://www.unboundinvestor.com/comprehensive-list-of-airbnb-host-expenses/</a> to get a final number and I estimate my monthly expenses to be $600 before the mortgage payment.</p>
                    <p>That means without a mortgage payment I’d be making about $1400 per month.</p>
                    <p>How do we reach a purchase price from here?</p>
                    <p>You can use your own method. Maybe your metric is that you want $500 per month income. Or maybe you use the cash on cash return metric like me. To keep things simple, let’s assume $500 a month is your minimum to buy the house.</p>
                    <p>So you can afford a mortgage payment of $900 per month and still make $500 per month in profit ($1400 - $900 = $500).</p>
                    <p>A $900 loan payment equates to a $167,000 loan for a 30 year mortgage. But remember you are putting 20% down, <strong>so the actual max purchase price of the home would be $208,000 ($208,000 x 0.8 = $167,000)</strong>.</p>
                    <h3>Now make your offer</h3>
                    <p>Once you determine the maximum purchase price you can pay, it’s time to call your team or get in touch with the seller and make an offer.</p>
                    <p>Kate and I never really put too much thought into negotiating. We typically offer the seller’s asking price or our max offer (whichever is lower). This method has been very successful for us, but something else might work for you.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.verify} title="Verify all your assumptions before the point of no return">
                    <p>With every investment there is a point where you can’t back out any more. It’s important to know exactly when that point is, and to make sure that you’ve made certain (as certain as you can reasonably be) that all your assumptions about the investment are correct.</p>
                    <p>When I say assumptions I mostly mean all the numbers you’ve used to estimate the investment’s cash flow.</p>
                    <p>Any revenue that you’ll be counting on should be verified as much as possible. You should also gather evidence of all known expenses, as well as looking extensively for all expenses that you weren’t initially aware of.</p>
                    <p>You should verify that the seller of the investment actually owns the investment.</p>
                    <p>You should use the services of a lawyer to make certain that you are adequately protected in the event of a catastrophe.</p>
                    <p>You can also hire the services of someone who does due diligence as a contractor. Lots of fields have people like this.</p>
                    <p>Whatever you need to do to verify that your investment is as safe as is reasonably possible, make sure you do it before your closing day.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.close} title="Close on the deal">
                    <p>After you’ve verified everything you can verify, and the investment still looks like a good deal, it’s time to actually buy it.</p>
                    <p>The process of transferring ownership can also vary greatly between investment types, but if you already have a team around you, this process should not be too mysterious or dangerous.</p>
                    <p>After you sign all the relevant paperwork and pay for your asset, you will assume ownership and take whatever steps are necessary to keep the investment in good working order.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.trackAndManage} title="Track and manage your investment">
                    <p>Once you take ownership of your new investment, the work is not over. Some investments, like stocks, can be relatively passive and low maintenance, but that doesn’t mean they require no management.</p>
                    <p>My recommendation is that you put some system in place that allows you to monitor the performance of your investment. Set goals for the performance of your investment. And if you find it underperforming then spend some time figuring out how you can improve its performance or else it may be time to sell.</p>
                    <p>The sign of a great investor is one who is always learning more about their investment portfolio and looking for ways to improve its performance.</p>
                </RoadMapCheckboxSection>
            </div>
        )
    }
}

export default GenericInvestmentRoadMap;