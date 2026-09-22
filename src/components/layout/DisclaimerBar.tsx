import { DISCLAIMER } from "../../config/site";

/**
 * Persistent, sitewide notice that this is an unofficial concept — kept
 * visible (not just in the footer) so the page can't be mistaken for the
 * real business's website if shared or screenshotted on its own.
 */
export default function DisclaimerBar() {
  return (
    <div className="bg-ink-950 px-4 py-2 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper-50/70">
        {DISCLAIMER}
      </p>
    </div>
  );
}
