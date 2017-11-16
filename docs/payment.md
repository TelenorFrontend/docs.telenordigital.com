---
title: Payment
description: The Payment page shows a high level overview of CONNECT Payment
lunr: true
nav_sort: 1
nav_groups:
  - primary
nav_group: true
tags:
  - payment
  - overview
---

CONNECT Payment supports multiple sources of funds, tailored to the local markets, service provider requirements and user preferences (debit/credit cards, carrier billing, e-wallets, etc).

The CONNECT Payment flow works as follows:

* The user selects the products to buy and clicks "Pay with CONNECT".
* You send a prepare transaction request to our endpoint containing all the information we need to set up the transaction.
* We process the request and return the transaction together with a URI where the user can perform the actual purchase. The same URI can be used by you to query the state of the transaction.
* You redirect the user to the payment page for the transaction we have set up.
* The user pays using their preferred payment method. If the payment fails for any reason the user stays on the same page and gets an error message explaining what went wrong. If the user chooses to cancel the payment while being on the payment page he will be redirected to the URI you specified as the cancelRedirectUri in the prepare request.
* When the payment is successful the user gets redirected to the URI you specified as the successRedirectUri in the prepare request. If you are using CONNECT to manage your service access we will set all the Rights according to your specifications in the prepare request.
* You should check the state of the transaction by querying URI you got back in step 3, or by querying the state of the order. (API documentation)
* You show the user the receipt of the purchase.
* If the payment is set to be recurring, an equal transaction will be set up and charged using the same payment method as the first time.
A sequence diagram of this flow can be found below.
