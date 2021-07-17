import React from 'react';
import RoadMapCheckboxSection from "./RoadMapCheckboxSection";
import Shared from "../../../Shared/Shared";

class BusinessAcquisitionRoadMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            initialInvestment: this.props.initialInvestment || null,
            financing: this.props.financing || null,
            search: this.props.search || null,
            makeOffer: this.props.makeOffer || null,
            verify: this.props.verify || null,
            purchaseAgreement: this.props.purchaseAgreement || null,
            loanUnderwriting: this.props.loanUnderwriting || null,
            bankAccount: this.props.bankAccount || null,
            signPurchaseAgreement: this.props.signPurchaseAgreement || null,
            transitionPeriod: this.props.transitionPeriod || null,
            grow: this.props.grow || null
        }
    }

    render() {
        return(
            <div className={Shared.determineVisibility(this.props)}>

                <h1>Road Map: Business Acquisition</h1>

                <RoadMapCheckboxSection checked={this.state.initialInvestment} title="Save money for your initial investment">
                    <p>I’ve heard of people buying investments for $0 down, but that’s certainly not the norm. It can be done, but I’m not going to walk you through how that might be done, because I’ve never done it.</p>
                    <p>I want to set your expectations at a reasonable level. If you want to buy a business, you’ll need to put money down. And that usually means 10-20% down for a business.</p>
                    <p>If you choose to go the route of getting an SBA guaranteed loan, you can buy your business for 10% down plus fees (which usually ends up totalling 12-13% of the purchase price). If you don’t go the SBA route, you’ll probably end up putting down closer to 20%.</p>
                    <h3>How much?</h3>
                    <p>This is a good time to start looking at online business marketplaces. I like browsing Empire Flippers to get acquainted with the going rate for various online businesses. You can also browse bizbuysell.com for an idea on the price of offline businesses.</p>
                    <p>You will probably have certain expectations for your business acquisition. For me, it was income of $10,000 per month after all expenses (including loan payments). Based on your ROI expectations and what kind of business you’re interested in, you should be able to arrive at some businesses that might fit you.</p>
                    <p>For me, I was finding businesses with asking prices from $600,000 to $1,000,000 that met my criteria. Since I was going the SBA loan route, this meant I needed to save around $100,000 for my business’ down payment.</p>
                    <h3>Don’t forget lawyer and due diligence costs</h3>
                    <p>One thing I wasn’t completely prepared for was the cost of my lawyer and of due diligence. You can usually expect to spend about 1-2% of the purchase price on your lawyer. My due diligence cost was about $2,000, and that was a flat fee regardless of the size of the business.</p>
                    <h3>How to come up with the money</h3>
                    <p>If you have no money then it can be intimidating to look at a number like $100,000. How do you find that kind of money? If you just start saving it could be years before you’re ready.</p>
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
                    <p>I prefer to get my financing in order before I start looking for a new investment. I’ve had a few times where I made an offer on a house and the owner accepted my offer, but then I couldn’t get anyone to actually give me a loan to buy it. That was pretty embarrassing.</p>
                    <p>When I was first looking for a business, I had a very interesting experience. I reached out to some online marketplaces, and they wanted to verify that I had financing. Then I started calling some lenders, and they wanted to know more about the business I was buying. It was like a chicken and the egg kind of problem.</p>
                    <h3>Talk to real people</h3>
                    <p>I’ll be honest, the path to financing a business acquisition isn’t as straightforward as a real estate purchase. You’re probably going to have to call around to lenders/banks, business brokers and business marketplaces and just ask for help.</p>
                    <p>Just like anything in life, you’ll talk to some people that don’t really care about you and don’t really want to help. But if you keep trying you’ll find some people that will get you up to speed and help connect you with the right people.</p>
                    <p>If you’re looking for an online business I suggest reading <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/complete-list-of-21-marketplaces-to-buy-a-website/">https://www.unboundinvestor.com/complete-list-of-21-marketplaces-to-buy-a-website/</a>, then going to each website and calling the phone numbers. Talk to someone and ask if they can help walk you through the process. Also ask if they know any online business lenders you can work with.</p>
                    <p>If you’re looking for a local business, you should just call your local banks. I recommend calling 5-10. Don’t call big banks like Bank of America. Call your local and regional lenders. They will be more personable and they will have much more flexibility with their lending requirements.</p>
                    <p>If it’s your first time, you’re not really going to know what to ask, but that’s OK. Your goal is to figure out which bankers WANT to work with you. So don’t be afraid to say things like “this is my first time buying a business, can you help me understand how you decide who to lend money to?”</p>
                    <p>Literally just ask all your questions even if they’re dumb. Lots of people genuinely want to help you (but some won’t and that’s OK). And with every new banker you talk to you’ll feel more and more comfortable.</p>
                    <h3>Try to get pre-qualified</h3>
                    <p>If you can, you want to get pre-qualified by a lender. This will make your life easier when you’re talking to business brokers.</p>
                    <p>Unfortunately, lending is just more complicated with business acquisitions. The lender typically wants to know about the business before they’ll offer a pre-approval. But if you can, try to get a letter of pre-approval up to a certain amount. I was able to get one, and that helped open some doors for me when I began working with brokers.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.search} title="Search for a business to buy (optionally find a broker)">
                    <p>Once you have been in communication with lenders (and hopefully gotten some form of pre-approval), it’s time to start searching for businesses to buy.</p>
                    <h3>Online or offline?</h3>
                    <p>Probably the biggest distinction in your search will be based on whether you want an online based business or an offline business. If you want an online business, then you can conduct your search 100% remotely. But if you want an offline business, you’ll almost certainly need to connect with a broker in your area.</p>
                    <h3>Offline - Get a broker</h3>
                    <p>I’ve never bought an offline business or even made an offer on an offline business, but I do have a close friend who has bought two offline businesses. He helped advise me through my online business acquisition.</p>
                    <p>Like 90% of the process is the same whether your business is online or offline, but one big difference is offline businesses usually need to be local (unless you are ready to move).</p>
                    <p>This limits your options to an extent.</p>
                    <p>Most businesses are sold through business brokers and that means that most of your local offline business will be sold through a broker. That means you need to find a broker to help you find the right business for you. I recommend asking your banker/lender for help getting in touch with a broker. They should be able to help you find at least one. And once you find one they can help you find others in their line of work.</p>
                    <h3>Online - marketplaces and brokers</h3>
                    <p>You have a little bit more flexibility in your search if you’re looking for an online business, particularly if you’re not going through a lender.</p>
                    <p>The thing is, it’s much easier to find online businesses for sale, but it’s generally harder to get financing for them. This is because of your lender’s need for collateral against their loans.</p>
                    <p>If you default on your loan, then the lender needs something they can use to recoup their losses. With offline businesses, this can often mean real estate or equipment owned by the business.</p>
                    <p>But with online businesses there is often nothing to sell off.</p>
                    <p>The reason I bring this up is because if you forgo the help of a business broker, you may have a harder time getting the financing side done. In my experience, if you go straight through a marketplace, they may not accept your pre-approval from a random regional bank. They may require proof, in the form of bank statements (and other things) that you have access to the full purchase price.</p>
                    <p>Either way, with online businesses, you can try your luck with the marketplaces and possibly get a deal done, or you can start a relationship with a broker and they can help you navigate the financing side.</p>
                    <p>To find online brokers check out this article <a target="_blank" rel="noreferrer" href="https://www.unboundinvestor.com/complete-list-of-21-marketplaces-to-buy-a-website/">https://www.unboundinvestor.com/complete-list-of-21-marketplaces-to-buy-a-website/</a>.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.makeOffer} title="Make a profitable offer on a business(and keep making offers until you get one accepted)">
                    <p>OK you’ve found a business and you think it will be perfect for your needs. It’s time to make an offer, but you want to make sure you’re making an offer that will lead to you making money.</p>
                    <p>In fact, I believe the most important number for determining whether your investment will be profitable is the purchase price of the business. The process of determining the right price to offer is what I call “due diligence.”</p>
                    <p>If you’re not willing to do some math to determine if a business purchase will be profitable, then you might as well stop right now.</p>
                    <p>YOU ABSOLUTELY MUST DO THIS IF YOU WANT TO BE A SUCCESSFUL INVESTOR!</p>
                    <h3>Cash flow approach</h3>
                    <p>You might have noticed that cash flow is my number one metric for measuring my success as an investor. So it should come as no shock that I determine a profitable purchase price based on cash flow.</p>
                    <p>Here’s what I do:</p>
                    <ol>
                        <li>Estimate average monthly revenue</li>
                        <li>Estimate average monthly expenses</li>
                        <li>Calculate the difference between the two</li>
                        <li>Use this number to find a monthly loan payment that meets my investment goal</li>
                        <li>Reverse engineer that loan payment into a maximum purchase price</li>
                    </ol>
                    <p>Let me show you an example to illustrate this approach.</p>
                    <h3>Example: Cash flow approach</h3>
                    <p>Let’s say I find a business that checks off all my boxes. First, I need to estimate the business’ monthly revenue.</p>
                    <p>The good news is, you should probably already have that information in the form of an offering memorandum or possibly even a profit and loss statement. Based on these things, let’s say my business is making $20,000 per month in revenue.</p>
                    <p>Second, we need to estimate monthly expenses. Guess what?, this is also provided for us in the same documents. The business is spending about $8,000 per month.</p>
                    <p>That puts the monthly income at approximately $12,000.</p>
                    <p>How do we reach a purchase price from here?</p>
                    <p>You can use your own method. Maybe your metric is that you want $5,000 per month income. Or maybe you use the cash on cash return metric like me. To keep things simple, let’s assume $5,000 a month is your minimum to buy the business.</p>
                    <p>So you can afford a mortgage payment of $7,000 per month and still make $5,000 per month in profit ($12,000 - $7,000 = $5,000).</p>
                    <p>A $7,000 loan payment equates to a $630,000 loan for a 10 year term (typical for business loans). But remember you are putting 10% down (maybe more), <strong>so the actual max purchase price of the business would be $700,000 ($700,000 x 0.9 = $630,000).</strong></p>
                    <p><strong>Note:</strong> your lender may also have requirements to meet in order to allow the loan. These may differ from your own criteria, but should still be considered when determining your offer price.</p>
                    <h3>Make your offer with a letter of intent</h3>
                    <p>Once you decide you want to buy the business, and you determine the maximum purchase price you can pay, it’s time to write up a letter of intent. You can look up a template online or have your broker do it for you.</p>
                    <p>You can offer your max (we often do this), or you can offer something below your max. It depends a lot on what the seller is asking for the home and what your negotiation approach is. If the seller is only asking for $650,000 and your max price is $700,000, you would probably rather start with an offer of $650,000.</p>
                    <p>Kate and I never really put too much thought into negotiating. We typically offer the seller’s asking price or our max offer (whichever is lower) and ask the seller to cover our closing costs. This method has been very successful for us, but something else might work for you.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.verify} title="Verify everything before closing day">
                    <p>There’s a reason why we are quick to make offers on investments. Good businesses can go under contract in a week or less. We act fast and boldly without fear of making a mistake. Because once an offer is accepted, we still have plenty of time to verify that everything with the business is in order. We sign a letter of intent, which just means that we intend to buy the business, but it’s not a binding promise to buy.</p>
                    <p>This is your last chance to assure yourself that the business was accurately presented to you.</p>
                    <p>After you have an accepted offer you will have two primary tasks.</p>
                    <p>The first is to get in touch with your lender/bank and let them know you have an accepted offer. You will send them the terms and the bank will begin their underwriting process for your loan. They will request lots of paperwork from you: bank statements, pay stubs, tax returns and other things. If you are using an SBA guaranteed loan to buy, then you will have even more paperwork.</p>
                    <p>This process will be annoying and time consuming, but the bank walks you through everything so there’s nothing special to watch out for here.</p>
                    <p>The second task is to request lots of documentation from the seller (and comb through all the details).</p>
                    <p>You can hire someone to do this process for you, but even if you do, it’s important for you to understand the business before taking over so you should review all the documentation yourself if possible.</p>
                    <p>Here is a list of some things you should be checking:</p>
                    <ul>
                        <li>The company’s tax returns (at least the last 3 years, but the last 5 years is preferred)</li>
                        <li>If you didn’t already have these, you want to request profit and loss statements for the last 3-5 years and cash flow statements.</li>
                        <li>You need to verify the numbers in the cash flow statements by getting accounting data. Maybe it’s exported quickbooks files, or maybe they will walk you through their accounting software in person, but you need to see that raw data to verify the claims on their tax returns and profit/loss statements.</li>
                        <li>Numbers can also be verified with the company’s bank statements</li>
                        <li>Get historical payroll information if the company has employees</li>
                        <li>Get records of all their clients/customers if possible (this would be necessary for a company with client contracts, but not something like a retail store)</li>
                        <li>Proof of ownership of any products the company uses or sells</li>
                        <li>Verbal explanations/documented proof of anything in the financial records that seems out of the ordinary</li>
                    </ul>
                    <p>Your lender will also do some diligence of their own. They will probably order someone to do a business valuation to see if the agreed upon purchase price is in line with the actual value of the business.</p>
                    <p>The process of verifying the business claims of income can vary greatly from one business to another. If you have any question of whether your process has been adequately comprehensive, you should hire someone to do it for you/with you.</p>
                    <p>If you find that the business is not as you expected, you can terminate your agreement to purchase it, or you can renegotiate for new terms.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.purchaseAgreement} title="Write up a purchase agreement (with your lawyer)"><p>The month(s) leading up to closing on a business acquisition can range from just waiting around for other people to working on 3 things at once. One of your tasks during this time is to get a purchase agreement written that you and the seller will sign.</p>
                    <p>This agreement will list all the legally binding terms of the transfer of ownership. It will of course list the purchase price and how the seller will get their money, but it will also cover all kinds of other things like:</p>
                    <ul>
                        <li>Transition period agreement (period of time after closing to transfer everything over to you)</li>
                        <li>Intermediary to hold the purchase money during the transition period</li>
                        <li>Non-competes, non-disclosures and other types of agreements</li>
                        <li>Terms of liability held by the seller and buyer in the event that the business has unforeseen expenses</li>
                        <li>Any training or support agreed to by the seller</li>
                    </ul>
                    <p>These purchase agreements are typically not important at all if everything in the business acquisition goes perfectly. But if problems arise after closing day (and sometimes before) then the purchase agreement can dictate who bears the responsibility to pay for something.</p>
                    <p>For example if you buy the business and find out 3 months later that they are being sued for copyright infringement, who is responsible for paying to sort that out? That’s where the purchase agreement comes in.</p>
                    <p>Use your best judgement, but unless this business is very small and the amount you’re spending on it is inconsequential, you should probably have a lawyer assisting you while this agreement is created. The seller will likely have their own lawyer on their side.</p>
                    <p>This process can also be long and full of compromises by both sides, but if you just work through each item that comes up you can create a purchase agreement that works for everyone.</p>
                    <p><strong>Note</strong>: You should also try to put together an outline for the tasks needed to transition the business from the seller to you. This will help the weeks after closing go smoother.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.loanUnderwriting} title="Navigate loan underwriting">
                    <p>You signed a letter of intent and you’ve already been working through your verification process and creating a purchase agreement. The other task for you during this time is to get the bank to agree to give you the loan.</p>
                    <p>Again this process doesn’t require a ton of problem solving, you just have to provide your lender with all the documentation they request.</p>
                    <p>This will be things like bank statements, mortgage statements, credit checks, tax returns and various documentation for their records. There will be a lot, but the lender will make sure you provide them with whatever they need.</p>
                    <p>One thing that caught me off guard was that they had me get a life insurance policy for the amount of the loan and assign it to them. I had to get a health check and do some paperwork to make the lender the beneficiary of the loan.</p>
                    <p>Anyways, the loan underwriting process is mostly just busy work, but it has to be done.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.bankAccount} title="Open your business bank account">
                    <p>There are different ways to handle the revenue and expenses of a business, but there’s no question that the cleanest and simplest way is to open a new business bank account and do everything from there.</p>
                    <p>I waited until my first bill came due (which happened to be life insurance for the bank) before I opened my business account.</p>
                    <p>You can do it whenever you’re ready, but before you can do this you have to create a company. If you go to the bank and tell them you want to create a business account, the first thing they’ll ask you is the name of your company and if it has been registered.</p>
                    <p>You can have a lawyer help you register your business entity, but you can also do it yourself online.</p>
                    <p>Once you register your business (for me it was an LLC), you can go to the bank and open your new business account.</p>
                    <p>If your business needs to accept payments from credit cards or set up payroll for employees, there is often someone at the bank who can walk you through those processes. Just ask.</p>
                    <p>Keep in mind that accepting cards and getting automated payroll are not free services. You will have to pay to use them.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.signPurchaseAgreement} title="Sign the purchase agreement">
                    <p>When the purchase agreement is complete, you can sign it right away. Or you can wait until the official closing day to sign it.</p>
                    <p>Signing this agreement is the one that binds both you and the seller to lawfully uphold the terms of the agreement.</p>
                    <p>On closing day, you’ll sign the agreement (or you may have already signed it), then you’ll buy the company. You’ll bring your down payment and the bank will bring their loan and they will likely be given to an intermediary who will hold the money until they can be released.</p>
                    <p>Normally funds won’t be released to the seller until the transition period is complete and the buyer has affirmed that the business transition was satisfactory.</p>
                    <p>Additionally, there may also be some transfer of cash between you and the seller. If you close in the middle of the month, then some revenue and expenses may be prorated based on where you are in that month.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.transitionPeriod} title="Navigate the transition period">
                    <p>Hopefully, you and the seller already have a rough transition plan in place. Depending on the type of business you are buying, the transition tasks could look very different.</p>
                    <p>First and foremost on your list should be doing whatever is necessary to begin collecting payments from the business’ customers. This might mean exchanging login information. It might mean setting up new invoicing for the business. Whatever it means for your business you should set that up ASAP.</p>
                    <p>Why?</p>
                    <p>Because you need to verify that you’ll be getting paid. Remember the seller is waiting to receive the payment (from the intermediary) for selling their company while you verify that everything is in order.</p>
                    <p>Not to mention it’s practically impossible to run a company that isn’t getting any cash flow.</p>
                    <p>You’ll also need to get access to everything you need access to, you’ll need to take over payment for all the business’ expenses and you’ll need to ensure that any necessary daily tasks are being done.</p>
                    <p>Hopefully the seller will be of assistance during this time. They should be working with you directly to get you up to speed and make sure everything is set up correctly. The seller’s cooperation during the transition should have been outlined in your purchase agreement.</p>
                    <p>Once the previous owner is no longer necessary to keep the business running, it’s time to sign off on the transition and release funds to the seller.</p>
                </RoadMapCheckboxSection>

                <RoadMapCheckboxSection checked={this.state.grow} title="Grow your business">
                    <p>Now you’ve transitioned yourself into an ownership role in your new business. Hopefully it went well and the business is still operating the same as it was before you bought it.</p>
                    <p>But you probably didn’t buy this business to just keep doing the same old thing. Hopefully you had a vision to make the business more profitable or more meaningful to you.</p>
                    <p>Once you get a grip on the day to day operations of your new business, it’s time to start implementing your vision. Nobody can tell you exactly how to do this.</p>
                    <p>My only advice is to start with one small improvement. Make the business a little bit better each day without losing sight of its biggest sources of revenue. Make sure you’re continuing to support the existing revenue sources while you grow.</p>
                </RoadMapCheckboxSection>
            </div>
        )
    }
}

export default BusinessAcquisitionRoadMap;