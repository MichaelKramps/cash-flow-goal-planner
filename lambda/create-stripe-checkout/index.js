const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {

    const session = await stripe.checkout.sessions.create({
        payment_method_types: [
            'card',
        ],

        line_items: [
            {
                price: '12.34',
                quantity: 1,
            },
        ],

        mode: 'payment',
        success_url: `https://www.unboundinvestor.com/payment-success.html`,
        cancel_url: `https://www.unboundinvestor.com/payment-cancel.html`,

    });

    const response = {
        statusCode: 200,
        body: JSON.stringify(session.url),
    };

    return response;
};
