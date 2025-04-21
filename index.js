const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
    console.log('Alert received:', req.body);

    const action = req.body.action;
    const contracts = req.body.qty;
    const symbol = req.body.symbol;

    const token = 'YOUR_TRADOVATE_ACCESS_TOKEN'; // Placeholder
    const tradovateUrl = 'https://demo-api.tradovate.com/v1/order/placeorderrequest';

    const order = {
        accountId: YOUR_ACCOUNT_ID,
        action: action,
        symbol: symbol,
        orderQty: contracts,
        orderType: 'Market',
        isAutomated: true
    };

    try {
        const response = await axios.post(tradovateUrl, order, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Order sent:', response.data);
    } catch (error) {
        console.error('Error sending order:', error.response?.data || error.message);
    }

    res.sendStatus(200);
});

app.listen(3000, () => console.log('Webhook Server Running on Port 3000'));
