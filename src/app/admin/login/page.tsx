import { Lock } from "lucide-react";
import { login } from "./actions";
import { Button } from "@/components/ui/button";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8">
        <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Lock className="size-4" aria-hidden="true" />
        </span>
        <h1 className="mt-4 font-serif text-3xl tracking-tight text-foreground">Admin Login</h1>
        <p className="mt-1 text-sm text-muted-foreground">Cadence Dance Studio</p>

        {error && (
          <p className="mt-6 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            Incorrect password.
          </p>
        )}

        <form action={login} className="mt-6 space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/30"
            />
          </div>
          <Button type="submit" size="lg" className="h-11 w-full rounded-full text-base">
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
}
