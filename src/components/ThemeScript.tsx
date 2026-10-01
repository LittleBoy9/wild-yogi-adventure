/**
 * Applies the stored theme before first paint so there is no flash of the
 * wrong one.
 *
 * This page opens LIGHT for everyone by default, deliberately: light is the
 * direction the client approved, so it should not depend on whether the
 * visitor's device happens to be in dark mode. Dark is one tap away and is
 * remembered once chosen.
 */
export function ThemeScript() {
  const js = `(function(){try{var t=localStorage.getItem('wy-theme')||'light';document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
