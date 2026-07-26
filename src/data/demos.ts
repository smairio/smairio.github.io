/**
 * The demonstration projects shown in the « Réalisations » section.
 *
 * These are demos, not client work, and the site says so on every card. Adding
 * a finished one is a data-only change: set `image` and `href` on its entry and
 * the card stops saying « En construction ». Never set them to a stock photo or
 * a placeholder link — an empty card is honest, a dressed-up one is not.
 *
 * Naming a trade here is intentional and does not contradict the generic
 * services copy: a demo is evidence of something built, not an offer.
 */
export interface Demo {
  /** What the demo is. */
  title: string;
  /** The single capability it exists to prove. */
  shows: string;
  icon: string;
  /** Screenshot of the finished demo. Absent means the card shows « En construction ». */
  image?: ImageMetadata;
  /** Where the live demo is deployed. */
  href?: string;
}

export const demos: Array<Demo> = [
  {
    title: 'Centre de formation',
    shows: 'Inscriptions, groupes, présences et suivi des paiements.',
    icon: 'tabler:school',
  },
  {
    title: 'Auto-école',
    shows: 'Élèves, planning des leçons, tranches payées et rappels d’examen.',
    icon: 'tabler:steering-wheel',
  },
  {
    title: 'Location de voitures',
    shows: 'Catalogue, calendrier de disponibilité et réservation en ligne.',
    icon: 'tabler:car',
  },
  {
    title: 'Maison d’hôtes',
    shows: 'Réservation directe, sans commission d’intermédiaire.',
    icon: 'tabler:bed',
  },
  {
    title: 'Salle des fêtes',
    shows: 'Galerie photo, dates libres et demande de réservation.',
    icon: 'tabler:building-community',
  },
  {
    title: 'Cabinet d’avocat',
    shows: 'Domaines d’intervention et demande de rendez-vous.',
    icon: 'tabler:scale',
  },
  {
    title: 'Scan intelligent de documents',
    shows: 'Une photo d’un document papier, les données extraites, un PDF généré.',
    icon: 'tabler:photo-scan',
  },
];
