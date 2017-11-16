---
title: View agreement
description: This page shows you how to view agreements
lunr: true
nav_sort: 2
nav_groups:
- primary
---

## Viewing a single agreement

```bash
curl --request 'GET' \
     --url 'https://staging.payment.telenordigital.com/agreements/{agreementId}' \
     --header 'content-type: application/json' \
     --header 'accept: application/json' \
     --user 'your-api-key'
```

### Explanation
The `{agreementId}` value is the agreement-id you received in
the response when creating an agreement (see example above).
It is not the same as the `orderId` you sent us. When executing
this call you will get back an object which has (among other things) a `state` field.

For a more details, please use the
[docs](http://docs.telenordigital.com/apis/connect/payment/#recurring-payment-charging-agreement-by-id).

## Viewing multiple agreements

... FILL THIS IN
