import type { Translations } from './types';

export const ru: Translations = {
  meta: {
    title: 'Задачи | Личная продуктивность',
    description:
      'Личный список задач. Добавляйте дела, отмечайте выполненное и двигайтесь вперёд понемногу каждый день.',
  },
  header: {
    logo: 'ЗАДАЧИ / 001',
    tagline: 'ЛИЧНАЯ ПРОДУКТИВНОСТЬ',
  },
  hero: {
    title: 'ДОВОДИ ДЕЛА ДО КОНЦА.',
    subtitle: 'Немного прогресса каждый день.',
  },
  stats: {
    completed: (count) => `${count} ВЫПОЛНЕНО`,
    remaining: (count) => `${count} ОСТАЛОСЬ`,
    progress: 'Прогресс выполнения',
  },
  tasks: {
    title: 'ВАШИ ЗАДАЧИ',
    total: (count) => `Всего: ${count}`,
  },
  filters: {
    all: 'ВСЕ',
    active: 'АКТИВНЫЕ',
    done: 'ГОТОВЫЕ',
    label: 'Фильтр задач',
  },
  add: {
    button: '+ ДОБАВИТЬ ЗАДАЧУ',
    placeholder: 'Что нужно сделать?',
    label: 'Новая задача',
  },
  empty: {
    all: 'Задач пока нет. Добавь свою первую задачу выше!',
    active: 'Нет активных задач. Отличная работа, можно отдохнуть!',
    done: 'Нет выполненных задач. Вперёд, за работу!',
  },
  footer: {
    text: 'СОЗДАНО, ЧТОБЫ ПОМОЧЬ СОСРЕДОТОЧИТЬСЯ.',
  },
  horizon: {
    title: 'НА ГОРИЗОНТЕ',
    soon: 'СКОРО',
    calendar: 'Календарь',
    priorities: 'Приоритеты',
    analytics: 'Аналитика',
  },
  aria: {
    delete: (title) => `Удалить «${title}»`,
    toggleDone: (title) => `Отметить «${title}» выполненной`,
    toggleActive: (title) => `Вернуть «${title}» в активные`,
    lang: 'Язык',
  },
};
