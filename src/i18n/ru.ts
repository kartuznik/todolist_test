import type { Translations } from './types';

export const ru: Translations = {
  meta: {
    title: 'Задачи',
    description: 'Список дел для личной продуктивности. Немного прогресса каждый день.',
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
  },
  tasks: {
    title: 'ВАШИ ЗАДАЧИ',
    total: (count) => `${count.toString().padStart(2, '0')} ВСЕГО`,
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
    active: 'Нет активных задач. Отдыхай или добавь новую!',
    done: 'Нет выполненных задач. Вперёд, за работу!',
  },
  footer: {
    text: 'СОЗДАНО, ЧТОБЫ ПОМОЧЬ СОСРЕДОТОЧИТЬСЯ.',
  },
  aria: {
    delete: (title) => `Удалить «${title}»`,
    toggleDone: (title) => `Отметить «${title}» выполненной`,
    toggleActive: (title) => `Вернуть «${title}» в активные`,
    lang: 'Язык',
  },
};
