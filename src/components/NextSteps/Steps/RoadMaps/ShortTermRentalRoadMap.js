import React from 'react';
import RoadMapCheckboxSection from "./RoadMapCheckboxSection";

class ShortTermRentalRoadMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialInvestment: this.props.initialInvestment || null,
            financing: this.props.financing || null,
            search: this.props.search || null,
            makeOffer: this.props.makeOffer || null,
            verify: this.props.verify || null,
            purchaseFurnishings: this.props.purchaseFurnishings || null,
            prepHome: this.props.prepHome || null,
            takePhotos: this.props.takePhotos || null,
            beginHosting: this.props.beginHosting || null
        }
    }

    render() {
        return (
            <div>
                <h1>Road Map: Short Term Rental</h1>
                <RoadMapCheckboxSection checked={this.state.initialInvestment} title="Save money for your initial investment">
                    <p>I’ve heard of people buying investment properties for $0 down, but that’s certainly not the norm. It can be done, but I’m not going to walk you through how that might be done, because I’ve never done it.</p>
                    <p>I want to set your expectations at a reasonable level. If you want to buy a house, you’ll need to put money down. And that usually means 20% down for an investment property.</p>
                    <p>If you’re planning to live in your investment property, then you can get it for less than 20% down, but if not you’ll be hard pressed to find a way to spend less than 15-20% of the purchase price.</p>
                    <h3>How much?</h3>
                    <p>This is a good time to start looking at Zillow.com or Realtor.com. See what homes are available and the range of asking prices.</p>
                    <p>In my area it’s possible to buy a small single family home for around $100,000 and sometimes less than that. But the average cost of a home is more like $200,000.</p>
                    <p>So at 20% down I’m going to need at least $20,000 saved up to make this happen, probably more like $30,000.</p>
                    <h3>Don't forget furnishing costs (and renovation costs)</h3>
                    <p>When you buy a short term rental you’ll have to furnish the home. That means you’ll be buying beds, furniture, linens and possibly appliances.</p>
                    <p>We’ve historically spent between $2,000 and $5,000 to furnish our short term rentals.</p>
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
                    <p>Your pre-approval will come with a number. You’ll be approved up to a certain amount. You can use that number to help inform your property search.</p>
                    <p>If you’re pre-approved for a home up to $200,000, then you’ll be searching for properties for around $220,000 and less (you can always try to negotiate a lower purchase price).</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.search} title="Search for a house to buy">
                    <p>Once you have been pre-approved for a loan, it’s time to start searching for houses. </p>
                    <h3>Choose a market</h3>
                    <p>It can be important to choose a viable market, so you may want to begin with some market research. <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/how-to-do-airbnb-market-research-for-free/" >https://www.unboundinvestor.com/how-to-do-airbnb-market-research-for-free/</a></p>
                    <p>We started by listing our basement on Airbnb and found that it was more popular than we ever imagined. Our low-risk experiment led to strong evidence that we already lived in a great market for short term rentals.</p>
                    <p>But that doesn’t work for everyone, so choose a market that can support your home.</p>
                    <h3>Get a realtor</h3>
                    <p>If you find a home you think you want to buy, someone has to show the house to you. Maybe you can just go to open houses, but I promise you at some point you’ll want the help of a realtor.</p>
                    <p>They can suggest houses to you and they can show you houses the same day you find one.</p>
                    <p>Sometimes houses get put under contract the same day they are listed. You need to take that sense of urgency to your search. You find an interesting house? Call/text your realtor IMMEDIATELY and ask them if they can show you the house.</p>
                    <p>Often they will get you there the same day and if you love the house you can make an offer right away.</p>
                    <h3>Look online, too</h3>
                    <p>A realtor can help you find a house, but in our experience it rarely happens. You have to be on the prowl every day looking for houses. Kate is our property search expert. She’s on Zillow and Realtor.com daily when we’re looking to buy. If she finds something she likes, we call up Alex (our realtor) and go look at it.</p>
                    <p>Don’t be afraid to see lots of houses, and don’t be afraid to make offers. Be bold and be quick, because that’s how you’ll lock down the best houses.</p>
                    <p>When we go see a house, we usually take some notes and on our car ride home we talk about whether we want to put in an offer. </p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.makeOffer} title="Make a profitable offer on a house (and keep making offers until you get one accepted)">
                    <p>OK you’ve just seen a house and you think it will be perfect for a short term rental. It’s time to make an offer, but you want to make sure you’re making an offer that will lead to you making money.</p>
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
                    <p>Let’s say I find a house that’s in my perfect area of town and I think it’s going to make for a great short term rental.</p>
                    <p>I need to estimate how much I can make with it.</p>
                    <p>I look at similar properties on Airbnb, HomeAway and VRBO and try to estimate how many nights I can rent on average and how much I can charge per night. After my research I estimate that I can rent about 20 nights per month at around $100 per night.</p>
                    <p>This makes my estimated monthly revenue $2000.</p>
                    <p>Then I start to estimate expenses. I reference this article <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/comprehensive-list-of-airbnb-host-expenses/">https://www.unboundinvestor.com/comprehensive-list-of-airbnb-host-expenses/</a> to get a final number and I estimate my monthly expenses to be $600 before the mortgage payment.</p>
                    <p>That means without a mortgage payment I’d be making about $1400 per month.</p>
                    <p>How do we reach a purchase price from here?</p>
                    <p>You can use your own method. Maybe your metric is that you want $500 per month income. Or maybe you use the cash on cash return metric like me. To keep things simple, let’s assume $500 a month is your minimum to buy the house.</p>
                    <p>So you can afford a mortgage payment of $900 per month and still make $500 per month in profit ($1400 - $900 = $500).</p>
                    <p>A $900 loan payment equates to a $167,000 loan for a 30 year mortgage. But remember you are putting 20% down, <strong>so the actual max purchase price of the home would be $208,000 ($208,000 x 0.8 = $167,000).</strong></p>
                    <h3>Make your offer</h3>
                    <p>Once you decide you want to buy the house, and you determine the maximum purchase price you can pay, it’s time to call your realtor and make an offer.</p>
                    <p>You can offer your max (we often do this), or you can offer something below your max. It depends a lot on what the seller is asking for the home and what your negotiation approach is. If the seller is only asking for $180,000 and your max price is $208,000, you would probably rather start with an offer of $180,000.</p>
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
                <RoadMapCheckboxSection checked={this.state.purchaseFurnishings} title="Buy stuff to furnish/renovate the home (can be before or after closing day)">
                    <p>Getting your financing in order and scheduling your inspections is really all that stands between you and a new house. But if you do make it to closing day, you’ll have an empty property that needs quite a bit of work before it can be rented to short term guests.</p>
                    <p>The faster you can get your place set up for guests, the faster you can list it and start making money.</p>
                    <p>One thing you’ll want to do for sure before you close on the house is begin making plans for your space. You should walk through the house again and make a list of everything you’ll need to buy.</p>
                    <ul>
                        <li>Beds and bed frames</li>
                        <li>Pillows</li>
                        <li>Sheets</li>
                        <li>Towels for the bathroom(s)</li>
                        <li>Chairs and couches</li>
                        <li>A dining table</li>
                        <li>Wall art</li>
                        <li>A TV</li>
                        <li>Kitchen appliances</li>
                        <li>Dishes, silverware, pots, pans, cooking utensils</li>
                        <li>Washer and dryer</li>
                    </ul>
                    <p>At the very least you’ll want a list. You may also want to put together a wish list on Amazon or something so the moment you’re ready to buy you can just click a button.</p>
                    <p>It will take some time for all that stuff to get shipped to you, and you’ll want to start getting the place ready as soon as you sign those closing documents. So consider ordering stuff a week or so before closing day.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.prepHome} title="Prep your home for guests">
                    <p>Once you’ve signed the closing documents and been given the keys to your new home, it’s time to get to work. You need to turn that space into a short term rental as soon as possible.</p>
                    <p>The approach Kate and I have started taking is that we live in the property while we prepare it for guests. This accomplishes two things.</p>
                    <ol>
                        <li>We can work on it anytime we have free time</li>
                        <li>We quickly learn what’s missing (if there’s no bed we can’t sleep, if there’s no toilet paper we notice when we use the restroom)</li>
                    </ol>
                    <p>By the time you walk out of that house your guests should want for nothing. You should have:</p>
                    <ul>
                        <li>A fully furnished place with beds, furniture, appliances and television</li>
                        <li>Fully functioning kitchen (if it has one) with appliances, dishes, silverware and utensils</li>
                        <li>Towels, toilet paper, soap and shampoo stocked in your bathrooms</li>
                        <li>Dishwasher soap, laundry detergent and dryer sheets for your washer and dryer</li>
                        <li>Snacks or breakfast food stocked for your guests</li>
                        <li>Some form of entertainment (TV with streaming service(s), books, games)</li>
                        <li>A convenient way for your guests to access the house (lock box with key or deadbolt with code entry)</li>
                        <li>Wifi set up</li>
                        <li>
                            A guest book with answers to common questions
                            <li>Wifi password</li>
                            <li>How to get in touch with you, the host</li>
                            <li>How to use various things in the house (like the TV)</li>
                            <li>Recommended places to eat</li>
                        </li>
                    </ul>
                    <p>Do your best to make sure all your guests’ needs are taken care of before they walk in the door. <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/how-to-wow-your-airbnb-guests-with-thoughtful-touches/">https://www.unboundinvestor.com/how-to-wow-your-airbnb-guests-with-thoughtful-touches/</a></p>
                    <p>You will almost certainly miss some things, but you’ll get those taken care of when a guest mentions it.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.takePhotos} title="Take professional photos and list your property">
                    <p>Once your place is ready for guests it’s time to list your property. The absolute most important thing you can do to have success early and often is to have excellent photos. <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/the-perfect-airbnb-cover-photo-can-double-profit/">https://www.unboundinvestor.com/the-perfect-airbnb-cover-photo-can-double-profit/</a></p>
                    <p>If you don’t have the skills to take great photographs, it would be WELL worth your money to hire someone to do it for you. This is one of those areas where you simply can’t afford to skimp.</p>
                    <p>Make sure you have a cover photo that makes people want to stay at your place. Also have at least one photo of every room in the house, and one photo that shows every amenity in your house. Here are some things you might overlook that guests like to see photos of:</p>
                    <ul>
                        <li>Washer and dryer</li>
                        <li>TV</li>
                        <li>Keypad or lock box they will use for entry</li>
                        <li>Wifi router</li>
                        <li>Coffee maker, blender, stove top, oven, or any other kitchen appliance they have access to use</li>
                        <li>Outdoor space</li>
                        <li>Grill</li>
                        <li>Guest book</li>
                    </ul>
                    <p>Once you have your photos just create your listing on whatever short term rental platforms you plan to use. Make sure you fill out everything and take credit for every amenity your place offers. </p>
                    <p>It’s also a good idea to put a little personality into your listing. Highlight the best thing about your listing in the title and allow your guests to get to know you and the area in your description.</p>
                    <p>When you submit your listing for approval it will usually take up to a week to get approved. This means you’ll have to wait a little while before you can host your first guest.</p>
                    <p>Time is always of the essence, so do your best to fully prepare your space, but you can always add and fix things after you begin hosting, so don’t waste your time getting your place listed.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.beginHosting} title="Begin hosting">
                    <p>Once your place is listed, you should start getting guests. We’ve never had an issue getting our first few guests with a new listing. As long as you have great pictures and an inviting listing, you shouldn’t have any problems either.</p>
                    <p>There’s always room to improve though. So if you have any problems or just want to keep making your place better, feel free to read through these articles.</p>
                    <ul>
                        <li><a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/how-to-increase-listing-views-on-airbnb/">https://www.unboundinvestor.com/how-to-increase-listing-views-on-airbnb/</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/how-to-increase-your-airbnb-booking-rate/">https://www.unboundinvestor.com/how-to-increase-your-airbnb-booking-rate/</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/my-average-airbnb-booking-rate-percentage/">https://www.unboundinvestor.com/my-average-airbnb-booking-rate-percentage/</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/our-average-airbnb-views-stats/">https://www.unboundinvestor.com/our-average-airbnb-views-stats/</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/how-to-maximize-your-airbnb-profit/">https://www.unboundinvestor.com/how-to-maximize-your-airbnb-profit/</a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/how-to-reach-the-top-of-the-airbnb-search-rankings/">https://www.unboundinvestor.com/how-to-reach-the-top-of-the-airbnb-search-rankings/</a></li>
                    </ul>
                </RoadMapCheckboxSection>
            </div>
        );
    }
}

export default ShortTermRentalRoadMap;