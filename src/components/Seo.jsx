import { useEffect } from 'react';

const SITE_URL = 'https://www.eventeps.com';
const DEFAULT_IMAGE = `${SITE_URL}/img/logo1.png`;

// index.html ships static title/meta/OG tags so link-preview bots that don't run
// JS (Slack, WhatsApp, Twitter) still see something reasonable for the homepage.
// This component updates those same tags in place per route instead of appending
// new ones, so JS-executing crawlers and the browser tab see one correct, unique
// set of tags rather than the static ones plus a duplicate.
function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function Seo({ title, description, path, image = DEFAULT_IMAGE, noindex = false }) {
  const fullTitle = title ? `${title} | TEPS` : 'TEPS - Event Management Platform | Virtual, Hybrid & In-Person Events';
  const url = path ? `${SITE_URL}${path}` : SITE_URL;

  useEffect(() => {
    document.title = fullTitle;
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertCanonical(url);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'twitter:url', url);
    upsertMeta('property', 'twitter:title', fullTitle);
    upsertMeta('property', 'twitter:image', image);
    upsertMeta('property', 'og:image', image);
    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('property', 'twitter:description', description);
    }
  }, [fullTitle, description, url, image, noindex]);

  return null;
}

export default Seo;
