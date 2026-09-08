/* Mixpanel analytics for the static portfolio site. */
(function (document, window) {
  var MIXPANEL_TOKEN = "cf11b1e1ee4712995d214e553d973f75";

  (function (c, a) {
    if (!c.__SV) {
      var b, h, e, k;
      window.mixpanel = a;
      a._i = [];
      a.init = function (b, e, f) {
        function g(b, c) {
          var a = c.split(".");
          2 === a.length && (b = b[a[0]], c = a[1]);
          b[c] = function () {
            b.push([c].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }
        var d = a;
        "undefined" !== typeof f ? d = a[f] = [] : f = "mixpanel";
        d.people = d.people || [];
        d.toString = function (b) {
          var a = "mixpanel";
          "mixpanel" !== f && (a += "." + f);
          b || (a += " (stub)");
          return a;
        };
        d.people.toString = function () { return d.toString(1) + ".people (stub)"; };
        d.people._i = [];
        d.people.push = function () {
          var a = Array.prototype.push;
          a.apply(d.people, arguments);
        };
        for (var h = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders stop_batch_senders".split(" "), i = 0; i < h.length; i++) g(d, h[i]);
        a._i.push([b, e, f]);
      };
      a.__SV = 1.2;
      b = c.createElement("script");
      b.type = "text/javascript";
      b.async = true;
      b.src = "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
      h = c.getElementsByTagName("script")[0];
      h.parentNode.insertBefore(b, h);
    }
  })(document, window.mixpanel || []);

  window.mixpanel.init(MIXPANEL_TOKEN, {
    autocapture: true,
    track_pageview: true,
    persistence: "localStorage",
    api_host: "https://api-eu.mixpanel.com",
    debug: false
  });

  function textOf(element) {
    return element ? (element.textContent || "").replace(/\s+/g, " ").trim() : "";
  }

  function track(name, properties) {
    if (window.mixpanel && typeof window.mixpanel.track === "function") {
      window.mixpanel.track(name, properties || {});
    }
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a") : null;
    if (!link) return;

    var href = link.getAttribute("href") || "";
    var roadmapLink = href.indexOf("case-studies/") !== -1 || href.indexOf("../case-studies/") !== -1;
    var contactLink = href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0;
    var resumeLink = href.toLowerCase().indexOf("resume.pdf") !== -1;

    if (roadmapLink) {
      track("Product Roadmap Viewed", {
        product: textOf(link.querySelector("h3")) || textOf(link.querySelector("h1")) || textOf(link),
        source: document.body.classList.contains("case-page") ? "case_study_navigation" : "featured_work"
      });
    }

    if (contactLink) {
      track("Contact Intent", {
        channel: href.indexOf("mailto:") === 0 ? "email" : "phone",
        link_text: textOf(link)
      });
    }

    if (resumeLink) {
      track("Resume Viewed", { link_text: textOf(link) || "Resume" });
    }

    if (href.indexOf("#") === 0 && href.length > 1) {
      track("Section Viewed", { section: href.substring(1), link_text: textOf(link) });
    }
  }, false);

  var pageHeading = document.querySelector("main h1") || document.querySelector("h1");
  if (pageHeading && document.body.classList.contains("case-page")) {
    track("Product Roadmap Viewed", {
      product: textOf(pageHeading) || document.title,
      source: "case_study"
    });
  }
})(document, window);
