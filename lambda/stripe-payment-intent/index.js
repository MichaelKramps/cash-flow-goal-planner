const stripe = require('stripe');

exports.handler = async (event) => {

    const body = JSON.parse(event.body);
    const secretKey = body.level === "prod" ? process.env.STRIPE_PROD_SECRET_KEY : process.env.STRIPE_STAGING_SECRET_KEY;

    const stripeInstance = stripe(secretKey);

    const paymentIntent = await stripeInstance.paymentIntents.create({
        amount: 2000,
        currency: "usd"
    });

    const allowOrigin = body.level === "prod" ? "https://handbook.unboundinvestor.com" : "*";

    const response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": allowOrigin,
            "Access-Control-Allow-Methods": "POST"
        },
        "body": JSON.stringify({
            clientSecret: paymentIntent.client_secret
        })
    };

    return response;
};
