const AUDIOCALL_HELP = [
  `Ход игры: звучит произношение слова на английском языке, нужно выбрать
    перевод слова из пяти предложенных вариантов ответа.`,
  `В игре представлено 6 уровней сложности по 60 раундов в каждом уровне.
    Выбор уровня сложности и раунда находится в правом верхнем углу.`,
  `Каждый раунд содержит по 10 слов для угадывания. Слово необходимо угадать 
  из 5 похожих по написанию и/или одной части речи слов.`,
  `Cлова можно угадывать выбирая их как кликами мышкой,
    так и нажатием кнопок клавиатуры. 
    "Клавиша 1" - первое слово, "Клавиша 2" - второе, и так до 5. 
    Выбот ответ "Не знаю" и переход к следующему вопросу происходит 
    как при клике по кнопке "Далее", так и нажатием клавиши Enter.`,
  `В левом нижнем углу экрана находится регулировка звука произношения слово во время игры. 
    Регулировка применятеся от 0% до 100% с шагом в 5%.`,
];

const SPRINT_HELP = [

];

const SPEAKIT_HELP = [

];

const WORD_BUILDER_HELP = [
  'Суть игры - составление оригинального слова по переводу',
  'Кликайте по буквам в нужном порядке, чтобы собрать оригинальное слово',
  'Можно использовать клавиатуру вместо мышки, чтобы ввести буквы',
];

const PUZZLE_HELP = [
  'Цель игры перетаскивая или кликая по словам внизу экрана переместить их в'
  + ' игровое поле в нужном порядке, правильно составив предложение.',
  'После перемещения всех слов появится кнопка CHECK, нажмите её чтобы'
  + ' проверить составленное предложение, при этом слова стоящие на своих'
  + ' местах подсветятся зеленым, остальные - красным цветом.',
  'Меняя слова местами добейтесь зеленого цвета у всех.',
  'Если совсем не получается - нажмите кнопку I DONT KNOW',
  'Кнопка CONTINUE - переход к следующему предложению.',
  'Для облегченя задачи предусмотрены подсказки - зеленые кнопки,'
  + ' активируя которые можно увидеть перевод предложения, прослушать его'
  + ' произношение и установить каждому слову фон соответствующий фрагменту'
  + ' общей картины (паззл).', 'Поменять предложения и картину-паззл можно'
  + ' выбрав Level и Page и нажав GO!',

];

export {
  AUDIOCALL_HELP, SPRINT_HELP, SPEAKIT_HELP, WORD_BUILDER_HELP, PUZZLE_HELP,
};
