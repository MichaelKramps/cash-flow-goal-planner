import React from 'react';
import Shared from "../../Shared/Shared";

class StepThree extends React.Component {
    render() {
        return (
            <div className={"step-three " + Shared.determineVisibility(this.props)}>
                <h2>Step Three: Plan Your Future Investments</h2>
                <p>Now it's time to plan your next investment (or two or three). This is where you'll have to start thinking more deeply about how you want to reach your goal.</p>
                <h3>How Fast Do You Want To Reach Your Goal?</h3>
                <p>Not all investments create cash flow at the same speed.</p>
                <ul>
                    <li><strong>Stocks:</strong> The primary creation of cash flow from stocks is through dividends, which are a very slow way to create cash flow. Stocks are a slow game.</li>
                    <li><strong>Real Estate:</strong> Real estate is typically a much faster path to creating cash flow. Using a loan to purchase a cash flowing asset often increases your return on investment. Where dividends are typically below 5% of your initial investment, real estate can return over 10% of your investment in cash flow.</li>
                    <li><strong>Business Acquisition:</strong> You can easily see a 20% return on your investment by buying a business WITHOUT a loan. When you use a loan to buy a business, you can see returns of over 100%. This is the fastest method I know for creating cash flow.</li>
                </ul>
                <h3>Interest and Comfort</h3>
                <p>Using a loan to buy an investment can supercharge your ROI, but it's not for everyone. Many will never feel comfortable taking on a loan they can't pay off with only their day job. And many of those investments (real estate, business) require a significant amount of work to make profitable.</p>
                <p>Just because you can reach your goals faster with a particular investment, doesn't mean it suits you.</p>
                <h3>Diversification vs. Specialization</h3>
                <p>I often hear the word "diversify" championed when discussing investing strategy, but I rarely hear "specialize." There is certainly value in the practice of investing widely enough that any one investment failing won't ruin you. However, there is an equally powerful idea that becoming an expert at something also makes you less likely to fail.</p>
                <p>It may not be wise to buy a long term rental, then try buying a business and then buy some stocks and then get into the short term rental market.</p>
                <p>You can better diversify by becoming an expert in short term rentals and have a large portolio of real estate that cash flows with Airbnb. By becoming an expert in one style of investing (maybe two) you can have a more solid investing strategy than someone who tries a little of everything.</p>
                <h3>It's Up To You</h3>
                <p>I could talk about investing strategies for days, but I can't tell you how to reach your goal in your way. There's no book you can read or conversation you can have that will show you the magic formula. You just have to take your best guess and start walking the path of your plan.</p>
                <p>The hardest part of creating cash flow isn't figuring out what to do, it's stepping forward even when you don't know exactly what to do. But I'll do my best to help guide you. And that's the next step.</p>
            </div>
        )
    }
}

export default StepThree;