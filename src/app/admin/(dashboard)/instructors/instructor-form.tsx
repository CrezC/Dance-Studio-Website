import type { Instructor } from "@prisma/client";
import { Button } from "@/components/ui/button";

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/30";
const labelClass = "block text-sm font-medium text-foreground";

export function InstructorForm({
  action,
  instructor,
  error,
}: {
  action: (formData: FormData) => void;
  instructor?: Instructor;
  error?: string;
}) {
  return (
    <form
      action={action}
      className="mt-8 max-w-2xl space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      {error === "slug-taken" && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          That slug is already used by another instructor. Choose a different one.
        </p>
      )}

      <div>
        <label htmlFor="name" className={labelClass}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          defaultValue={instructor?.name}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="slug" className={labelClass}>
          Slug (used in the URL, e.g. jane-doe)
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          required
          pattern="[a-z0-9]+(-[a-z0-9]+)*"
          title="Lowercase letters, numbers, and hyphens only"
          defaultValue={instructor?.slug}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="bio" className={labelClass}>
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          rows={4}
          required
          defaultValue={instructor?.bio}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="photoUrl" className={labelClass}>
          Photo URL (optional)
        </label>
        <input
          id="photoUrl"
          name="photoUrl"
          type="url"
          defaultValue={instructor?.photoUrl ?? ""}
          className={inputClass}
        />
      </div>

      <div className="border-t border-border pt-6">
        <Button type="submit" size="lg" className="h-11 rounded-full px-7 text-base">
          {instructor ? "Save changes" : "Add instructor"}
        </Button>
      </div>
    </form>
  );
}
