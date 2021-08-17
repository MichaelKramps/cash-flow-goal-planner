let url = window.location.href;
if (/payment/.test(url)) {

    console.log("krampssss")

    var stripe = Stripe("pk_test_3WEJFfd6Cixu6beZLDo4Zlef");

    document.querySelector(".stripe-payment-form button").disabled = true;

    fetch("https://tv4p255fj1.execute-api.us-east-1.amazonaws.com/staging/stripe-payment-intent/get-intent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            items: [{id: "cash-flow-handbook-access"}]
        })
    }).then(function (result) {
        return result.json();
    }).then(function (data) {
        var elements = stripe.elements();

        var style = {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                fontFamily: 'Arial, sans-serif',
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        };

        var card = elements.create("card", {style: style});

        // Stripe injects an iframe into the DOM
        card.mount("#card-element");

        card.on("change", function (event) {
            // Disable the Pay button if there are no card details in the Element
            document.querySelector(".stripe-payment-form button").disabled = event.empty;
            document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
        });

        var form = document.getElementById("stripe-payment-form");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            // Complete payment when the submit button is clicked
            payWithCard(stripe, card, data.clientSecret);
        });
    });

}
// Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.
var payWithCard = function(stripe, card, clientSecret) {

    loading(true);

    stripe
        .confirmCardPayment(clientSecret, {
            payment_method: {
                card: card
            }
        })
        .then(function(result) {
            console.log(result);
            if (result.error) {
                showError(result.error.message);
            } else {
                document.getElementById("stripe-payment-form").submit();
                orderComplete(result.paymentIntent.id);
            }
        });
};

/* ------- UI helpers ------- */
// Shows a success message when the payment is complete
var orderComplete = function(paymentIntentId) {

    loading(false);

    document
        .querySelector(".result-message a")
        .setAttribute(
            "href",
            "https://dashboard.stripe.com/test/payments/" + paymentIntentId
        );

    document.querySelector(".result-message").classList.remove("invisible");
    document.querySelector(".stripe-payment-form button").disabled = true;
};

// Show the customer the error from Stripe if their card fails to charge
var showError = function(errorMsgText) {

    loading(false);

    var errorMsg = document.querySelector("#card-error");
    errorMsg.textContent = errorMsgText;

    setTimeout(function() {
        errorMsg.textContent = "";
    }, 4000);
};

// Show a spinner on payment submission
var loading = function(isLoading) {
    if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector(".stripe-payment-form button").disabled = true;
        document.querySelector("#spinner").classList.remove("hidden");
        document.querySelector("#button-text").classList.add("hidden");
    } else {
        document.querySelector(".stripe-payment-form button").disabled = false;
        document.querySelector("#spinner").classList.add("hidden");
        document.querySelector("#button-text").classList.remove("hidden");
    }
};
