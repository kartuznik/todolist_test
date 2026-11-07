# Runbook

Статический фронтенд. Отдельного сервера, портов приложения, переменных окружения и резервных копий нет. Список задач и выбранный язык лежат только в `localStorage` браузера пользователя (`todolist.tasks`, `todolist-lang`).

## Локальная сборка и просмотр

```bash
npm install
npm run build
npm run preview
```

Открыть http://localhost:4173/todolist_test/. Для разработки без сборки: `npm run dev` и http://localhost:5173/todolist_test/.

## Публикация

Пуш в ветку `main` запускает `.github/workflows/deploy.yml`: сборка, загрузка каталога `dist` и публикация на GitHub Pages.

Сайт: https://kartuznik.github.io/todolist_test/

В репозитории один раз: **Settings > Pages > Source: GitHub Actions**.

## Проверка и повторный запуск workflow

Список запусков: вкладка Actions репозитория или `gh run list --repo kartuznik/todolist_test`.

Последний запуск смотреть так:

```bash
gh run watch --repo kartuznik/todolist_test
```

Повторить неудачные job'ы конкретного запуска:

```bash
gh run rerun <run-id> --failed --repo kartuznik/todolist_test
```

Если повтор из интерфейса недоступен, новый запуск даёт любой новый коммит в `main`. Отдельного `workflow_dispatch` в файле нет.

## Откат

```bash
git revert <sha>
git push origin HEAD:main
```

Пуш снова собирает и публикует предыдущее состояние кода. Данные в браузерах пользователей откат не стирает: они по-прежнему в их `localStorage`.

## Типовые сбои

- Страница открывается без стилей и скриптов: адрес должен заканчиваться на `/todolist_test/`. Базовый путь задан в `vite.config.ts` (`base: '/todolist_test/'`).
- Workflow падает на deploy с 404: в **Settings > Pages** источник должен быть **GitHub Actions**, не ветка `main` и не папка `/docs`.
- Локально пустой экран после `npm run preview` на `/`: открывать `/todolist_test/`, не корень порта.
- Список пропал после битых данных в браузере: это ожидаемо, повреждённый `todolist.tasks` читается как пустой список. Серверного backup нет.
