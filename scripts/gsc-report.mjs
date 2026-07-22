/**
 * Pulls Search Analytics data from Google Search Console for pedrorojas.lat.
 * Used by the biweekly SEO loop routine (see seo-loop/progress.md) to decide
 * which queries/pages to reinforce or fix next.
 *
 * Auth: set GOOGLE_APPLICATION_CREDENTIALS to the path of a service account
 * JSON key that has been added as a (read-only) user on the Search Console
 * property. The key file must never be committed — see .gitignore.
 *
 * Property: defaults to the domain property "sc-domain:pedrorojas.lat".
 * Override with GSC_SITE_URL if the property was verified as a URL-prefix
 * property instead (e.g. "https://pedrorojas.lat/").
 *
 * Usage: npm run gsc:report [-- --days 28]
 */
import { google } from 'googleapis';

const SITE_URL = process.env.GSC_SITE_URL || 'sc-domain:pedrorojas.lat';
const DAYS = Number(process.argv.find((a) => a.startsWith('--days='))?.split('=')[1]) || 28;

function isoDaysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().slice(0, 10);
}

async function queryRange(searchconsole, startDate, endDate, dimensions) {
  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate,
      endDate,
      dimensions,
      rowLimit: 250,
    },
  });
  return res.data.rows || [];
}

function toMap(rows, keyIndex = 0) {
  const map = new Map();
  for (const row of rows) {
    map.set(row.keys[keyIndex], row);
  }
  return map;
}

function diffReport(currentRows, previousRows, label) {
  const prevMap = toMap(previousRows);
  const deltas = currentRows.map((row) => {
    const key = row.keys[0];
    const prev = prevMap.get(key);
    const prevClicks = prev?.clicks || 0;
    const prevImpressions = prev?.impressions || 0;
    return {
      [label]: key,
      clicks: row.clicks,
      clicksDelta: row.clicks - prevClicks,
      impressions: row.impressions,
      impressionsDelta: row.impressions - prevImpressions,
      ctr: Number((row.ctr * 100).toFixed(2)),
      position: Number(row.position.toFixed(1)),
    };
  });
  return deltas.sort((a, b) => b.clicksDelta - a.clicksDelta);
}

async function main() {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const searchconsole = google.searchconsole({ version: 'v1', auth });

  const currentStart = isoDaysAgo(DAYS);
  const currentEnd = isoDaysAgo(1);
  const previousStart = isoDaysAgo(DAYS * 2);
  const previousEnd = isoDaysAgo(DAYS + 1);

  const [currentQueries, previousQueries, currentPages, previousPages] = await Promise.all([
    queryRange(searchconsole, currentStart, currentEnd, ['query']),
    queryRange(searchconsole, previousStart, previousEnd, ['query']),
    queryRange(searchconsole, currentStart, currentEnd, ['page']),
    queryRange(searchconsole, previousStart, previousEnd, ['page']),
  ]);

  const report = {
    siteUrl: SITE_URL,
    window: { currentStart, currentEnd, previousStart, previousEnd },
    queries: diffReport(currentQueries, previousQueries, 'query'),
    pages: diffReport(currentPages, previousPages, 'page').map((p) => ({
      ...p,
      lowCtrCandidate: p.impressions >= 5 && p.ctr < 2,
    })),
  };

  console.log(JSON.stringify(report, null, 2));
}

main().catch((err) => {
  console.error('gsc-report failed:', err.message);
  process.exit(1);
});
