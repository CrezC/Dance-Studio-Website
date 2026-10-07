export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border px-6 py-8 text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl lg:px-2">
        <p>&copy; {new Date().getFullYear()} Cadence Dance Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
