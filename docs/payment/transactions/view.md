---
title: View transaction
description: This page shows you how to view transactions
lunr: true
nav_sort: 2
nav_groups:
- primary
---

## Viewing a single transaction

```bash
curl --request 'GET' \
     --url 'https://staging.payment.telenordigital.com/transactions/{transactionId}' \
     --header 'content-type: application/json' \
     --header 'accept: application/json' \
     --user 'your-api-key'
```

### Explanation
The `{transactionId}` value is the transaction-id you received
in the response when creating a transaction (see example above).
It is not the same as the `orderId` you sent us. When executing
this call you will get back an object which has (among other things) a `state` field.

For a more details, please use the
[docs](http://docs.telenordigital.com/apis/connect/payment/#single-payment-transaction-by-transactionid-get).

## Viewing multiple transactions

... FILL THIS IN
