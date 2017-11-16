---
title: Create agreement
description: This page shows you how to create an agreement
lunr: true
nav_sort: 1
nav_groups:
- primary
---

## Creating an agreement

Subscriptions are called **charging agreements** in our APIs.
To create a charging agreement you need to send us the agreement information
as a JSON object. To identify yourself you need to supply an api key. Here
is an example using [curl](https://en.m.wikipedia.org/wiki/CURL#cURL):

```bash
curl --request 'POST' \
     --url 'https://staging.payment.telenordigital.com/agreements' \
     --header 'content-type: application/json' \
     --header 'accept: application/json' \
     --user 'your-api-key' \
     --data '{
                "connectId": "subscription-owner-id",
                "recurrenceTimeSpec": "R//P1M",
                "trial.period": "false",
                "verificationTransaction": "{
                    "orderId": "your-order-id",
                    "purchaseDescription": "Your purchase description",
                    "amount": "MMK 1500",
                    "successRedirect": "http://example.com?success",
                    "cancelRedirect": "http://example.com?aborted"
                }"
             }'
```

When you run this code, we will respond with a json-object which
contains a (among other things)  `links` property.
You should redirect your users to the link with `rel: PAYMENT`
within this property, and we will handle the rest.

### Explanation
Creating an agreement is very similar to creating a transaction (see previous example), but
we need to supply a different data-structure with some additional information:

* `recurrenceTimeSpec` - [ISO 8601](https://en.m.wikipedia.org/wiki/ISO_8601)
   time-spec for how often charging should occur (`R//P1M` = monthly)
* `trial.period` (optional) - [ISO 8601](https://en.m.wikipedia.org/wiki/ISO_8601) duration
   of trial period. If you don't include it, user will not receive a free trial. If you include it,
   specify a single duration, ex: `1PM` means 1 month free trial.
* `verificationTransaction` - a transaction object, similar
   to the one from the transaction example. This will be the base-transaction for
   all further transactions in this subscription.

When setting up real agreements in production, the url should be
`https://payment.telenordigital.com/agreements` (without the `staging`)

For a more details, please use the
[docs](http://docs.telenordigital.com/apis/connect/payment/#recurring-payment-charging-agreement-post).

