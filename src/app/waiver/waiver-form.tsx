"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { submitWaiver } from "./actions";

export function WaiverForm() {
  const [isMinor, setIsMinor] = useState(false);

  return (
    <form className="mt-10 space-y-6" action={submitWaiver}>
      <fieldset className="space-y-3">
        <legend className="font-serif text-xl text-foreground">Who is this waiver for?</legend>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="radio"
              name="signFor"
              checked={!isMinor}
              onChange={() => setIsMinor(false)}
              className="size-4"
            />
            Myself
          </label>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="radio"
              name="signFor"
              checked={isMinor}
              onChange={() => setIsMinor(true)}
              className="size-4"
            />
            My child (I am the parent/legal guardian)
          </label>
        </div>
        {/* Mirrors the radio selection into a plain field the server action reads. */}
        <input type="hidden" name="isMinor" value={isMinor ? "on" : "off"} />
      </fieldset>

      <div>
        <label htmlFor="signerName" className="block text-sm font-medium text-foreground">
          {isMinor ? "Parent / Guardian name" : "Full name"}
        </label>
        <input
          id="signerName"
          name="signerName"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
        />
      </div>

      <div>
        <label htmlFor="signerEmail" className="block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="signerEmail"
          name="signerEmail"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
        />
      </div>

      {isMinor && (
        <>
          <div>
            <label htmlFor="childName" className="block text-sm font-medium text-foreground">
              Child&apos;s name
            </label>
            <input
              id="childName"
              name="childName"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
            />
          </div>
          <div>
            <label htmlFor="relationship" className="block text-sm font-medium text-foreground">
              Relationship to child
            </label>
            <input
              id="relationship"
              name="relationship"
              type="text"
              placeholder="e.g. Parent, Legal Guardian"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
            />
          </div>
        </>
      )}

      <label className="flex items-start gap-3 text-sm text-foreground">
        <input
          type="checkbox"
          name="agreedToTerms"
          required
          className="mt-0.5 size-4"
        />
        <span>
          I have read and agree to the waiver above.{" "}
          {isMinor
            ? "I am signing on behalf of the child named above as their parent or legal guardian."
            : "Typing my name above serves as my electronic signature."}
        </span>
      </label>

      <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-base">
        Sign Waiver
      </Button>
    </form>
  );
}
