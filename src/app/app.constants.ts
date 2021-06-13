export const LanguageList = ['UA', 'EN'];

export const Translations = {
  UA: {
    start: 'Почати',
    answer: 'Відповісти',
    next: 'Далі',
    welcome_title: 'Навчальний тренажер',
    welcome_message: 'Ви починаєте проходити тренажер з теми',
    result: 'Результат',
    result_message: 'Вітаємо! Ви пройшли всі тести з теми «Формальні граматики», Ваша оцінка:',
    result_right_answers: 'Правильних відповідей',
    result_try_again: 'Пройти знову',
    quiz_subject: 'Формальна граматика або просто граматика в теорії формальних мов',
    q1q: 'Формальна граматика або просто граматика в теорії формальних мов — спосіб опису формальної мови, тобто виділення деякої підмножини з множини всіх слів деякого скінченного алфавіту. Розрізняють породжувальні і аналітичні граматики. Виберіть відповідь.',
    q1o1: 'Перші ставлять правила, за допомогою яких можна побудувати будь-яке слово мови, а другі дозволяють по даному слову визначити, входить воно в мову чи ні;',
    q1o2: 'Перші дозволяють по даному слову визначити, входить воно в мову чи ні, а другі ставлять правила, за допомогою яких можна побудувати будь-яке слово мови.',
    q1e: 'Помилка! Правильна відповідь - перший варіант',
    q2q: 'Формальна породжувальна граматика G – це формальна система, задана _________. Вставте продовження речення.',
    q2o1: `трійкою об'єктів G = (V, S, P);`,
    q2o2: `четвіркою об'єктів G = (V, T, S, P);`,
    q2o3: `п’ятіркою об'єктів G = (V, T, S, P, Y).`,
    q2e: 'Помилка! Правильна відповідь - другий варіант',
    q3q: `Формальна породжувальна граматика G (далі – граматика G) – це формальна система, задана четвіркою об'єктів G = (V, T, S, P). Встановіть відповідність.`,
    q3o1: 'V',
    q3o2: 'T',
    q3o3: 'S',
    q3o4: 'P',
    q3a1: 'початковий символ (SєV)',
    q3a2: 'підмножина V, елементи якої називають термінальними (основними) символами;',
    q3a3: 'скінченна множина продукцій (або правил перетворення) вигляду ξ→η, де ξ та η – ланцюжки над алфавітом V;',
    q3a4: 'скінченна непорожня множина, яку називають алфавітом (або словником).',
    q3e: 'Помилка! Правильна відповідь: V – скінченна непорожня множина, яку називають алфавітом (або словником); T – її підмножина, елементи якої називають термінальними (основними) символами; S – початковий символ ( SV ); P – скінченна множина продукцій (або правил перетворення) вигляду ξ→η, де ξ та η – ланцюжки над алфавітом V.',
    q4q: 'Формальні породжувальні граматики часто називають ________. Вставте продовження речення.',
    q4o1: 'граматиками з фразовою структурою;',
    q4o2: 'граматиками безпосередніх складових;',
    q4o3: 'обидва варіанти правильні;',
    q4e: 'Помилка! Правильна відповідь – третій варіант.',
    q5q: 'Встановіть відповідності для тверджень.',
    q5o1: 'Термінальні символи часто називають',
    q5o2: 'Нетермінальні символи часто називають',
    q5a1: 'нетерміналами',
    q5a2: 'терміналами',
    q5e: 'Помилка! Правильна відповідь – Термінальні символи часто називають терміналами, а нетермінальні – нетерміналами.',
    q6q: 'У теорії формальних граматик усталилися традиції позначень, яких ми будемо дотримуватись. Символи термінального алфавіту позначають ______. Вставте продовження речення.',
    q6o1: 'грецькими буквами;',
    q6o2: 'великими латинськими буквами;',
    q6o3: 'малими латинськими буквами;',
    q6o4: 'цифрами.',
    q6e: 'Помилка! Правильна відповідь – третій і четвертий варіанти.',
    q7q: 'У теорії формальних граматик усталилися традиції позначень, яких ми будемо дотримуватись. Символи нетермінального алфавіту позначають __________. Вставте продовження речення.',
    q7o1: 'грецькими буквами',
    q7o2: 'великими латинськими буквами',
    q7o3: 'малими латинськими буквами',
    q7o4: 'цифрами',
    q7e: 'Помилка! Правильна відповідь – другий варіант.',
    q8q: 'У теорії формальних граматик усталилися традиції позначень, яких ми будемо дотримуватись. Ланцюжки над алфавітом V позначають _______. Вставте продовження речення.',
    q8o1: 'грецькими буквами;',
    q8o2: 'великими латинськими буквами;',
    q8o3: 'малими латинськими буквами;',
    q8o4: 'цифрами.',
    q8e: 'Помилка! Правильна відповідь – перший варіант.',
    q9q: 'Довжину ланцюжка α позначають ___________.',
    q9o1: 'l(α);',
    q9o2: 'α;',
    q9o3: '| α |;',
    q9o4: '( α ).',
    q9e: 'Помилка! Правильна відповідь – перший і третій варіанти.',
    q10q: 'Нехай G = (V, T, S, P) – граматика, і нехай α 0 = σξτ, ξ ≠ ε (тобто α 0 – конкатенація ланцюжків σ, ξ та τ), α 1 = σητ – ланцюжки над V. Якщо ξ→η – продукція граматики G, то говорять, що ____________. Вставте продовження речення.',
    q10o1: `α0 безпосередньо виводиться з α1 , і записують α0 => α1`,
    q10o2: `α1 безпосередньо виводиться з α0 , і записують α0 => α1`,
    q10o3: `α1 безпосередньо виводиться з α0 , і записують α1 => α0`,
    q10e: 'Помилка! Правильна відповідь – перший варіант.',
    q11q: 'Якщо α 0 , α 1 ,…, α n – ланцюжки над алфавітом V такі, що α0=>α1=>α2=>...=>α(n-1)=>α(n), то говорять, що __________. Вставте продовження речення.',
    q11o1: `αn виводиться з α0 , і використовують запис α0 => αn`,
    q11o2: `αn виводиться з α0 , і використовують запис αn => α0`,
    q11o3: `α0 виводиться з αn , і використовують запис α0 => αn`,
    q11e: 'Помилка! Правильна відповідь – перший варіант.',
    q12q: 'Послідовність кроків для отримання α n з α 0 називають __________. Вставте продовження речення.',
    q12o1: `введенням;`,
    q12o2: `виведенням;`,
    q12o3: `обидва варіанти правильні.`,
    q12e: 'Помилка! Правильна відповідь – другий варіант.',
    q13q: 'Речення української мови можна вивести в граматиці G, де V = {речення , << група підмета >>, <<група присудка>>, <<означення>>, <<підмет>>, <<присудок>>, <<додаток>>, молодий, нападник, забив, гол}, T = {молодий, нападник, забив, гол}, S = <<речення>>, P = {<<речення>> → <<група підмета>> <<група присудка>>, <<група підмета>> → <<означення>> <<підмет>>, <<група присудка>> → <<присудок>> <<додаток>>, <<означення>> → молодий, <<підмет>> → нападник, <<присудок>> → забив, <<додаток>> → гол}. Ця схема породжує речення, тому її можна замінити на L = {_________}. Складіть речення',
    q13o1: ``,
    q13o2: ``,
    q13o3: ``,
    q13o4: ``,
    q13a1: 'молодий',
    q13a2: 'нападник',
    q13a3: 'забив',
    q13a4: 'гол',
    q13e: 'Помилка! Правильна відповідь – L = {молодий нападник забив гол}.',
    q15q: 'Нехай G – граматика з алфавітом V = {S, A, a, b}, множиною терміналів T = {a, b}, початковим символом S і множиною продукцій P = {S → aA, S → b, A → aa}. Знайдемо мову L(G), породжувану цією граматикою. Встановіть послідовність кроків.',
    q15o1: `крок 1`,
    q15o2: `крок 2`,
    q15o3: `крок 3`,
    q15o4: `крок 4`,
    q15a1: 'із початкового символу S можна вивести ланцюжок aA за допомогою продукції S → aA;',
    q15a2: 'з aA, скориставшись продукцією A → aa, можна вивести ланцюжок aaa;',
    q15a3: 'застосувати продукцію S → b, щоб вивести b;',
    q15a4: 'ніяких інших ланцюжків вивести неможливо. Отже, L(G) = {b, aaa}.',
    q15e:  '«Помилка! Правильна відповідь –\n' +
      '\n' +
      '1. застосувати продукцію S → b, щоб вивести b;\n' +
      '2. із початкового символу S можна вивести ланцюжок aA за допомогою продукції S → aA;\n' +
      '3. з aA, скориставшись продукцією A → aa, можна вивести ланцюжок aaa;\n' +
      '4. ніяких інших ланцюжків вивести неможливо. Отже, L(G) = {b, aaa}.',
    q16q: 'Нехай G – граматика з алфавітом V = {S, 0, 1}, множиною терміналів T = {0, 1}, початковим символом S і множиною продукцій P = {S → 11S, S → 0}. Знайдемо L(G). Встановіть послідовність кроків.',
    q16o1: `крок 1`,
    q16o2: `крок 2`,
    q16o3: `крок 3`,
    q16o4: `крок 4`,
    q16a1: 'з 11S можна отримати 110 або 1111S;',
    q16a2: 'із початкового символу S одержимо 0 (за допомогою другої продукції) чи 11S (за допомогою першої);',
    q16a3: 'після кожного виведення ми додаємо дві одиниці в кінець ланцюжка чи закінчуємо ланцюжок нулем, тобто L(G) = {0, 110, 11110, 1111110, …};',
    q16a4: 'з 1111S виводиться 11110 або 111111S.',
    q16e: 'Помилка! Правильна відповідь –\n' +
      '1. із початкового символу S одержимо 0 (за допомогою другої\n' +
      'продукції) чи 11S (за допомогою першої);\n' +
      '2. з 11S можна отримати 110 або 1111S;\n' +
      '3. з 1111S виводиться 11110 або 111111S;\n' +
      '4. після кожного виведення ми додаємо дві одиниці в кінець ланцюжка чи закінчуємо ланцюжок нулем, тобто L(G) = {0, 110, 11110, 1111110, …}.',
    q23q: 'Продукція граматики дає змогу заміняти одну послідовність символів іншою. Граматики класифікують за типами продукцій. Розглянемо класифікацію, яку запропонував американський математик і лінгвіст Н. Хомскі. Встановіть відповідність.',
    q23o1: `0`,
    q23o2: `1`,
    q23o3: `2`,
    q23o4: `3`,
    q23a1: '|ξ| ≤ |η| чи η = ε;',
    q23a2: 'немає обмежень;',
    q23a3: 'ξ = A, причому η = aB чи η = a, де A, B – нетермінальні символи, a – термінальний символ, або S → ε;',
    q23a4: 'ξ = A, де A – нетермінальний символ.',
    q23e: 'Помилка! Правильна відповідь –\n' +
      '0 - немає обмежень;\n' +
      '1 - |ξ| ≤ |η| чи η = ε;\n' +
      '2 - ξ = A, де A – нетермінальний символ;\n' +
      '3 - ξ = A, причому η = aB чи η = a, де A, B – нетермінальні символи, a – термінальний символ, або S → ε',
    q24q: 'Формальні граматики - це дуже потужний математичний інструмент, який використовується в математичній та комп&#39;ютерній лінгвістиці, описі мов програмування, розробці компіляторів в теорії програмування. Найбільш вживаними є КВ-граматики і регулярні, бо їх найлегше описати алгоритмічно.',
    q24o1: '',
    q24e: 'Помилка! Правильна відповідь – другий варіант.',
    q25q: `Сама по собі концепція формальних граматик доволі гнучка, тому не дивно, що з'явилося багато інших інструментів, що розширюють використання та потужність КВ-граматик і граматик третього типу. Вкажіть приклади. Виберіть відповідь.`,
    q25o1: 'атрибутні граматики',
    q25o2: 'LL-k граматики',
    q25o3: 'скінченні автомати',
    q25o4: 'регулярні вирази',
    q25o5: 'множини',
    q25o6: 'всі варіанти правильні',
    q25e: 'Помилка! Правильна відповідь – останній варіант.',
  },
  EN: {
    start: 'Start',
    answer: 'Answer',
    next: 'Next',
    welcome_title: 'Educational test',
    welcome_message: 'You are starting pass the test',
    result: 'Result',
    result_message: 'Congratulations! You have passed all questions on "Formal Grammar". Your score:',
    result_right_answers: 'Right answers',
    result_try_again: 'Try again',
    quiz_subject: 'Formal grammar or grammar in formal language theory',
    q1q: 'Formal grammar or grammar in formal languages theory - a way of describing a formal language, that recognize existing subset of the set of all words in a finite alphabet. There are generative and analytical grammars. Choose the answer.',
    q1o1: 'The first setup rules by which you can create any word of the language, and the second allows you to determine if the word is a part of the language or not;',
    q1o2: 'The first allows you to determine if the word is a part of the language or not, and the second - setup rules by which you can create any word of the language.',
    q1e: 'Mistake! Right answer - the first option',
    q2q: 'Formal generative grammar G is a formal system determined by _________. Insert a sentence continuation.',
    q2o1: `three objects G = (V, S, P);`,
    q2o2: `four objects G = (V, T, S, P);`,
    q2o3: `five objects G = (V, T, S, P, Y).`,
    q2e: 'Mistake! Right answer - the second option',
    q3q: `Formal generating grammar G is a formal system determined by four objects G = (V, T, S, P). Provide corresponding options.`,
    q3o1: 'V',
    q3o2: 'T',
    q3o3: 'S',
    q3o4: 'P',
    q3a1: 'initial character (SєV)',
    q3a2: 'subset V, the elements of which are called terminal (main) symbols;',
    q3a3: 'a finite set of productions (or transformation rules) kind of ξ → η, where ξ and η are chains above the alphabet V;',
    q3a4: 'a finite non-empty set called an alphabet (or dictionary).',
    q3e: 'Mistake! Correct answer: V - a finite non-empty set, which is called the alphabet (or dictionary); T is its subset, the elements of which are called terminal (main) symbols; S is the initial symbol (SV); P is a finite set of productions (or transformation rules) kind of ξ → η, where ξ and η are chains above the alphabet V.',
    q4q: 'Formal generative grammars are often called ________. Insert a sentence continuation.',
    q4o1: 'grammars with a phrase structure;',
    q4o2: 'grammars of direct components;',
    q4o3: 'both options are correct;',
    q4e: 'Mistake! Correct answer – the third option.',
    q5q: 'Match the following statements.',
    q5o1: 'Terminal characters are often called',
    q5o2: 'Non-terminal characters are often called',
    q5a1: 'nonterminals',
    q5a2: 'terminals',
    q5e: 'Mistake! Correct answer - Terminal symbols are often called terminals, and non-terminal symbols are called non-terminals.',
    q6q: 'The symbols of the terminal alphabet are indicated by ______. Insert a sentence continuation.',
    q6o1: 'Greek letters;',
    q6o2: 'capital Latin letters;',
    q6o3: 'lowercase Latin letters;',
    q6o4: 'numbers.',
    q6e: 'Mistake! The correct answer is the third and fourth options.',
    q7q: 'In the theory of formal grammars, the traditions of notation have been established, which we will follow. Non-terminal alphabet symbols denote __________. Insert a sentence continuation.',
    q7o1: 'Greek letters',
    q7o2: 'capital Latin letters',
    q7o3: 'lowercase Latin letters',
    q7o4: 'numbers',
    q7e: 'Mistake! The correct answer is the second option.',
    q8q: 'In the theory of formal grammars, the traditions of notation have been established, which we will follow. Chains above the alphabet V denote _______. Insert a sentence continuation.',
    q8o1: 'Greek letters;',
    q8o2: 'capital Latin letters;',
    q8o3: 'lowercase Latin letters;',
    q8o4: 'numbers.',
    q8e: 'Mistake! The correct answer is the first option.',
    q9q: 'The length of the chain α is denoted by ___________.',
    q9o1: 'l(α);',
    q9o2: 'α;',
    q9o3: '| α |;',
    q9o4: '( α ).',
    q9e: 'Mistake! The correct answer is the first and third options.',
    q10q: 'Let G = (V, T, S, P) be a grammar, and let α 0 = σξτ, ξ ≠ ε (ie α 0 be the concatenation of chains σ, ξ and τ), α 1 = σητ be chains over V. If ξ → η - the production of the grammar G, it is said that ____________. Insert a sentence continuation.',
    q10o1: `α0 is directly derived from α1, and write α0 => α1`,
    q10o2: `α1 is directly derived from α0, and write α0 => α1`,
    q10o3: `α1 is directly derived from α0, and write α1 => α0`,
    q10e: 'Mistake! The correct answer is the first option.',
    q11q: 'If α 0, α 1,…, α n - chains over the alphabet V are such that α0 => α1 => α2 => ... => α (n-1) => α (n), then say that __________. Insert a sentence continuation.',
    q11o1: `αn is derived from α0, and use the notation α0 => αn`,
    q11o2: `αn is derived from α0, and use the notation αn => α0`,
    q11o3: `α0 is derived from αn, and use the notation α0 => αn`,
    q11e: 'Mistake! The correct answer is the first option.',
    q12q: 'The sequence of steps to obtain αn from α0 is called __________. Insert a sentence continuation.',
    q12o1: `input;`,
    q12o2: `output;`,
    q12o3: `both options are right.`,
    q12e: 'Mistake! The correct answer is the second option.',
    q13q: 'The sentence of the Ukrainian language can be derived in the grammar G, where V = {sentence, << subject group >>, << predicate group >>, << definition >>, << subject >>, << predicate >>, << appendix >>, young, striker, scored, goal}, T = {young, striker, scored, goal}, S = << sentence >>, P = {<< sentence >> → << subject group >> << group predicate >>, << subject group >> → << definition >> << subject >>, << predicate group >> → << predicate >> << appendix >>, << definition >> → young, << subject >> → striker, << predicate >> → scored, << application >> → goal}. This scheme generates a sentence, so it can be replaced by L = {_________}. Make a sentence',
    q13o1: ``,
    q13o2: ``,
    q13o3: ``,
    q13o4: ``,
    q13a1: 'young',
    q13a2: 'striker',
    q13a3: 'scored',
    q13a4: 'goal',
    q13e: 'Mistake! The correct answer is L = {young striker scored a goal}.',
    q15q: 'Let G be a grammar with the alphabet V = {S, A, a, b}, the set of terminals T = {a, b}, the initial symbol S and the set of products P = {S → aA, S → b, A → aa}. Find the language L (G) generated by this grammar. Set the sequence of steps.',
    q15o1: `step 1`,
    q15o2: `step 2`,
    q15o3: `step 3`,
    q15o4: `step 4`,
    q15a1: 'from the initial symbol S it is possible to deduce a chain aA by means of production S → aA;',
    q15a2: 'from aA, using the product A → aa, you can output the chain aaa;',
    q15a3: 'apply the product S → b to derive b;',
    q15a4: 'it is impossible to deduce any other chains. Therefore, L (G) = {b, aaa}.',
    q15e:  'Mistake! The correct answer is \n ' +
      '1. apply the product S → b to derive b; \n' +
      '2. from the initial symbol S it is possible to deduce a chain aA by means of production S → aA; \n ' +
      '3. with aA, using the product A → aa, you can output the chain aaa; \n ' +
      '4. it is impossible to deduce any other chains. Therefore, L (G) = {b, aaa}. ',
    q16q: 'Let G be a grammar with the alphabet V = {S, 0, 1}, the set of terminals T = {0, 1}, the initial symbol S, and the set of products P = {S → 11S, S → 0}. Find L (G). Set the sequence of steps.',
    q16o1: `step 1`,
    q16o2: `step 2`,
    q16o3: `step 3`,
    q16o4: `step 4`,
    q16a1: 'with 11S you can get 110 or 1111S;',
    q16a2: 'from the initial symbol S we obtain 0 (using the second product) or 11S (using the first);',
    q16a3: 'after each output we add two units to the end of the chain or end the chain with zero, ie L (G) = {0, 110, 11110, 1111110,…};',
    q16a4: 'from 1111S is displayed 11110 or 111111S.',
    q16e: 'Mistake! The correct answer is \n ' +
      '1. from the initial symbol S we obtain 0 (using the second \n ' +
      'products) or 11S (using the first); \n' +
      '2. with 11S you can get 110 or 1111S; \n ' +
      '3. from 1111S is deduced 11110 or 111111S; \n ' +
      '4. after each output we add two units to the end of the chain or end the chain with zero, ie L (G) = {0, 110, 11110, 1111110,…}. ',
    q23q: 'The production of grammar makes it possible to replace one sequence of characters with another. Grammars are classified by product types. Consider the classification proposed by the American mathematician and linguist N. Chomsky. Match.',
    q23o1: `0`,
    q23o2: `1`,
    q23o3: `2`,
    q23o4: `3`,
    q23a1: '|ξ| ≤ |η| or η = ε;',
    q23a2: 'there are no restrictions;',
    q23a3: 'ξ = A, and η = aB or η = a, where A, B are non-terminal symbols, a is a terminal symbol, or S → ε;',
    q23a4: 'ξ = A, where A is a non-terminal symbol.',
    q23e: 'Mistake! The correct answer is \n ' +
      '0 - no restrictions; \n' +
      '1 - | ξ | ≤ | η | or η = ε; \n ' +
      '2 - ξ = A, where A is a non-terminal symbol; \n' +
      '3 - ξ = A, and η = aB or η = a, where A, B - non-terminal symbols, a - terminal symbol, or S → ε',
    q24q: 'Formal grammars are a very powerful mathematical tool used in mathematical and computational linguistics, description of programming languages, development of compilers in programming theory. HF grammars are also the most commonly used and regular, because they are the easiest to describe algorithmically.',
    q24o1: '',
    q24e: 'Mistake! The correct answer is the second option.',
    q25q: `In itself, the concept of formal grammars is quite flexible, so it is not surprising that there are many other tools that expand the use and power of HF grammars and grammars of the third type. Give examples. Choose the answer.`,
    q25o1: 'attribute grammars',
    q25o2: 'LL-k grammars',
    q25o3: 'finite machines',
    q25o4: 'regular expressions',
    q25o5: 'sets',
    q25o6: 'all options are correct',
    q25e: 'Mistake! The correct answer is the last option.',
  }
};