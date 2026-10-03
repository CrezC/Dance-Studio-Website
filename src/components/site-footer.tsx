export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 px-6 py-8 text-sm text-black/60 dark:border-white/10 dark:text-white/60">
      <div className="mx-auto max-w-5xl">
        <p>&copy; {new Date().getFullYear()} Studio Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
