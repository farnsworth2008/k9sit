function initPayPalButton() {
    console.log('Setting up smart-button-container');
    document.getElementById('smart-button-container').innerHTML = '<div style="text-align: center;"><div id="paypal-button-container"></div></div>'

    paypal.Buttons({
    style: {
        shape: 'rect',
        color: 'gold',
        layout: 'vertical',
        label: 'pay',
        
    },

    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{"description":"60 Minute K9 Session","amount":{"currency_code":"USD","value":100}}]
        });
    },

    onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
        
        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Thank you for your payment!</h3>';

        // Or go to another URL:  actions.redirect('thank_you.html');
        
        });
    },

    onError: function(err) {
        console.log(err);
    }
    }).render('#paypal-button-container');    
}
initPayPalButton();