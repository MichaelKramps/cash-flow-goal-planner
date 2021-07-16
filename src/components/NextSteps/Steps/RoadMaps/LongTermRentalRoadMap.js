import React from 'react';
import RoadMapCheckboxSection from "./RoadMapCheckboxSection";
import Shared from "../../../Shared/Shared";

class LongTermRentalRoadMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialInvestment: this.props.initialInvestment || null,
            financing: this.props.financing || null,
            search: this.props.search || null,
            makeOffer: this.props.makeOffer || null,
            verify: this.props.verify || null,
            getPaperwork: this.props.getPaperwork || null,
            prepHome: this.props.prepHome || null,
            upForRent: this.props.upForRent || null,
            vetTenants: this.props.vetTenants || null,
            signLease: this.props.signLease || null
        }
    }

    render() {
        return (
            <div className={Shared.determineVisibility(this.props)}>
                <h1>Road Map: Long Term Rental</h1>
                <RoadMapCheckboxSection checked={this.state.initialInvestment} title="Save money for your initial investment">
                    <p>I’ve heard of people buying investment properties for $0 down, but that’s certainly not the norm. It can be done, but I’m not going to walk you through how that might be done, because I’ve never done it.</p>
                    <p>I want to set your expectations at a reasonable level. If you want to buy a house, you’ll need to put money down. And that usually means 20% down for an investment property.</p>
                    <p>If you’re planning to live in your investment property, then you can get it for less than 20% down, but if not you’ll be hard pressed to find a way to spend less than 15-20% of the purchase price.</p>
                    <h3>How much?</h3>
                    <p>This is a good time to start looking at Zillow.com or Realtor.com. See what homes are available and the range of asking prices.</p>
                    <p>In my area it’s possible to buy a small single family home for around $100,000 and sometimes less than that. But the average cost of a home is more like $200,000.</p>
                    <p>So at 20% down I’m going to need at least $20,000 saved up to make this happen, probably more like $30,000.</p>
                    <h3>Don’t forget renovation costs</h3>
                    <p>And if you buy a house that needs some work, then don’t forget to factor in expected costs for renovation.</p>
                    <h3>How to come up with the money</h3>
                    <p>If you have no money then it can be intimidating to look at a number like $30,000. How do you find that kind of money? If you just start saving it could be years before you’re ready.</p>
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
                    <p>I prefer to get my financing in order before I start looking for a house. I’ve had a few times where I made an offer on a house and the owner accepted my offer, but then I couldn’t get anyone to actually give me a loan to buy it.</p>
                    <p>If it’s your first time buying an investment property, I recommend calling up 5-10 local banks. I’m not talking about Bank of America or these big international banks (although sometimes those work), I’m talking about local and regional banks.</p>
                    <p>The national and international banks have so much red tape that they rarely have any flexibility with their lending decision making.</p>
                    <p>But local and regional banks generally have a lot of flexibility.</p>
                    <h3>Talk to real people</h3>
                    <p>I recommend calling 5-10 banks on the phone. Just tell them what you’re up to and ask to meet with a lender. </p>
                    <p>“Hi, my name is Michael. I’m in the market to buy an investment property, is there someone I can speak with who can answer some questions for me?”</p>
                    <p>They’ll either get someone on the phone for you or schedule a time to speak with them.</p>
                    <p>If it’s your first time, you’re not really going to know what to ask, but that’s OK. Your goal is to figure out which bankers WANT to work with you. So don’t be afraid to say things like “this is my first time buying a house, can you help me understand how you decide who to lend money to?”</p>
                    <p>You can also ask about how they pre-qualify people for a home loan.</p>
                    <p>Literally just ask all your questions even if they’re dumb. Lots of people genuinely want to help you (but some won’t and that’s OK). And with every new banker you talk to you’ll feel more and more comfortable.</p>
                    <h3>Try to get pre-qualified</h3>
                    <p>Your end goal here is to get a list of 2 or 3 bankers that you want to work with (probably because they seem to want you to succeed) and get pre-approval from 1.</p>
                    <p>The pre-approval process will come with some paperwork, but it shouldn’t be anything too crazy. You’ll probably be asked to fill out a personal financial statement and get a credit check. The real paperwork comes after you have a home under contract.</p>
                    <p>Your pre-approval will come with an amount. You can use that number to help inform your property search.</p>
                    <p>If you’re pre-approved for a home up to $200,000, then you’ll be searching for properties for around $220,000 and less (you can always try to negotiate a lower purchase price).</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.search} title="Search for a house to buy">
                    <p>Once you have been pre-approved for a loan, it’s time to start searching for houses. </p>
                    <h3>Choose a market</h3>
                    <p>It can be important to choose a viable market, so you may want to begin with some market research.</p>
                    <p>Pretty much every town or city has a long term rental market, so most of the time it makes sense to buy in your own city. But if you live in a very small town, you may want to look to a nearby town with a larger population.</p>
                    <h3>Get a realtor</h3>
                    <p>If you find a home you think you want to buy, someone has to show the house to you. Maybe you can just go to open houses, but I promise you at some point you’ll want the help of a realtor.</p>
                    <p>They can suggest houses to you and they can show you houses the same day you find one.</p>
                    <p>Sometimes houses get put under contract the same day they are listed. You need to take that sense of urgency to your search. You find an interesting house? Call/text your realtor IMMEDIATELY and ask them if they can show you the house.</p>
                    <p>Often they will get you there the same day and if you love the house you can make an offer right away.</p>
                    <h3>Look online, too</h3>
                    <p>A realtor can help you find a house, but in our experience it rarely happens. You have to be on the prowl every day looking for houses. Kate is our property search expert. She’s on Zillow and Realtor.com daily when we’re looking to buy. If she finds something she likes, we call up Alex (our realtor) and go look at it.</p>
                    <p>Don’t be afraid to see lots of houses, and don’t be afraid to make offers. Be bold and be quick, because that’s how you’ll lock down the best houses.</p>
                    <p>When we go see a house, we usually take some notes and on our car ride home we talk about whether we want to put in an offer.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.makeOffer} title="Make a profitable offer on a house (and keep making offers until you get one accepted)">
                    <p>OK you’ve just seen a house and you think it will be perfect for a long term rental. It’s time to make an offer, but you want to make sure you’re making an offer that will lead to you making money.</p>
                    <p>In fact, I believe the most important number for determining whether your investment will be profitable is the purchase price of the home. The process of determining the right price to offer is what I call “due diligence.”</p>
                    <p>If you’re not willing to do some math to determine if a property purchase will be profitable, then you might as well stop right now.</p>
                    <p>YOU ABSOLUTELY MUST DO THIS IF YOU WANT TO BE A SUCCESSFUL REAL ESTATE INVESTOR!</p>
                    <h3>Cash flow approach</h3>
                    <p>You might have noticed that cash flow is my number one metric for measuring my success as an investor. So it should come as no shock that I determine a profitable purchase price based on cash flow.</p>
                    <p>Here’s what I do:</p>
                    <ol>
                        <li>Estimate average monthly revenue</li>
                        <li>Estimate average monthly expenses</li>
                        <li>Calculate the difference between the two</li>
                        <li>Use this number to find a monthly mortgage payment that meets my investment goal</li>
                        <li>Reverse engineer that mortgage payment into a maximum purchase price</li>
                    </ol>
                    <p>Let me show you an example to illustrate this approach.</p>
                    <h3>Example: Cash flow approach</h3>
                    <p>Let’s say I find a house that’s in my perfect area of town and I think it’s going to make for a great long term rental.</p>
                    <p>I need to estimate how much I can make with it.</p>
                    <p>I can just look on craiglist or zillow and see what other property owners are charging their tenants for a place similar to yours. Let’s say I find a few comparable places asking for $1250/month, $1000/month and $950/month.</p>
                    <p>I’ll just take the average and estimate my monthly revenue to be about $1050/month.</p>
                    <p>Then I start to estimate expenses. I expect to pay property insurance, property taxes, lawn care, and regular maintenance. I estimate my monthly expenses to be $400 before the mortgage payment.</p>
                    <p>That means without a mortgage payment I’d be making about $650 per month.</p>
                    <p>How do we reach a purchase price from here?</p>
                    <p>You can use your own method. Maybe your metric is that you want $200 per month income. Or maybe you use the cash on cash return metric like me. To keep things simple, let’s assume $200 a month is your minimum to buy the house.</p>
                    <p>So you can afford a mortgage payment of $450 per month and still make $200 per month in profit ($650 - $200 = $450).</p>
                    <p>A $450 loan payment equates to a $84,000 loan for a 30 year mortgage. But remember you are putting 20% down, <strong>so the actual max purchase price of the home would be $105,000 ($105,000 x 0.8 = $84,000)</strong>.</p>
                        <h3>Make your offer</h3>
                    <p>Once you decide you want to buy the house, and you determine the maximum purchase price you can pay, it’s time to call your realtor and make an offer.</p>
                    <p>You can offer your max (we often do this), or you can offer something below your max. It depends a lot on what the seller is asking for the home and what your negotiation approach is. If the seller is only asking for $90,000 and your max price is $105,000, you would probably rather start with an offer of $90,000.</p>
                    <p>Kate and I never really put too much thought into negotiating. We typically offer the seller’s asking price or our max offer (whichever is lower) and ask the seller to cover our closing costs. This method has been very successful for us, but something else might work for you.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.verify} title="Verify everything before closing day">
                    <p>There’s a reason why we are quick to make offers. Good houses can disappear after less than a day on the market. We act fast and boldly without fear of making a mistake. Because once an offer is accepted, we still have plenty of time to verify that everything with the property is in order. This is the inspection period.</p>
                    <p>This is your last chance to assure yourself that the property will meet your needs.</p>
                    <p>After you have an accepted offer you will have two primary tasks.</p>
                    <p>The first is to get in touch with your lender/bank and let them know you have an accepted offer. You will send them the terms and the bank will begin their underwriting process for your loan. They will request lots of paperwork from you: bank statements, pay stubs, tax returns and likely a laundry list of other things.</p>
                    <p>This process will be annoying, but the bank walks you through everything so there’s nothing special to watch out for here.</p>
                    <p>The second task is to schedule home inspections.</p>
                    <p>It’s important to recognize that just because you have an accepted offer, it doesn’t mean you are contractually obligated to buy the home. You can still back out if you learn something that causes you to re-evaluate your offer.</p>
                    <p>You should absolutely schedule a standard home inspection immediately after you have your offer accepted. Your standard home inspection will almost certainly come back with several items to fix of various severity. Some of these things will be of no consequence and some you will want to address either by asking the seller to fix them or by planning to fix them yourself after closing day.</p>
                    <p>Your inspector may also recommend additional specialized inspections if he or she finds evidence of a problem that they weren’t able to identify. When our inspector recommends a specialized inspection, we go ahead and do it. You should know as much as you can about your home before closing day.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.getPaperwork} title="Get up to date paperwork (from a lawyer)">
                    <p>Getting your financing in order and scheduling your inspections is really all that stands between you and a new house. But if you do make it to closing day, you’ll be wanting to move some renters into your place. </p>
                    <p>The faster you can get your place set up for tenants, the faster you sign a lease and start making money.</p>
                    <p>Lawfully protecting yourself is part of that process and you can speed up your timeline by having all your paperwork ready to go:</p>
                    <ul>
                        <li>Lease agreements</li>
                        <li>Rental applications</li>
                        <li>Pet agreement</li>
                        <li>Sublease agreement</li>
                        <li>Lease renewal</li>
                        <li>Notice of non-renewal of lease</li>
                        <li>Various notices for your renters</li>
                    </ul>
                    <p>I’m sure you can find most of these things online, but I would caution against using those documents because they are very generic and different states have different laws in place for landlords and tenants.</p>
                    <p>I was able to find a local lawyer that allowed me to buy a huge collection of documents to use for my landlording (I think I spent like $150). I believe this is a common practice and you should have no trouble doing the same with a local lawyer.</p>
                    <p>If you can get this paperwork in order before closing day, you’ll be a step ahead of other first time rental property owners.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.prepHome} title="Prep your home for tenants">
                    <p>Once you’ve signed the closing documents and been given the keys to your new home, it’s time to get to work. You need to turn that space into a viable long term rental as soon as possible.</p>
                    <p>For us, with our first long term rental, that meant a lot of renovation projects. We had to build a brand new kitchen, replace windows, clean, paint, install new doors, and a handful of other things.</p>
                    <p>Meanwhile we weren’t making any money.</p>
                    <p>There were some real challenges with choosing a fixer upper for our first rental property, but it did allow us more margin for error because we got the house so cheap.</p>
                    <p>Anyways, if you’re renovating then now is the time to make that happen. Otherwise, you need to clean, make sure everything in the house works, and generally make the place move in ready.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.upForRent} title="Put your property up for rent">
                    <p>Once your place is ready for renters it’s time to advertise your property. Think about the type of renters that would be a great fit for your house and then think about where those people would be looking for a place to rent.</p>
                    <p>Make up an ad, take some good pictures of your property and spend some time making an effective write up.</p>
                    <p>Your primary goal is to get calls from qualified tenants. And your secondary goal is to NOT get calls from unqualified tenants.</p>
                    <p>You’ll quickly find out that it’s easy to get inquiries, but it’s hard to get inquiries from people that are a good fit for your rental.</p>
                    <p>With this in mind, your rental advertisement should show off the best qualities of your property, but it should also be brutally honest about what the qualifications are for your renters. It should also list anything that might be a deal breaker for a prospective tenant.</p>
                    <p>Here’s what I recommend including in your write up:</p>
                    <ul>
                        <li>Price</li>
                        <li>Attractive pictures of your place</li>
                        <li>Number of bedrooms and bathrooms</li>
                        <li>General location (not specific location)</li>
                        <li>Any selling points, like washer/dryer or back yard or parking spaces</li>
                        <li>Rental application approval requirements
                            <li>Minimum credit score</li>
                            <li>Minimum monthly income requirements</li>
                            <li>Any other requirements</li>
                        </li>
                        <li>Contact information</li>
                    </ul>
                    <p>Once you post your advertisement, you should start receiving calls.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.vetTenants} title="Vet your tenants">
                    <p>I believe vetting your prospective tenants is the most important part of being a successful landlord (the second most important is being a good landlord).</p>
                    <p>There are a lot of protected categories that can’t factor into your decision to accept a rental application (like religion, race or sexual orientation). But there are a few categories that are perfectly legal to use, and absolutely should be used.</p>
                    <p>Credit score and monthly income are two of the best. Also, background checks and references from past landlords are good.</p>
                    <p>These are the final ways to vet your tenants, but there are many other ways to get clues before you have anyone fill out an application.</p>
                    <ol>
                        <li>When first talking on the phone, reiterate your application requirements (credit score, income, etc.) then ask if they want to see the property.</li>
                        <li>If they want to see the property, I tell them that there’s a $30 application fee and we schedule a time.</li>
                        <li>The day of the showing, I text/call them to verify that they’ll show (lots of people will be no shows). If they don’t verify, I don’t show up and I move on to another tenant.</li>
                        <li>If they verify, I show up. If they have the application fee ready, that’s great. In my experience, if they don’t have the application fee, they won’t apply.</li>
                        <li>After that, you’ll just need to run a credit and background check and see if they meet the application requirements. If they do, you accept them.</li>
                    </ol>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.signLease} title="Sign a lease">
                    <p>When you accept an application, and your applicant says they want to move in, it’s time to sign a lease. You’re already ready for this because you have all your paperwork in order.</p>
                    <p>When you sign the lease, make sure you get a security deposit (of at least one month’s rent) along with the first month’s rent. Once you get this, you can hand over the keys and start your journey as a landlord.</p>
                </RoadMapCheckboxSection>
            </div>
        );
    }

}

export default LongTermRentalRoadMap;