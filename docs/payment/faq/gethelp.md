---
title: Get support!
description: This page explains how to get support for Connect Payment
lunr: true
nav_sort: 1
nav_groups:
- primary
---

## Compile descriptions

Gather as much information as possible. We need some information from
you to be able to locate and rectify the problem. 

Please note that Telenor Digital support personell will *never* ask for
your API key. Your API key needs to be redacted and removed from the
information you submit to us.

Some useful pieces of information are

- A written description of the problem you are trying to solve, and the
  issue you are facing.
- Your HTTP POST request, including JSON body, including headers, but
  *excluding* API secret. Also include the URI or endpoint you are
  trying to reach.
- The Connect Payment server response, including HTTP error code and any
  JSON or HTML body received.
- The time you experienced the error. Please use UTC time zone. State
  which time zone you are using if not.
- A screenshot can be valuable.


## Double check your compiled information

Often the error will be obvious at this point. If you are getting a 405 
Method not allowed then you probably are using the wrong HTTP verb in 
your request. Look up the documentation and see if the method uses GET 
or POST.

If you are using Charging Agreements then make sure you nested the info 
correctly - some things go inside the VerificationTransaction, other
things sit outside.

## Submit your issue

Send an email with your information to golive@telenordigital.com

The Telenor Digital engineers will get back to you shortly!


