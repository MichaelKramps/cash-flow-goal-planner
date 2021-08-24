let url = window.location.href;
if (/payment/.test(url)) {

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

        var elementStyles = {
            base: {
                color: '#32325D',
                fontWeight: 500,
                fontSize: '16px',
                fontSmoothing: 'antialiased',

                '::placeholder': {
                    color: '#CFD7DF',
                },
                ':-webkit-autofill': {
                    color: '#e39f48',
                },
            },
            invalid: {
                color: '#E25950',

                '::placeholder': {
                    color: '#FFCCA5',
                },
            },
        };

        var cardNumber = elements.create("cardNumber", {style: elementStyles});
        cardNumber.mount("#card-number");

        var cardExpiry = elements.create("cardExpiry", {style: elementStyles});
        cardExpiry.mount("#card-expiry");

        var cardCvc = elements.create("cardCvc", {style: elementStyles});
        cardCvc.mount("#card-cvc");

        cardNumber.on("change", function (event) {
            document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
        });

        cardExpiry.on("change", function (event) {
            document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
        });

        cardCvc.on("change", function (event) {
            document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
        });

        var submitButton = document.getElementById("submit-payment");

        submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            payWithCard(stripe, cardNumber, data.clientSecret);
        });
    });

}


var payWithCard = function(stripe, cardNumber, clientSecret) {

    loading(true);

    stripe
        .confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardNumber
            }
        })
        .then(function(result) {
            if (result.error) {
                showError(result.error.message);
            } else {
                document.getElementById("signal-successful-payment").click();
                orderComplete(result.paymentIntent.id);
            }
        });
};


var orderComplete = function(paymentIntentId) {

    loading(false);

    document.querySelector(".result-message").classList.remove("invisible");
    document.querySelector(".stripe-payment-form button").disabled = true;
};


var showError = function(errorMsgText) {

    loading(false);

    var errorMsg = document.querySelector("#card-error");
    errorMsg.textContent = errorMsgText;

    setTimeout(function() {
        errorMsg.textContent = "";
    }, 4000);
};


var loading = function(isLoading) {
    if (isLoading) {
        // Disable the button and show a spinner
        document.querySelector(".stripe-payment-form button").disabled = true;
        document.querySelector("#spinner").classList.remove("invisible");
    } else {
        document.querySelector(".stripe-payment-form button").disabled = false;
        document.querySelector("#spinner").classList.add("invisible");
    }
};
