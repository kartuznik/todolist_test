# Задачи

Личный список дел: добавить задачу, отметить её выполненной и вернуться к списку позже. Всё остаётся в этом браузере.

## Возможности

- Интерфейс на русском и английском. По умолчанию русский. Переключатель **RU / EN** в правом верхнем углу, выбор хранится в `localStorage` под ключом `todolist-lang`.
- Добавление, отметка выполнения, удаление и фильтры «все / активные / готовые». Пустую строку добавить нельзя.
- Тонкая полоса прогресса под счётчиками: доля выполненных задач.
- Короткие анимации появления, зачёркивания и удаления. При `prefers-reduced-motion: reduce` они отключаются, а удаление происходит сразу.
- Задачи лежат в `localStorage` (`todolist.tasks`). Повреждённый JSON или неверная форма данных превращаются в пустой список и не роняют страницу.
- Блок «На горизонте» — три карточки о будущих идеях (календарь, приоритеты, аналитика). Это только иллюстрация, без кнопок и переходов.

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173/todolist_test/](http://localhost:5173/todolist_test/). У сервера разработки тот же базовый путь, что и у GitHub Pages.

## Сборка

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` запускает `tsc --noEmit`, затем Vite. Статика попадает в `dist/`. Просмотр: [http://localhost:4173/todolist_test/](http://localhost:4173/todolist_test/).

## Публикация

Пуш в `main` запускает `.github/workflows/deploy.yml`:

1. `npm ci` и `npm run build`
2. `actions/upload-pages-artifact` загружает `dist`
3. `actions/deploy-pages` публикует сайт

Один раз в репозитории: **Settings > Pages > Build and deployment > Source: GitHub Actions**.

Сайт: [https://kartuznik.github.io/todolist_test/](https://kartuznik.github.io/todolist_test/).

## Как это собрано

Интерфейс доработан в Cursor cloud agent моделью Grok Bot.
