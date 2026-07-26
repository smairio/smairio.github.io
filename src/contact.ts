/**
 * Every phone number, WhatsApp link and email address on the site resolves from
 * here. Change it once and the header, footer, hero and every CTA follow.
 *
 * TODO(#3): `phone` is a placeholder, not a working line. Replace it with
 * LamdaSoft's real number before the site is shown to a single prospect — the
 * WhatsApp buttons are the site's only conversion path and they are dead until
 * then.
 */
export const CONTACT = {
  /** E.164, digits only after the `+`. Used for `tel:` and `wa.me` links. */
  phone: '+21600000000',

  /** Spaced for display. Keep in sync with `phone`. */
  phoneDisplay: '+216 00 000 000',

  /** TODO(#8): mailbox is provisioned with the lamdasoft.tn domain. */
  email: 'contact@lamdasoft.tn',
} as const;

/**
 * A wa.me link that opens WhatsApp with `message` already typed, so the visitor
 * only has to hit send. `wa.me` wants the number without `+` or separators.
 */
export const whatsappLink = (message: string): string =>
  `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

/** Default opener, used by the header and any CTA without its own context. */
export const WHATSAPP_DEFAULT_MESSAGE = 'Bonjour, je souhaite digitaliser mon entreprise.';
