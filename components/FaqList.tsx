"use client";

import { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "./Icons";

export function FaqList({
  items,
  variant = "line",
}: {
  items: { id: string; q: string; a: string }[];
  variant?: "line" | "card";
}) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (items.some((item) => item.id === id)) setOpen(id);
  }, [items]);

  return (
    <div className={variant === "card" ? "space-y-3" : "divide-y divide-[#eadfe0]"}>
      {items.map((item) => {
        const expanded = open === item.id;
        return (
          <div
            key={item.id}
            id={item.id}
            className={variant === "card" ? "rounded-2xl bg-white px-5 shadow-sm" : "py-1"}
          >
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : item.id)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="text-sm font-medium text-heading sm:text-base">{item.q}</span>
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8dfe1] text-brand">
                {expanded ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
              </span>
            </button>
            {expanded && <p className="pb-4 pr-12 text-sm leading-6 text-body">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
