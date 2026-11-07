import type { Translations } from './types';

export const en: Translations = {
  meta: {
    title: 'Tasks | Personal productivity',
    description:
      'A personal task list. Add what needs doing, mark it done, and make a little progress every day.',
  },
  header: {
    logo: 'TASKS / 001',
    tagline: 'PERSONAL PRODUCTIVITY',
  },
  hero: {
    title: 'GET THINGS DONE.',
    subtitle: 'A little progress every day.',
  },
  stats: {
    completed: (count) => `${count} COMPLETED`,
    remaining: (count) => `${count} REMAINING`,
  },
  tasks: {
    title: 'YOUR TASKS',
    total: (count) => `Total: ${count}`,
  },
  filters: {
    all: 'ALL',
    active: 'ACTIVE',
    done: 'DONE',
    label: 'Filter tasks',
  },
  add: {
    button: '+ ADD A NEW TASK',
    placeholder: 'What needs to be done?',
    label: 'New task',
  },
  empty: {
    all: 'No tasks yet. Add your first task above!',
    active: 'No active tasks. Great work — you can take a break!',
    done: 'No completed tasks yet. Time to get to work!',
  },
  footer: {
    text: 'DESIGNED TO HELP YOU FOCUS.',
  },
  aria: {
    delete: (title) => `Delete "${title}"`,
    toggleDone: (title) => `Mark "${title}" as done`,
    toggleActive: (title) => `Mark "${title}" as active`,
    lang: 'Language',
  },
};
