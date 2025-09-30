"use client";

import {usePathname, useSearchParams} from "next/navigation";

const langs = [
  {code: "tr", label: "TR"},
  {code: "en", label: "EN"},
  {code: "de", label: "DE"}
];

// "/en/service" -> "/service"
function basePathFrom(pathname) {
  const cleaned = pathname.replace(/^\/(tr|en|de)(?=\/|$)/, "");
  return cleaned === "" ? "/" : cleaned;
}

function makeHref(locale, basePath, qs) {
  // TR: özellikle /tr ile git (middleware -> prefixsiz'e redirect eder)
  if (locale === "tr") {
    const path = basePath === "/" ? "/tr" : `/tr${basePath}`;
    return qs ? `${path}?${qs}` : path;
  }
  // EN/DE: normal prefixli
  const prefix = `/${locale}`;
  const path = basePath === "/" ? prefix : `${prefix}${basePath}`;
  return qs ? `${path}?${qs}` : path;
}

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const params = useSearchParams();

  const basePath = basePathFrom(pathname);
  const qs = params.toString();

  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-1 py-1">
      {langs.map((l) => {
        const href = makeHref(l.code, basePath, qs);
        return (
          <a
            key={l.code}
            href={href}        // düz anchor = tam istek = middleware kesin çalışır
            className="px-2 py-1 rounded-md text-sm hover:bg-white/5"
          >
            {l.label}
          </a>
        );
      })}
    </div>
  );
}