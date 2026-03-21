import type { CollectionEntry } from "astro:content";
import { localizedSite, site, type Locale } from "./site";

export const locales: Locale[] = ["en", "pt"];
export const defaultLocale: Locale = "en";
export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR"
};
export const localeDateFormat: Record<Locale, string> = {
  en: "en-US",
  pt: "pt-BR"
};

export function getLocaleContent(locale: Locale) {
  return localizedSite[locale];
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "en" ? "pt" : "en";
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/pt" || pathname.startsWith("/pt/") ? "pt" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/pt") return "/";
  if (pathname.startsWith("/pt/")) return pathname.slice(3) || "/";
  return pathname || "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  const normalized = pathname === "" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (locale === "en") {
    return normalized;
  }

  return normalized === "/" ? "/pt" : `/pt${normalized}`;
}

export function formatDate(date: Date, locale: Locale) {
  return date.toLocaleDateString(localeDateFormat[locale], { dateStyle: "long" });
}

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, site.domain).toString();
}

export function getCollectionByLocale<T extends "blog" | "projects">(
  entries: CollectionEntry<T>[],
  locale: Locale
) {
  return entries.filter((entry) => entry.data.locale === locale);
}

export function findTranslatedEntry<T extends "blog" | "projects">(
  entries: CollectionEntry<T>[],
  translationKey: string,
  locale: Locale
) {
  return entries.find((entry) => entry.data.translationKey === translationKey && entry.data.locale === locale);
}

export function getSectionPath(section: "blog" | "projects", locale: Locale) {
  return localizePath(`/${section}`, locale);
}
