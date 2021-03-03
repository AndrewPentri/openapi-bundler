# openapi-bundler
Готовая структура для написания API, используя спецификацию openapi3.

## Подготовка
Необходимо удостовериться, что установлены [node.js](https://nodejs.org/en/download/) и 
менеджер пакетов [npm](https://www.npmjs.com/) (включен в node.js) командами:

`node -v`

`npm -v`

Затем необходимо установить следующие npm пакеты:


* swagger сборщик - [swagger-cli](https://www.npmjs.com/package/swagger-cli)

`npm i -g @apidevtools/swagger-cli`

* ReDoc генератор (формирует независимую HTML-страницу) - [redoc-cli](https://www.npmjs.com/package/redoc-cli)

`npm i -g redoc-cli`

## Использование

1. Необходимо перенести содержимое репозитория на своё рабочее место
   (`git clone https://github.com/AndrewPentri/openapi-bundler.git`)
2. В корне склонированного репозитория выполнить команду `node build.js`
3. Результат выполнения команды будет расположен в директории `_build`, которая лежит
   корне склонированного репозитория.
#### Пример реализованного API: [fake-response-api](https://github.com/AndrewPentri/fake-response-api)