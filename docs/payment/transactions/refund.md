---
title: Refund transaction
description: This page shows you create a refund for a transaction
lunr: true
nav_sort: 3
nav_groups:
- primary
---

## Creating a refund for a transaction

```bash
curl --request 'POST' \
     --url 'https://staging.payment.telenordigital.com/transactions/{transactionId}/refunds' \
     --header 'content-type: application/json' \
     --header 'accept: application/json' \
     --user 'your-api-key' \
     --data '{
         "refundIssuer": "refundissuer@example.com",
         "refundReason": "Reason for issuing refund."
     }'
```
