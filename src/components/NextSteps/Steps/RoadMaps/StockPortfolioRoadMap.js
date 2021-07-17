import React from 'react';
import RoadMapCheckboxSection from "./RoadMapCheckboxSection";
import Shared from "../../../Shared/Shared";

class StockPortfolioRoadMap extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            chooseBroker: this.props.chooseBroker || null,
            research: this.props.research || null,
            buy: this.props.buy || null,
            trackAndManage: this.props.trackAndManage || null
        }
    }

    render() {
        return (
            <div className={Shared.determineVisibility(this.props)}>

                <h1>Road Map: Stock Portfolio</h1>

                <RoadMapCheckboxSection checked={this.state.chooseBroker} title="Choose an online broker">
                    <h3>Disclaimer</h3>
                    <p>The stock market is the most popular place to invest. There’s a good reason for that. Buying stocks is the easiest way to invest that provides you with a respectable return on investment.</p>
                    <p>I own some stocks, but I don’t consider myself a stock investor. I don’t spend time furthering my knowledge in this space. I spend my time learning more about real estate and business investing. Because of that, I won’t share any of my thoughts on how I choose my stock investments. I’ll only walk you through the steps to buy your own.</p>
                    <p>If you want advice on picking stocks or stock portfolio theory, you should look elsewhere (for now...I have a friend who is a very knowledgeable stock investor and I plan to work with him to add more value to this road map soon).</p>
                    <h3>Choose an online broker</h3>
                    <p>The easiest way to buy stocks is to sign up for an account with an online broker. I have used both E*Trade and TD Ameritrade and I’ve had no reason to be unhappy with either.</p>
                    <p>There are many online brokers and the best all have no fees on trades you do and no minimum account balance.</p>
                    <p>Once you decide who you’d like to use, just sign up for an account, provide proof of identification and then deposit some money into your account. After all these things go through, you can begin buying stocks.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.research} title="Research stocks">
                    <p>Before you actually buy anything it’s a good idea to create some investing criteria for yourself and just generally have a plan.</p>
                    <p>Like I mentioned before, I’m not a stock investor, so you’ll have to find guidance elsewhere. There are a few different schools of thought in stocks, but the three that I’ve heard about the most are “value investing,” “dividend investing” and “day trading”.</p>
                    <p>Of these three, dividend investing most closely matches the cash flow investing approach that I myself follow. The strategy of the cash flow planner is to simply create enough cash flow to cover all the expenses of your life so you can quit your job or retire. When I calculate the cash flow of a stock portfolio, I look at the dividends being paid out, not the value increase of the stocks.</p>
                    <p>Regardless, you should use your own criteria when deciding on your own approach.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.buy} title="Buy stocks">
                    <p>Now that you know what you’re looking for, it’s time to actually pull the trigger and buy something that fits your criteria.</p>
                    <p>Log back into your online broker and use their interface to create an order to buy. You can set your order up in a number of ways, so just ensure that when your order goes through you’ll be buying at a price that you’re happy with.</p>
                </RoadMapCheckboxSection>
                <RoadMapCheckboxSection checked={this.state.trackAndManage} title="Track and manage your portfolio">
                    <p>The magic of stocks is that you can typically just completely ignore them for years at a time and they will make you money. That’s the appeal. Stocks can be a truly passive form of income.</p>
                    <p>Depending on your methodology, you should pay attention to your portfolio at least a few times a year and verify that it is on track. You may also want to spend time finding more stocks that fit your needs and add them to your portfolio.</p>
                    <p>Stock market investing can be lucrative, just like real estate and business investing, if you make the right decisions. If you plan to invest large percentages of your net worth into stocks, you should put the time in to learn the trade and make the best decisions you can.</p>
                    <p>If stocks are more of a supplemental investment (like it is for me), you can probably afford to be less involved and just let the passage of time work in your favor.</p>
                </RoadMapCheckboxSection>
            </div>
        )
    }
}

export default StockPortfolioRoadMap;