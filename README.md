# Добро пожаловать в ИГРУ "ИСКАТЕЛЬ"

Это легкая незамысловатая игра. Своеобразный клон **"Boulder Dash"** от *First Star Software* и **"Supaplex"** от *Digital Integration*.
Похожую игру я играл в далеком детсве, и сейчас решил написать свою.

## Содержание
- [Добро пожаловать в ИГРУ "ИСКАТЕЛЬ"](#добро-пожаловать-в-игру-искатель)
  - [Содержание](#содержание)
  - [Особенности](#особенности)
      - [Видов клеток:](#видов-клеток)
      - [Предметы на поле:](#предметы-на-поле)
  - [Начало игры](#начало-игры)
  - [Управление](#управление)
  - [Конструктор Уровней](#конструктор-уровней)
  - [Версия](#версия)
  - [Планы](#планы)

## Особенности 
Игра похожа на лабиринт, состоящий из отдельных клеток.
В игре есть гравитация, поэтому камни и добыча падают или скатываются вниз.
Игрок и враги перемещаются по полю вверх/вниз и влево/вправо. 

#### Видов клеток:
- Пустая - на такой клетке могут располагаться различные предметы и враги.
- Земля - на эту клетку зайти может только игрок, после чего она станет пустой
- Стена - эта клета не доступна для перемещения
- Заблокированная - клетка не видна и не доступна для перемещений
- Старт - стартовая клетка, на которой появляется игрок
- Финиш - может быть несколько видов: 
  - Закрытй - для открытия необходимо собрать всю добычу на поле
  - Откртый - для победы игрок должен попасть на эту клетку
  - Если Финиша нет, то игра завершится после сбора всей добычи.
  
#### Предметы на поле:
- Добыча - различные предметы которые нужно собрать
- Камни - своеобразные препятвия. Если камень упадет на игрока с большой высоты, игрок погибнет. Камень можно толкать вверх и всторону, но только один.
- Враги - хитрые зеленые существа, которые злятся, когда игрок рядом. Они всегда ищут путь чтобы поймать игрока. Если на врага скинуть камень, он погибнет.



## Начало игры
Для старта игры кликните пункт меню **"В игру!"**
И выберите понравившийся уровень.
Вы так же можете *создать свой уровень* в **"Конструкторе"**

## Управление
**Для перемещения** по полю ипользуйте **стрелки** на клавиатуре или **кнопки WASD**

**Открыть карту уровня** можно нажав на кнопку в верхнем меню или на **кнопку М** клавиатуры
Для **закрытия карты** можно нажать **кнопку Esc**

## Конструктор Уровней
В **Конструкторе** можно создавать новые уровни или редактировать существующие.
Размеры поля лучше не делать больше 100х100 клеток. 

Для расположения на поле предметов или нового типа клеток кликните на нужную кнопку в боковом меню, а потом на клетку поля. 
Если Вам нужно заполнить весь ряд или колонку, то нажмите на "контрольную" кнопку сбоку или сверху от поля.
При ошибке Вы можете отменить последние 20 действий или вернуть обратно.

В процессе создания уровня, Вы можете в него поиграть для тестирования, для этого нажмите нужную кнопку в верхнем меню.
Готовый уровень можно сохранить на компьтер, а потом играть в него в любое время.
Так же можно сделать скриншот всего поля и сохранить его в нужном месте.


## Версия


## Планы

- [x] Добавить крутое README
- [ ] Всё переписать
- [ ] ...