import { WHATSAPP_HELLO, whatsappLink } from '@/content/site';
import { WhatsApp } from './Icons';
import styles from './WhatsAppFab.module.css';

export function WhatsAppFab() {
  return (
    <a
      className={styles.fab}
      href={whatsappLink(WHATSAPP_HELLO)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp />
      <b>Ask about a trip</b>
    </a>
  );
}
