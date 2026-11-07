# Runbook

Статический фронтенд. Серверного процесса, переменных окружения и резервной копии списка нет. Задачи и язык лежат только в браузере пользователя: `todolist.tasks` и `todolist-lang`.

## Ролевые порты

| Роль | Порт |
| --- | --- |
| Сайт | своего порта нет: статические файлы на GitHub Pages |
| Локальная разработка | Vite `5173`, путь `/todolist_test/` |
| Локальный просмотр сборки | Vite preview `4173`, путь `/todolist_test/` |
| API, база, мониторинг | нет |

## Локальная сборка и просмотр

```bash
npm install
npm run build
npm run preview
```

Открыть http://localhost:4173/todolist_test/. Для разработки без сборки: `npm run dev` и http://localhost:5173/todolist_test/.

`npm run build` запускает `tsc --noEmit`, затем Vite. Каталог `dist/` в git не входит.

## Публикация

Пуш в `main` запускает [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml).

1. Job `build`: `actions/checkout@v4`, Node 22, `npm ci`, `npm run build`, `actions/upload-pages-artifact@v5` с путём `dist`.
2. Job `deploy`: `actions/deploy-pages@v5` в окружении `github-pages`.
3. Группа `pages`, `cancel-in-progress: false`: новый пуш не отменяет уже идущий деплой.

Сайт: https://kartuznik.github.io/todolist_test/

Один раз в репозитории: **Settings > Pages > Source: GitHub Actions**.

Ручного события `workflow_dispatch` в файле нет.

## Проверка и повторный запуск workflow

Список запусков: вкладка Actions или

```bash
gh run list --repo kartuznik/todolist_test
```

Дождаться последнего:

```bash
gh run watch --repo kartuznik/todolist_test
```

Повторить неудачные job'ы:

```bash
gh run rerun <run-id> --failed --repo kartuznik/todolist_test
```

Если у токена нет права на повтор, новый прогон даёт следующий коммит в `main`.

## Откат

```bash
git revert <sha>
git push origin HEAD:main
```

Пуш снова собирает и публикует дерево после revert. Записи в браузерах пользователей это не стирает.

## Решение проблем

| Симптом | Что проверить |
| --- | --- |
| Стили и скрипты не загрузились | адрес должен заканчиваться на `/todolist_test/` |
| После `npm run preview` пустой корень порта | открывать `/todolist_test/`, не `/` |
| Deploy падает с 404 | **Settings > Pages > Source: GitHub Actions** |
| Список пропал | битый `todolist.tasks` читается как пустой список. Серверной копии нет |
| Сайт не обновился сразу после пуша | дождаться job `deploy`. Следующий пуш текущий деплой не отменяет |
