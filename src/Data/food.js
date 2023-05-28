const food = [
  {
    title: "Баранина",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3295,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453574bb6d8e213df9baf4c/245x225/c1",
  },
  {
    title: "Манты домашние",
    category: "манты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 500,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453593d65163d437ac5709f/245x225/c1",
  },
  {
    title: "Бедрышки курочки",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2295,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453575dd9cfce786039f860/245x225/c1",
  },
  {
    title: "Беш",
    category: "Бешбармак",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 39995,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64535956dfd48f72b28fb40b/245x225/c1",
  },
  {
    title: "«Черный бесбармак»",
    category: "Бешбармак",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3800,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5bc6bab4d062916717d5fa67/245x225/c1",
  },
  {
    title: "Крылышки от нее",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2295,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/6453573865163d437ac5709b/245x225/c1",
  },
  {
    title: "BigBurger",
    category: "Гамбургер",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1200,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5c53d037d06291384ee3f027/245x225/c1",
  },
  {
    title: "Local бургер",
    category: "Гамбургер",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1200,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5da54457d0629119a7d99f5f/245x225/c1",
  },
  {
    title: "Бургер «Чикаго»",
    category: "Гамбургер",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3500,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5bc6b5f2d062916717d5f492/245x225/c1",
  },
  {
    title: "Юлике",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535479e60b894a8cf0f511/245x225/c1",
  },
  {
    title: "Ас, ас жаным",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645354b1e0b30979a60b5581/245x225/c1",
  },
  {
    title: "Мясоет",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535469dfd48f72b28fb405/245x225/c1",
  },
  {
    title: "16/20",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3595,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453549fa1fef0728713d8b0/245x225/c1",
  },
  {
    title: "Гереке",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2795,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/6453543a85294204f1e4d1d4/245x225/c1",
  },
  {
    title: "Фила Гриль",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3295,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645357c5a1fef0728713d8bb/245x225/c1",
  },
  {
    title: "Фила Лухари",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645357b1b8da227c656901e8/245x225/c1",
  },
  {
    title: "Филадельфия",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453583fc2bbf076d1428295/245x225/c1",
  },
  {
    title: "Дракон",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/645358024731e87b8168690b/245x225/c1",
  },
  {
    title: "Калифорния",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2495,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64535830b6d8e213df9baf4f/245x225/c1",
  },
  {
    title: "Горячая Америка",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3295,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/6453581ac2bbf076d1428293/245x225/c1",
  },
  {
    title: "Горячий Самурай",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2795,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645357d71d34d86e66d00047/245x225/c1",
  },
  {
    title: "Острый Магуро",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2295,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645357ef5c851c597a17b7df/245x225/c1",
  },
  {
    title: "Чукка",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453584b9db7cf7acd097a9f/245x225/c1",
  },
  {
    title: "Бонито",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535865221e503555404b98/245x225/c1",
  },
  {
    title: "Просто маке 24 шт.",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 9995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453589f7508685fddcad09e/245x225/c1",
  },
  {
    title: "Солидный Саке 32 шт.",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 12995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645358bf9db7cf7acd097aa1/245x225/c1",
  },
  {
    title: "Серьезный Баке 40 шт.",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 12995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453588f65163d437ac5709d/245x225/c1",
  },
  {
    title: "Горячий Коке 48 шт.",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 14995,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/645358b0c2bbf076d1428297/245x225/c1",
  },
  {
    title: "Щедрый Кайреке 56 шт.",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 17995,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453587fb6d8e213df9baf51/245x225/c1",
  },
  {
    title: "Филадельфия классик",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2569,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643787b0ee5578160abe3f6f/245x225/c1",
  },
  {
    title: "Филадельфия с огурцом",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2569,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643787c5ea6a442ee28e09a5/245x225/c1",
  },
  {
    title: "Калифорния темпура",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2469,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643787f41528b630f2cd017c/245x225/c1",
  },
  {
    title: "Филадельфия опалённая",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2669,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643788086aab7130c23cdfba/245x225/c1",
  },
  {
    title: "Калифорния креветки",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2669,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6437881b1f92291f78d4f85b/245x225/c1",
  },
  {
    title: "Калифорния лосось",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2239,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6437882d63caeb2ab0690037/245x225/c1",
  },
  {
    title: "Калифорния темпов",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2469,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643788544f00041ad63f495a/245x225/c1",
  },
  {
    title: "Ролл с угрем дракон",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2469,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/6437886c5f93851d3f7c57ff/245x225/c1",
  },
  {
    title: "Температура с лососем терияки",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2339,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643788880957a23266b6268b/245x225/c1",
  },
  {
    title: "Бонито ролл",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1939,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643788bb0467311fdd9ba0b8/245x225/c1",
  },
  {
    title: "Сет Full Фила",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6500,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5c1083a0d0629104a85840d6/245x225/c1",
  },
  {
    title: "Филадельфия гриль",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1400,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5c10840fd0629104a858413c/245x225/c1",
  },
  {
    title: "Мураками",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1100,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5c10d896d062915a622d435a/245x225/c1",
  },
  {
    title: "Роллы «Wall Street»",
    category: "Суши",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 5600,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5be41bf1d062917810c15732/245x225/c1",
  },
  {
    title: "Зім-Зім",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2295,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535485b7a2a17b79007f04/245x225/c1",
  },
  {
    title: "Лада-Седан",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2495,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/6453545ce0b30979a60b557e/245x225/c1",
  },
  {
    title: "Берешь и Жаришь",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2795,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/645354c66803195bb3537812/245x225/c1",
  },
  {
    title: "Нармальный (есьже)",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453539d9db7cf7acd097a91/245x225/c1",
  },
  {
    title: "Цезарь",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1250,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/57fdc3ab579f24279a00b4ba/245x225/c1",
  },
  {
    title: "МясоЕт",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64534120221e503555404b88/245x225/c1",
  },
  {
    title: "Салат с баклажанами фри",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5da547fbd0629119a7d9a09a/245x225/c1",
  },
  {
    title: "Салат «Бостон»",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3600,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5bc6b728d0629161e3a520b2/245x225/c1",
  },
  {
    title: "Султан «Сулейман»",
    category: "Салаты",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1190,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5805a1ab579f244dcf012777/245x225/c1",
  },
  {
    title: "Бауырсак Бургер",
    category: "Гамбургер",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1390,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5805a2a7579f244eaf01293f/245x225/c1",
  },
  {
    title: "Коконис разный",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1295,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64535782a1fef0728713d8b7/245x225/c1",
  },
  {
    title: "Говядинка",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3295,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453572556afe857c960d0b2/245x225/c1",
  },
  {
    title: "Индейка",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2995,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6453576fb3779f7d45d88c3b/245x225/c1",
  },
  {
    title: "Люля",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2495,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/645357909db7cf7acd097a9d/245x225/c1",
  },
  {
    title: "Шашлык из баранины",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3099,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64368988a24a0e06761f4a0c/245x225/c1",
  },
  {
    title: "Шашлык из говядины",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3299,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643689a35f938508a1297b9d/245x225/c1",
  },
  {
    title: "Ассорти шашлычков",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2249,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643689ba63caeb1da19fe5a7/245x225/c1",
  },
  {
    title: "Шашлык из куриной грудки",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2159,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643689d7a24a0e06761f4a0e/245x225/c1",
  },
  {
    title: "Шашлык из свинины",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2449,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64368a29a0bf840875ae914c/245x225/c1",
  },
  {
    title: "Сёмга на гриле",
    category: "Рыбы",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3700,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/59a4343ae0c76f6c1ef0b0ee/245x225/c1",
  },
  {
    title: "Карась жареный по домашнему",
    category: "Рыбы",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1288,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5f7c05b750dfd00006205a12/245x225/c1",
  },
  {
    title: "Лосось Гриль",
    category: "Рыбы",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6200,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5be41b22d0629176e3a14b26/245x225/c1",
  },
  {
    title: "Шашлык восточный",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3299,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64368a3f4f00040843e81864/245x225/c1",
  },
  {
    title: "Шашлык финский",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3699,

    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64368a570957a21f95bd3d16/245x225/c1",
  },
  {
    title: "Шашлык турецкий",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2299,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64368a702a478105ba9fb73c/245x225/c1",
  },
  {
    title: "Веллингтон",
    category: "Мясные блюда",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3800,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/59a433afe0c76f6c8520aea1/245x225/c1",
  },
  {
    title: "Димляма по-узбекски",
    category: "Мясные блюда",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 1888,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5c541345d062913c2432bec7/245x225/c1",
  },
  {
    title: "Казан Кебаб",
    category: "Мясные блюда",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2288,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5d480809d0629111cf115529/245x225/c1",
  },
  {
    title: "Ирландское рагу",
    category: "Мясные блюда",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3800,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5da545bed0629118449384e6/245x225/c1",
  },
  {
    title: "«Микс-гриль»",
    category: "Мясные блюда",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 13500,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/5bc6b685d062916717d5f508/245x225/c1",
  },
  {
    title: "Шашлык из индейки",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2469,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64368a960957a21f95bd3d23/245x225/c1",
  },
  {
    title: "Кеспе - которая с курицей",
    category: "Паста",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2795,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535b6d7508685fddcad0a7/245x225/c1",
  },
  {
    title: "Кеспе - которая с томатами",
    category: "Паста",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2295,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535b7d0a43f40430be2779/245x225/c1",
  },
  {
    title: "Кеспе Карбонара",
    category: "Паста",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/64535b8bb8da227c656901ee/245x225/c1",
  },
  {
    title: "Пене с лососем и соусом «Песто»",
    category: "Паста",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3600,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5bc6bb42d0629163b1f1042b/245x225/c1",
  },
  {
    title: "Шатобриан",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645356dde0b30979a60b5586/245x225/c1",
  },
  {
    title: "Ти-Бон",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6495,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/645356f0a1fef0728713d8b4/245x225/c1",
  },
  {
    title: "Рибай",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6495,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/64535704c4877976e1ce56a9/245x225/c1",
  },
  {
    title: "Рыбай",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6995,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/645356b8af79323c3c06f84b/245x225/c1",
  },
  {
    title: "Я-бай",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6495,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/645356cb9db7cf7acd097a9a/245x225/c1",
  },
  {
    title: "Стейк Рибай",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 4789,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643694738a407c1d2035ca50/245x225/c1",
  },
  {
    title: "Стейк Рибай на кости",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 4789,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/6436949563caeb1da19fe5ab/245x225/c1",
  },
  {
    title: "Стейк Тибон",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 4789,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643694c0f452eb1ed84dde7e/245x225/c1",
  },
  {
    title: "Стейк из говядины",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3969,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643695051528b619943ebfbb/245x225/c1",
  },
  {
    title: "Стейк из свинины",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 2779,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/643695690957a21f95bd3d30/245x225/c1",
  },
  {
    title: "Стейк из говядины Пеппер",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3969,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643696a02a478105ba9fb748/245x225/c1",
  },
  {
    title: "Стейк из сёмги",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 5499,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/643696bcf452eb1ed84dde80/245x225/c1",
  },
  {
    title: "Стейк Рибай из говядины",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 4700,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/59a432e2e0c76f6c9a42e58b/245x225/c1",
  },
  {
    title: "Стейк Ти-Бон",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 700,
    image:
      "https://strg2.restoran.kz/neofiles/serve-image/57fdc48f579f2428a600aeb5/245x225/c1",
  },
  {
    title: "Чоризо стейк",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5da54854d0629119a7d9a0c3/245x225/c1",
  },
  {
    title: "Стейк Рибай",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 3700,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5967525ad062916e361266eb/245x225/c1",
  },
  {
    title: "Малая мясная доска",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 5500,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5abb5342d062911355a3a9a0/245x225/c1",
  },
  {
    title: "Средняя мясная доска",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 8500,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5abb537ad0629118000a5846/245x225/c1",
  },
  {
    title: "Большая мясная доска",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 12500,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5abb53acd062911a7c77e7f1/245x225/c1",
  },
  {
    title: "Тибон",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5da543e0d0629119a7d99f45/245x225/c1",
  },
  {
    title: "Стейк «Рибай»",
    category: "Стейк",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 6500,
    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5bc6b5bed0629163b1f0fdd0/245x225/c1",
  },

  {
    title: "Мясной сет",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 7888,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5c57fb4ed0629179bac8cf11/245x225/c1",
  },
  {
    title: "Ассорти кабоб",
    category: "шашлык",
    RatingStar: "⭐️⭐️⭐️⭐️⭐️",
    price: 11088,

    image:
      "https://strg1.restoran.kz/neofiles/serve-image/5c5d38b4d0629151221f4c17/245x225/c1",
  },
];

export default food;
