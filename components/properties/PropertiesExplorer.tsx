"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { PropertyCard } from "@/components/PropertyCard";
import {
  ArrowRight,
  BuildingIcon,
  ChevronDown,
  HouseIcon,
  KeyIcon,
  RefreshIcon,
  SearchIcon,
} from "@/components/Icons";
import {
  categories,
  formatNaira,
  listings,
  locations,
  PRICE_CEILING,
  PRICE_FLOOR,
  type Intent,
  type Listing,
} from "@/lib/listings";

const PAGE_SIZE = 6;

type Draft = {
  category: string;
  location: string;
  rooms: string;
  baths: string;
  min: number;
  max: number;
  order: "featured" | "price-asc" | "price-desc";
  q: string;
};

const initialDraft: Draft = {
  category: "All",
  location: "All",
  rooms: "Any",
  baths: "Any",
  min: 40_000_000,
  max: PRICE_CEILING,
  order: "featured",
  q: "",
};

export function PropertiesExplorer() {
  const params = useSearchParams();
  const incoming = params.get("q") ?? "";
  const [intent, setIntent] = useState<Intent | "apartment">("sale");
  const [panel, setPanel] = useState<"filter" | "categories" | "location">("filter");
  const [draft, setDraft] = useState<Draft>({ ...initialDraft, q: incoming });
  const [applied, setApplied] = useState<Draft>({ ...initialDraft, q: incoming });
  const [page, setPage] = useState(1);
  const [queryInput, setQueryInput] = useState(incoming);

  const results = useMemo(() => {
    let next = listings.filter((listing) => {
      if (intent === "apartment") return listing.kind === "apartment";
      return listing.intent === intent;
    });
    next = next.filter((listing) => listing.price >= applied.min && listing.price <= applied.max);
    if (applied.category !== "All") {
      next = next.filter((listing) => listing.kind === applied.category.toLowerCase());
    }
    if (applied.location !== "All") next = next.filter((listing) => listing.city === applied.location);
    if (applied.rooms !== "Any") next = next.filter((listing) => listing.rooms === Number(applied.rooms));
    if (applied.baths !== "Any") next = next.filter((listing) => listing.baths === Number(applied.baths));
    if (applied.q.trim()) {
      const q = applied.q.toLowerCase();
      next = next.filter((listing) =>
        `${listing.title} ${listing.city} ${listing.company} ${listing.kind}`.toLowerCase().includes(q),
      );
    }
    if (applied.order === "price-asc") next = [...next].sort((a, b) => a.price - b.price);
    if (applied.order === "price-desc") next = [...next].sort((a, b) => b.price - a.price);
    return next;
  }, [applied, intent]);

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const safePage = Math.min(page, pages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = results.slice(start, start + PAGE_SIZE);

  function applySearch(event?: FormEvent) {
    event?.preventDefault();
    setApplied({ ...draft, q: queryInput });
    setPage(1);
  }

  function reset() {
    const next = { ...initialDraft, min: intent === "sale" ? 40_000_000 : PRICE_FLOOR };
    setDraft(next);
    setApplied(next);
    setQueryInput("");
    setPage(1);
  }

  function chooseIntent(next: Intent | "apartment") {
    setIntent(next);
    const min = next === "sale" ? 40_000_000 : PRICE_FLOOR;
    const updated = { ...applied, min, max: PRICE_CEILING };
    setDraft((current) => ({ ...current, min, max: PRICE_CEILING }));
    setApplied(updated);
    setPage(1);
  }

  const minPercent = ((draft.min - PRICE_FLOOR) / (PRICE_CEILING - PRICE_FLOOR)) * 100;
  const maxPercent = ((draft.max - PRICE_FLOOR) / (PRICE_CEILING - PRICE_FLOOR)) * 100;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 border-b border-line pb-4 md:flex-row md:items-end md:justify-between">
          <h1 className="text-2xl font-extrabold text-heading sm:text-3xl">What are you looking for?</h1>
          <div className="flex gap-6">
            {(
              [
                ["sale", "Sale", HouseIcon],
                ["rent", "Rent", KeyIcon],
                ["apartment", "Apartment", BuildingIcon],
              ] as const
            ).map(([value, label, Icon]) => (
              <button
                key={value}
                type="button"
                onClick={() => chooseIntent(value)}
                className={`inline-flex items-center gap-2 border-b-2 pb-3 text-sm font-semibold ${
                  intent === value ? "border-brand text-brand" : "border-transparent text-body"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside>
            <div className="flex gap-4 overflow-x-auto border-b border-line text-xs sm:text-sm">
              {(
                [
                  ["filter", "Filter"],
                  ["categories", "Property Categories"],
                  ["location", "Location"],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setPanel(value)}
                  className={`border-b-2 pb-3 ${panel === value ? "border-brand font-semibold text-brand" : "border-transparent text-body"}`}
                >
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={applySearch} className="pt-2">
              {(panel === "filter" || panel === "categories") && (
                <Accordion title="Property Categories" defaultOpen={panel === "categories"}>
                  <Choice
                    value={draft.category}
                    options={["All", ...categories]}
                    onChange={(category) => setDraft((current) => ({ ...current, category }))}
                  />
                </Accordion>
              )}
              {(panel === "filter" || panel === "location") && (
                <Accordion title="Property Location" defaultOpen={panel === "location"}>
                  <Choice
                    value={draft.location}
                    options={["All", ...locations]}
                    onChange={(location) => setDraft((current) => ({ ...current, location }))}
                  />
                </Accordion>
              )}
              {panel === "filter" && (
                <>
                  <Accordion title="Number of Rooms">
                    <Choice
                      value={draft.rooms}
                      options={["Any", "1", "2", "3", "4", "5"]}
                      onChange={(rooms) => setDraft((current) => ({ ...current, rooms }))}
                    />
                  </Accordion>
                  <Accordion title="Number of Bathrooms">
                    <Choice
                      value={draft.baths}
                      options={["Any", "1", "2", "3", "4", "5"]}
                      onChange={(baths) => setDraft((current) => ({ ...current, baths }))}
                    />
                  </Accordion>
                  <div className="border-b border-line py-4">
                    <p className="text-sm font-medium text-heading">Price</p>
                    <p className="mt-2 text-sm font-semibold text-brand">
                      {formatNaira(draft.min)} - {formatNaira(draft.max)}
                    </p>
                    <div className="relative mt-4 h-5">
                      <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-[#ececec]" />
                      <div
                        className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-brand"
                        style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
                      />
                      <input
                        aria-label="Minimum price"
                        type="range"
                        min={PRICE_FLOOR}
                        max={PRICE_CEILING}
                        step={1_000_000}
                        value={draft.min}
                        onChange={(event) =>
                          setDraft((current) => ({
                            ...current,
                            min: Math.min(Number(event.target.value), current.max),
                          }))
                        }
                        className="dual-range absolute inset-0 w-full"
                      />
                      <input
                        aria-label="Maximum price"
                        type="range"
                        min={PRICE_FLOOR}
                        max={PRICE_CEILING}
                        step={1_000_000}
                        value={draft.max}
                        onChange={(event) =>
                          setDraft((current) => ({
                            ...current,
                            max: Math.max(Number(event.target.value), current.min),
                          }))
                        }
                        className="dual-range absolute inset-0 w-full"
                      />
                    </div>
                  </div>
                  <Accordion title="Order By">
                    <Choice
                      value={draft.order}
                      options={[
                        ["featured", "Featured"],
                        ["price-asc", "Price: Low to High"],
                        ["price-desc", "Price: High to Low"],
                      ]}
                      onChange={(order) =>
                        setDraft((current) => ({ ...current, order: order as Draft["order"] }))
                      }
                    />
                  </Accordion>
                </>
              )}
              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand text-sm font-semibold text-white hover:bg-[#d1040f]"
              >
                <SearchIcon className="h-4 w-4" />
                Search
              </button>
              <button
                type="button"
                onClick={reset}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 py-2 text-sm text-body"
              >
                <RefreshIcon className="h-4 w-4" />
                Reset Filters
              </button>
            </form>
          </aside>

          <div>
            <p className="text-right text-sm text-body">
              Showing{" "}
              <span className="font-semibold text-heading">
                {results.length === 0 ? "0" : `${start + 1}-${Math.min(start + PAGE_SIZE, results.length)}`}
              </span>{" "}
              out of <span className="font-semibold text-heading">{results.length}</span> results
            </p>
            {visible.length === 0 ? (
              <div className="mt-6 rounded-2xl border border-dashed border-line px-6 py-16 text-center text-sm text-body">
                Nothing matches those filters. Reset them or widen the price range, then search again.
              </div>
            ) : (
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {visible.map((listing: Listing) => (
                  <PropertyCard key={listing.id} listing={listing} />
                ))}
              </div>
            )}
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: pages }, (_, index) => index + 1).map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => setPage(number)}
                  className={`h-9 w-9 rounded-full text-sm font-semibold ${
                    number === safePage ? "bg-brand text-white" : "bg-[#f6f6f6] text-body"
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                type="button"
                aria-label="Next page"
                disabled={safePage === pages}
                onClick={() => setPage((current) => Math.min(pages, current + 1))}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f6f6f6] text-body disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between py-4 text-left text-sm text-heading"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-3">{children}</div>}
    </div>
  );
}

function Choice({
  value,
  options,
  onChange,
}: {
  value: string;
  options: readonly string[] | readonly (readonly [string, string])[];
  onChange: (value: string) => void;
}) {
  const normalized = options.map((option) =>
    typeof option === "string" ? [option, option] : option,
  ) as [string, string][];

  return (
    <div className="flex flex-col gap-2">
      {normalized.map(([optionValue, label]) => (
        <label key={optionValue} className="flex items-center gap-2 text-sm text-body">
          <input
            type="radio"
            checked={value === optionValue}
            onChange={() => onChange(optionValue)}
            className="accent-brand"
          />
          {label}
        </label>
      ))}
    </div>
  );
}
