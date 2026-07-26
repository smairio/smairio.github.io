import type { CallToAction } from './types';

import { CONTACT, WHATSAPP_DEFAULT_MESSAGE, telLink, whatsappLink } from './contact';
import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData: { links: Array<{ text: string; href: string }>; actions: Array<CallToAction> } = {
  links: [
    { text: 'Services', href: getPermalink('/#services') },
    { text: 'Réalisations', href: getPermalink('/#realisations') },
    { text: 'Engagements', href: getPermalink('/#confiance') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  actions: [
    {
      variant: 'tertiary',
      text: CONTACT.phoneDisplay,
      href: telLink(),
      icon: 'tabler:phone',
    },
    {
      variant: 'primary',
      text: 'WhatsApp',
      href: whatsappLink(WHATSAPP_DEFAULT_MESSAGE),
      target: '_blank',
      icon: 'tabler:brand-whatsapp',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'La boutique',
      links: [
        { text: 'Nos services', href: getPermalink('/#services') },
        { text: 'Nos démonstrations', href: getPermalink('/#realisations') },
        { text: 'Nos engagements', href: getPermalink('/#confiance') },
        { text: 'Le blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: CONTACT.phoneDisplay, href: telLink() },
        { text: 'WhatsApp', href: whatsappLink(WHATSAPP_DEFAULT_MESSAGE), target: '_blank' },
        // The email joins once the mailbox exists — see CONTACT.isEmailLive.
        ...(CONTACT.isEmailLive ? [{ text: CONTACT.email, href: `mailto:${CONTACT.email}` }] : []),
      ],
    },
  ],
  // TODO: add "Mentions légales" once the auto-entrepreneur registration is done.
  secondaryLinks: [],
  // TODO: add Facebook / Instagram / TikTok here once those accounts exist.
  // Leaving them out beats linking to "#" — a dead social icon reads as an
  // abandoned agency, which is the opposite of what this site is for.
  socialLinks: [{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') }],
  footNote: `© ${new Date().getFullYear()} LamdaSoft · Tous droits réservés.`,
  bigContact: {
    label: CONTACT.phoneDisplay,
    href: telLink(),
    note: 'Appelez-nous ou écrivez-nous sur WhatsApp — réponse rapide.',
  },
};
