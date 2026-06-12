// lib/schema.ts
// JSON-LD builders for Kenya's Transfer Hub. One editorial entity (KTH) is the
// author/publisher across hubs and spokes; no invented person. Article +
// BreadcrumbList + FAQPage are emitted on /guides/[slug] and /blog/[slug].

export const SITE_URL = 'https://transfer.co.ke';
export const SITE_NAME = "Kenya's Transfer Hub";

const orgId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;
// "KTH" editorial entity — the byline author/reviewer for every guide and spoke.
const editorialId = `${SITE_URL}/#editorial`;

export const EDITORIAL = {
  id: editorialId,
  byline: 'KTH',
  name: "Kenya's Transfer Hub Editorial Team",
};

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: SITE_NAME,
    alternateName: 'Transfer Kenya',
    url: SITE_URL,
    description:
      'Kenyan money and asset transfer guides and calculators: M-Pesa charges, bank transfers, remittance, KPLC tokens, logbook and property transfer, pension and import duty.',
    areaServed: { '@type': 'Country', name: 'Kenya' },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': orgId },
    inLanguage: 'en-KE',
  };
}

// The editorial author/reviewer entity, referenced by @id from every Article.
export function editorialEntitySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': editorialId,
    name: EDITORIAL.name,
    url: `${SITE_URL}/guides`,
    parentOrganization: { '@id': orgId },
    description:
      'Editorial team for Kenya’s Transfer Hub. Fees, rates and thresholds are checked against the official source (Safaricom M-Pesa tariffs, CBK, KRA, NTSA, NSSF) and dated; figures change, so we link the authority on first mention.',
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

interface ArticleInput {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export function articleSchemaFor({ url, headline, description, datePublished, dateModified }: ArticleInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    datePublished,
    dateModified,
    author: { '@id': editorialId },
    publisher: { '@id': orgId },
    mainEntityOfPage: url,
    inLanguage: 'en-KE',
  };
}

// Serialise one or more schema objects for a single <script type="application/ld+json">.
export function jsonLd(...schemas: unknown[]) {
  return { __html: JSON.stringify(schemas.length === 1 ? schemas[0] : schemas) };
}
