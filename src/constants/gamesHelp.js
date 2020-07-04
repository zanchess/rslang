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
  `В игре представлено 6 уровней сложности по 60 раундов в каждом уровне.
    Выбор уровня сложности и раунда находится в правом верхнем углу.`,
  'Кнопка "Start": запускает игру по распознаванию речи.',
  'Кнопка "Restart": перезапускает игру по распознаванию речи с новым набором слов из той же группы уровни сложности.',
  'Кнопка "Results": позволяет посмотреть статистику текущей игры, в окне результатов можно продолжить текущую игру, начать новую или выйти в меню мини-игр.',
  `Ход игры: после нажатия кнопки "Start" необходимо произносить четко слова из карточек на английском, если произнесенное слово совпадает с одним
  из слов из карточки, то данная карточка подсвечивается зеленым цветом, игра длиться пока не будет совпадут все слова из карточек.`,
];

const WORD_BUILDER_HELP = [
  'Суть игры - составление оригинального слова по переводу',
  'Кликайте по буквам в нужном порядке, чтобы собрать оригинальное слово',
  'Можно использовать клавиатуру вместо мышки, чтобы ввести буквы',
];

export {
  AUDIOCALL_HELP, SPRINT_HELP, SPEAKIT_HELP, WORD_BUILDER_HELP,
};