import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "admin_session";

// Single shared admin password for the MVP — no per-user accounts yet (see
// the "Instructor accounts" V2 item in the design doc). The cookie value is
// an HMAC of a fixed payload using a server-only secret, so it proves the
// holder was issued a session by us without storing anything server-side.
function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not set");
  }
  return secret;
}

export function createSessionToken(): string {
  return createHmac("sha256", getSecret()).update("admin").digest("hex");
}

export function isValidSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const expected = createSessionToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function checkPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    throw new Error("ADMIN_PASSWORD is not set");
  }
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}
