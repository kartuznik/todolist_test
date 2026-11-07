export type Lang = 'ru' | 'en';

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  header: {
    logo: string;
    tagline: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  stats: {
    completed: (count: number) => string;
    remaining: (count: number) => string;
  };
  tasks: {
    title: string;
    total: (count: number) => string;
  };
  filters: {
    all: string;
    active: string;
    done: string;
    label: string;
  };
  add: {
    button: string;
    placeholder: string;
    label: string;
  };
  empty: {
    all: string;
    active: string;
    done: string;
  };
  footer: {
    text: string;
  };
  aria: {
    delete: (title: string) => string;
    toggleDone: (title: string) => string;
    toggleActive: (title: string) => string;
    lang: string;
  };
}
