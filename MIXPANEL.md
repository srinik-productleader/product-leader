# Mixpanel analytics

This static portfolio is configured for Mixpanel project token `cf11b1e1ee4712995d214e553d973f75`.

## Tracking included

- Automatic page views and Mixpanel autocapture
- `Product Roadmap Viewed` when a case study is opened and when a case-study page loads
- `Contact Intent` for email and phone links
- `Resume Viewed` for CV/resume links
- `Section Viewed` for in-page navigation links

## Deployment validation

1. Upload the complete ZIP contents to the website host or GitHub Pages.
2. Open the deployed site in a normal browser tab.
3. Visit the homepage, open a product roadmap, and click the CV or contact link.
4. In Mixpanel, open **Live View** and confirm that page-view activity and the custom events appear.
5. If Live View remains empty, check the browser console and Network tab for requests to `cdn.mxpnl.com` and `api.mixpanel.com`; ad blockers, privacy extensions, CSP rules, or an incorrect project token can prevent delivery.

The implementation uses Mixpanel's queueing snippet so events are queued while the Mixpanel library loads, rather than being silently discarded when the external script has not finished loading.
