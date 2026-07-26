/**
 * Every phone number, WhatsApp link and email address on the site resolves from
 * here. Change the number once and the header, footer, hero and every CTA follow.
 *
 * TODO(#3): `PHONE_E164` is a placeholder, not a working line. Replace it with
 * LamdaSoft's real number before the site is shown to a single prospect — the
 * WhatsApp buttons are the site's only conversion path and they are dead until
 * then.
 */
const PHONE_E164 = '+21600000000';

/**
 * `+216 12 345 678`. Tunisian numbers are a 3-digit country code plus 8 digits;
 * anything else is shown as-is rather than sliced into a wrong-looking shape.
 * Derived so there is no second field to keep in sync with the real number.
 */
const formatTunisianNumber = (e164: string): string => {
  const digits = e164.replace(/\D/g, '');
  const local = digits.slice(3);
  if (digits.length !== 11 || !e164.startsWith('+216')) return e164;
  return `+${digits.slice(0, 3)} ${local.slice(0, 2)} ${local.slice(2, 5)} ${local.slice(5)}`;
};

export const CONTACT = {
  /** E.164, digits only after the `+`. Used for `tel:` and `wa.me` links. */
  phone: PHONE_E164,

  /** Spaced for display, derived from `phone`. */
  phoneDisplay: formatTunisianNumber(PHONE_E164),

  /**
   * TODO(#8): the mailbox is provisioned along with the lamdasoft.tn domain.
   * Until then `isEmailLive` stays false and the site shows no address, because
   * a published address that bounces costs more trust than no address at all.
   */
  email: 'contact@lamdasoft.tn',
  isEmailLive: false,
} as const;

/**
 * A wa.me link that opens WhatsApp with `message` already typed, so the visitor
 * only has to hit send. `wa.me` wants the number without `+` or separators.
 */
export const whatsappLink = (message: string): string =>
  `https://wa.me/${CONTACT.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

/** Dial link. Exists so no caller hand-builds `tel:` and drifts from CONTACT. */
export const telLink = (): string => `tel:${CONTACT.phone}`;

/** Default opener, used by the header and any CTA without its own context. */
export const WHATSAPP_DEFAULT_MESSAGE = 'Bonjour, je souhaite digitaliser mon entreprise.';
