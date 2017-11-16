---
title: Create transaction
description: This page shows you how to create a transaction
lunr: true
nav_sort: 1
nav_groups:
- primary
---

## 1. Post your transaction details

To create a transaction you need to send us the transaction information
as a JSON object. To identify yourself you need to supply an api key. Here
is an example using [curl](https://en.m.wikipedia.org/wiki/CURL#cURL):

```bash
curl --request 'POST' \
     --url 'https://staging.payment.telenordigital.com/transactions' \
     --header 'content-type: application/json' \
     --header 'accept: application/json' \
     --user 'your-api-key' \
     --data '{
                "orderId": "your-order-id",
                "purchaseDescription": "Your purchase description",
                "amount": "MMK 1500",
                "successRedirect": "http://example.com?success",
                "cancelRedirect": "http://example.com?aborted"
            }'
```

## 2. Send your end-user to the payment screen

When you run this code, we will respond with a json-object which contains a `links` property.
You should redirect your users to the link with `rel: PAYMENT` within this property, and we will handle the rest.

If you are testing the system, just open a browser and go to the payment link!

## 3. End-user returns on your successRedirect URI

After paying your end-user will come back on the successRedirect URI. Now is a good time to verify the transaction 
details using [View transaction](./view.html).

If the end-user aborts the flow they will return on the cancelRedirect URI.


### Explanation
We're using curl to perform the HTTP request, but you can use whatever you want
([unirest](http://unirest.io/) is pretty good).
To form a correct request we need to include the request type (`POST`), the target url
(`https://staging.payment.telenordigital.com/transactions`), some headers
to describe the content, the `user` (api-key) and the actual `data` for the transaction:

* `orderId` - ID that you use in **your** application.
* `purchaseDescription` - The information we show users when they buy your product
* `amount` - The amount and [currency](https://en.m.wikipedia.org/wiki/ISO_4217) you want to charge your user
* `successRedirect` and `cancelRedirect` -  Where to redirect the user in
   case of success, or in case of cancelled/failed payment

When setting up real transactions in production, the url should be
`https://payment.telenordigital.com/transactions` (without the `staging`)

For even more details, please use the
[docs](http://docs.telenordigital.com/apis/connect/payment/#single-payment-transactions-post).

