# Mixpanel tracking

This static portfolio is configured for Mixpanel project token `cf11b1e1ee4712995d214e553d973f75`.

The project is hosted in Mixpanel's EU data centre, so the SDK is configured with:

```js
api_host: "https://api-eu.mixpanel.com"
```

Tracked behaviour includes page views, autocapture, product roadmap clicks, contact intent, resume clicks, and section navigation.

## Verification

1. Deploy the site to its normal HTTPS hosting environment.
2. Open the deployed homepage in a fresh browser tab.
3. Visit a case-study page and click a contact or CV link.
4. In Mixpanel, open **Events** or **Live View** for project `4059205`.
5. Confirm that new events are arriving in the EU project.

If no events appear, temporarily disable browser ad/privacy blockers and check the browser Network panel for requests to `api-eu.mixpanel.com`.
