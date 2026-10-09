import type { Class, Instructor } from "@prisma/client";
import { Button } from "@/components/ui/button";

const inputClass = "mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground";
const labelClass = "block text-sm font-medium text-foreground";

export function ClassForm({
  action,
  instructors,
  danceClass,
  error,
}: {
  action: (formData: FormData) => void;
  instructors: Instructor[];
  danceClass?: Class;
  error?: string;
}) {
  return (
    <form action={action} className="mt-8 max-w-xl space-y-4">
      {error === "slug-taken" && (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          That slug is already used by another class. Choose a different one.
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
          defaultValue={danceClass?.name}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="slug" className={labelClass}>
          Slug (used in the URL, e.g. contemporary-intro)
        </label>
        <input
          id="slug"
          name="slug"
          type="text"
          required
          pattern="[a-z0-9]+(-[a-z0-9]+)*"
          title="Lowercase letters, numbers, and hyphens only"
          defaultValue={danceClass?.slug}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          required
          defaultValue={danceClass?.description}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="instructorId" className={labelClass}>
          Instructor
        </label>
        <select
          id="instructorId"
          name="instructorId"
          required
          defaultValue={danceClass?.instructorId}
          className={inputClass}
        >
          <option value="" disabled>
            Select an instructor
          </option>
          {instructors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="dayOfWeek" className={labelClass}>
            Day
          </label>
          <input
            id="dayOfWeek"
            name="dayOfWeek"
            type="text"
            placeholder="Tuesday"
            required
            defaultValue={danceClass?.dayOfWeek}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="startTime" className={labelClass}>
            Start time
          </label>
          <input
            id="startTime"
            name="startTime"
            type="text"
            placeholder="18:00"
            required
            defaultValue={danceClass?.startTime}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="endTime" className={labelClass}>
            End time
          </label>
          <input
            id="endTime"
            name="endTime"
            type="text"
            placeholder="19:00"
            required
            defaultValue={danceClass?.endTime}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className={labelClass}>
            Price
          </label>
          <input
            id="price"
            name="price"
            type="text"
            placeholder="$20 / class"
            required
            defaultValue={danceClass?.price}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="availability" className={labelClass}>
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            defaultValue={danceClass?.availability ?? "OPEN"}
            className={inputClass}
          >
            <option value="OPEN">Open</option>
            <option value="LIMITED">Limited</option>
            <option value="FULL">Full</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="registrationUrl" className={labelClass}>
          External registration link
        </label>
        <input
          id="registrationUrl"
          name="registrationUrl"
          type="url"
          required
          defaultValue={danceClass?.registrationUrl}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="paymentUrl" className={labelClass}>
          External payment link (optional)
        </label>
        <input
          id="paymentUrl"
          name="paymentUrl"
          type="url"
          defaultValue={danceClass?.paymentUrl ?? ""}
          className={inputClass}
        />
      </div>

      <Button type="submit" size="lg" className="h-11 rounded-full px-7 text-base">
        {danceClass ? "Save changes" : "Create class"}
      </Button>
    </form>
  );
}
