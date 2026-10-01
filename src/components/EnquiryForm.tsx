'use client';

import { useId, useState } from 'react';
import { SITE, whatsappLink } from '@/content/site';
import { TREKS } from '@/content/treks';
import { WhatsApp } from './Icons';
import styles from './EnquiryForm.module.css';

/**
 * Composes a WhatsApp message rather than posting anywhere.
 *
 * There is no backend and no third party: nothing is stored, and WhatsApp is
 * how this company actually talks to customers. It also means the enquiry
 * survives if the visitor closes the tab — it is in their own chat history.
 */
export function EnquiryForm() {
  const id = useId();
  const [name, setName] = useState('');
  const [trek, setTrek] = useState(`${TREKS[0].name} (${TREKS[0].altitudeLabel})`);
  const [when, setWhen] = useState('');
  const [pax, setPax] = useState('2');
  const [experience, setExperience] = useState('This would be my first trek');
  const [note, setNote] = useState('');
  const [touched, setTouched] = useState(false);

  const nameMissing = touched && !name.trim();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!name.trim()) return;

    let whenText = 'sometime soon';
    if (when) {
      const d = new Date(`${when}-01T00:00:00`);
      if (!Number.isNaN(d.getTime())) {
        whenText = d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
      }
    }

    const message = [
      'Hi Wild Yogi Adventures!',
      '',
      `I am ${name.trim()}.`,
      `Trek: ${trek}`,
      `When: ${whenText}`,
      `Group size: ${pax || '1'}`,
      `Experience: ${experience}`,
      ...(note.trim() ? ['', note.trim()] : []),
      '',
      'Could you send me dates, cost and a kit list? Thank you!',
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <p className={styles.note}>
        This opens WhatsApp with your message ready. Nothing is stored on this site.
      </p>

      <label className={styles.field} htmlFor={`${id}-name`}>
        <span>Your name</span>
        <input
          id={`${id}-name`}
          type="text"
          autoComplete="name"
          placeholder="Avrajit Sarkar"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={nameMissing}
          aria-describedby={nameMissing ? `${id}-name-error` : undefined}
        />
      </label>
      {nameMissing && (
        <p className={styles.error} id={`${id}-name-error`}>
          We need a name to know who we are talking to.
        </p>
      )}

      <label className={styles.field} htmlFor={`${id}-trek`}>
        <span>Which journey</span>
        <select id={`${id}-trek`} value={trek} onChange={(e) => setTrek(e.target.value)}>
          {TREKS.map((t) => (
            <option key={t.slug} value={`${t.name} (${t.altitudeLabel})`}>
              {t.name} — {t.altitudeLabel}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — help me choose</option>
        </select>
      </label>

      <div className={styles.row}>
        <label className={styles.field} htmlFor={`${id}-when`}>
          <span>Roughly when</span>
          <input id={`${id}-when`} type="month" value={when} onChange={(e) => setWhen(e.target.value)} />
        </label>
        <label className={styles.field} htmlFor={`${id}-pax`}>
          <span>How many of you</span>
          <input
            id={`${id}-pax`}
            type="number"
            min={1}
            max={30}
            value={pax}
            onChange={(e) => setPax(e.target.value)}
          />
        </label>
      </div>

      <label className={styles.field} htmlFor={`${id}-exp`}>
        <span>Trekked before?</span>
        <select id={`${id}-exp`} value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option>This would be my first trek</option>
          <option>I have done one or two</option>
          <option>I trek regularly</option>
        </select>
      </label>

      <label className={styles.field} htmlFor={`${id}-note`}>
        <span>Anything else <i>(optional)</i></span>
        <textarea
          id={`${id}-note`}
          rows={3}
          placeholder="Questions about fitness, kit, cost…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>

      <button type="submit" className={`btn btn--fill ${styles.full}`}>
        <WhatsApp />
        Send on WhatsApp
      </button>
    </form>
  );
}

export function EnquiryFacts() {
  return (
    <ul className={styles.facts}>
      <li>
        <b>Where we are</b>
        <span>{SITE.address.locality} {SITE.address.postalCode}</span>
      </li>
      <li>
        <b>Call</b>
        <span>
          {SITE.phones.map((p, i) => (
            <span key={p.e164}>
              {i > 0 && ' · '}
              <a href={`tel:${p.e164}`}>{p.display}</a>
            </span>
          ))}
        </span>
      </li>
      <li>
        <b>Instagram</b>
        <span>
          <a
            href={`https://www.instagram.com/${SITE.instagram}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{SITE.instagram}
          </a>
        </span>
      </li>
    </ul>
  );
}

export function MapEmbed() {
  return (
    <div className={styles.map}>
      <iframe
        title={`${SITE.name} on Google Maps`}
        src={`https://www.google.com/maps?q=${SITE.coords.lat},${SITE.coords.lng}&hl=en&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export { styles as enquiryStyles };
