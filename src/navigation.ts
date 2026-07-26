import type { CallToAction } from './types';

import { CONTACT, WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from './contact';
import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData: { links: Array<{ text: string; href: string }>; actions: Array<CallToAction> } = {
  links: [
    { text: 'Services', href: getPermalink('/#services') },
    { text: 'Réalisations', href: getPermalink('/#realisations') },
    { text: 'Pourquoi nous', href: getPermalink('/#confiance') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  actions: [
    {
      variant: 'tertiary',
      text: CONTACT.phoneDisplay,
      href: `tel:${CONTACT.phone}`,
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
      title: 'Services',
      links: [
        { text: 'Sites web & applications mobiles', href: getPermalink('/#services') },
        { text: 'Outils de gestion sur mesure', href: getPermalink('/#services') },
        { text: 'Digitalisation & IA', href: getPermalink('/#services') },
        { text: 'Cloud & hébergement', href: getPermalink('/#services') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
        { text: 'WhatsApp', href: whatsappLink(WHATSAPP_DEFAULT_MESSAGE) },
        { text: CONTACT.email, href: `mailto:${CONTACT.email}` },
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
};
