const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 2999,
        currency: "usd"
    });

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Methods": "POST"
        },
        body: {
            clientSecret: paymentIntent.client_secret
        }
    };

    return response;
};
