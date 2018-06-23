/**
    This is the data source for your application. In the real world, you would either get this data from a data base or
    from an API
	**/
exports.recipeTypeName = {
  bbq: 'Barbeque',
  dessert: 'Dessert',
  fraud: 'Fraud 방지'
}
exports.bbq = [{
    name: 'Make-It-Mine Pork Kabobs',
    ingredients: ["1 pound boneless pork loin or tenderloin",
      "1 Onion",
      "1 Zuchhini",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/01/07/80/1078019.jpg'
  },
  {
    name: 'San Diego Grilled Chicken',
    ingredients: ["1 pound boneless pork loin or tenderloin",
      "1 Onion",
      "1 Zuchhini",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/00/62/02/620268.jpg'
  },
  {
    name: 'Italian Chicken Marinade',
    ingredients: ["1 pound boneless pork loin or tenderloin",
      "1 Onion",
      "1 Zuchhini",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/00/66/59/665982.jpg'
  },
  {
    name: 'Spicy Grilled Chicken',
    ingredients: ["1 pound boneless pork loin or tenderloin",
      "1 Onion",
      "1 Zuchhini",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/00/83/42/834228.jpg'
  }
]

exports.fraud = [{
    name: '이중계약사기',
    ingredients: [
      "전세 매물의 부족하여 이를 악용해, 다수의 임차인에게 중개인이 집주인 대신 전세 계약금을 받고 사기꾼의 잠적하는 사기 행위",
      "해결책?",
      "Contract계약을 맺을 수 있는건 공인중개사 자격증이 있는 개인만이 가능하기 때문에 1차적으로 사기꾼 방지",
      "자신의 신분이 들러나 있는 ID로 Contract를 성사 시켰고 그로 인해 계약을 임의로 수정할 수 없다",
      "기존 contract가 있는지 검색을 통해 미리 쉽게 알아볼 수 있다."
    ],
    photo: '/images/double.jpg'
  },
  {
    name: '전월세사기',
    ingredients: [
      "자격이 없는 공인중개사가 자격증을 빌려 사무실을 열어서 집주인에게는 월세를 주며 임대관리 임대인으로부터는 전세를 받고 임차인은 나중에 전세금을 못 돌려받음",
      "해결책?",
      "자격이 없는 공인중개사는 이용할 수 없으므로 Contract를 성사 시킬 수 없다",
      "언제든지 검색을 통해서 계약의 정확한 계약의 내용을 확인할 수 있다."
    ],
    photo: '/images/montly.jpg'
  },
  {
    name: '직거래사기',
    ingredients: [
      "중개 수수료를 절약하기 위해 직거래로 계약했을 경우 월세 계약을 맺은 임차인이 집주인 신분증을 위조 집주인 행세를 하며 전세금을 빼돌림",
      "해결책?",
      "언제든지 검색을 통해 계약서의 내용을 확인하여 구분가능"
    ],
    photo: '/images/deals.jpg'
  }
]

exports.dessert = [{
    name: 'Red, White and Blue Strawberry Shortcake',
    ingredients: ["1 Cake",
      "1 Red",
      "1 Whit",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/00/97/60/976034.jpg'
  },
  {
    name: 'All American Trifle',
    ingredients: ["1 pound boneless pork loin or tenderloin",
      "1 Onion",
      "1 Zuchhini",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/01/17/91/1179163.jpg'
  },
  {
    name: 'Scrumdiddlyuptious Ice Pops',
    ingredients: ["1 Block of Ice",
      "1 Scumptious Pop",
      "1 Great Attitudue",
      "2 Hands"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/01/01/40/1014067.jpg'
  },
  {
    name: 'Summertime Cookies',
    ingredients: ["1 pound boneless pork loin or tenderloin",
      "1 Onion",
      "1 Zuchhini",
      "1 Shitake Mushroom"
    ],
    photo: 'http://images.media-allrecipes.com/userphotos/250x250/00/17/84/178425.jpg'
  }
]
