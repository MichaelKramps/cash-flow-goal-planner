const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {

    const session = await stripe.checkout.sessions.create({
        payment_method_types: [
            'card',
        ],

        line_items: [
            {
                price: 'price_1JOY02L1S8gXXiuCYonQT2XK',
                quantity: 1,
            },
        ],

        mode: 'payment',
        success_url: `https://www.unboundinvestor.com/payment-success.html`,
        cancel_url: `https://www.unboundinvestor.com/payment-cancel.html`,

    });

    const response = {
        statusCode: 303,
        headers: {
            "Location": JSON.stringify(session.url),
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "POST,GET"
        }
    };

    return response;
};
