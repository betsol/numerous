
/// <reference path="./locales.d.ts" />


export type LocaleId = string;

export type VariantKey = (
  | 'zero'
  | 'one'
  | 'two'
  | 'few'
  | 'many'
  | 'other'
  );

export type Variants = {
  [Key in VariantKey]?: string;
};

export interface NumerousInstance {
  pluralize(value: number, variants: Variants): string;
}

export interface Locale {
  id: LocaleId;
  handler: (value: (number | string)) => VariantKey;
}

export function create(localeId: LocaleId): NumerousInstance;

export function registerLocale(
  localeOrLocales: (Locale | Locale[])
);

export function pluralize(
  localeId: LocaleId,
  value: number,
  variants: Variants

): string;
