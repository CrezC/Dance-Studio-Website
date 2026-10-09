import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminWaiversPage() {
  const waivers = await prisma.waiverSubmission.findMany({
    orderBy: { signedAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight text-foreground">Signed waivers</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Signed records are read-only — they&apos;re the compliance record, not editable data.
      </p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Signer</th>
              <th className="px-4 py-3 font-medium">On behalf of</th>
              <th className="px-4 py-3 font-medium">Signed</th>
              <th className="px-4 py-3 font-medium">Version</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {waivers.map((w) => (
              <tr key={w.id}>
                <td className="px-4 py-3 text-foreground">
                  {w.signerName}
                  <div className="text-xs text-muted-foreground">{w.signerEmail}</div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  {w.isMinor ? `${w.childName} (${w.relationship})` : "Self"}
                </td>
                <td className="px-4 py-3 text-muted-foreground">{w.signedAt.toLocaleString()}</td>
                <td className="px-4 py-3 text-muted-foreground">{w.waiverVersion}</td>
              </tr>
            ))}
            {waivers.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                  No signed waivers yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
