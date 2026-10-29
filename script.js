let balance = document.getElementById("balance");
let balance1 = document.getElementById("balance1");
let clickButton = document.getElementById("clickButton");
let strengthNumber = document.getElementById("strengthNumber");
let strengthNumber1 = document.getElementById("strengthNumber1");
let xpScore = document.getElementById("xpScore");

let levelNumber = document.getElementById("levelNumber");
let levelNumber1 = document.getElementById("levelNumber1");
let expProgress = document.getElementById("expProgress");
let buttonBuy = document.getElementById("buttonBuy");
let price = document.getElementById("price");
let money = document.getElementById("money");
let newGameButton = document.getElementById("newGameButton");
let nickname = document.getElementById("nickname");
let startScreen = document.getElementById("startScreen");
let personName = document.getElementById("personName");
let themeButton = document.getElementById("themeButton");
let shopButton = document.getElementById("shopButton");
let comeBackButton = document.getElementById("comeBackButton");
let comeBackButton1 = document.getElementById("comeBackButton1");
let comeBackButton2 = document.getElementById("comeBackButton2");
let comeBackButton3 = document.getElementById("comeBackButton3");

let shopScreen = document.getElementById("shopScreen");
let changeSkinButton = document.getElementById("changeSkinButton");
let ak47 = document.getElementById("ak47");
let inventoryScreen = document.getElementById("inventoryScreen");
let inventoryButton = document.getElementById("inventoryButton");
let skinButtons = document.querySelectorAll(".skinButton");
let buySkinButtons = document.querySelectorAll(".buySkinButton");
let balanceShop = document.getElementById("balanceShop");
let inventorySkins = document.getElementById("inventorySkins");
let profileButton = document.getElementById("profileButton");
let showName = document.getElementById("showName");
let profileScreen = document.getElementById("profileScreen");
let changeNameButton = document.getElementById("changeNameButton");
let changeName = document.getElementById("changeName");
let changeButton = document.getElementById("changeButton");
let avatar = document.getElementById("avatar");
let rebithButton = document.getElementById("rebithButton");
let rebithNumber = document.getElementById("rebithNumber");
let rebithNumber1 = document.getElementById("rebithNumber1");
let questsScreen = document.getElementById("questsScreen");
let questsButton = document.getElementById("questsButton");
let changeAvatarButton = document.getElementById("changeAvatarButton");
let avatarInput = document.getElementById("avatarInput");

//quests
let questScore = document.getElementById("questScore");
let questProgress = document.getElementById("questProgress");
let claimRewardButton = document.getElementById("claimRewardButton");
let questScore1 = document.getElementById("questScore1");
let questProgress1 = document.getElementById("questProgress1");
let claimRewardButton1 = document.getElementById("claimRewardButton1");
let questScore2 = document.getElementById("questScore2");
let questProgress2 = document.getElementById("questProgress2");
let claimRewardButton2 = document.getElementById("claimRewardButton2");

let purchasedSkins = JSON.parse(localStorage.getItem("purchasedSkins")) || [];
let upgradingScore = 10;
let xpNumber = 0;

let balanceNumber = 0;
let upgrading = 1;
let level = 1;
let rebith = 0;

//quests
let today = gettoday();
let savedDay = Number(localStorage.getItem("today"));
let click = 0;
let questNumber = 1;
let upgradingForQ = 1;
let xpQuestNum = 0;
let boughtUpg = 0;
let boughtForUpgQ = 1;

let buffX = 1;
let levelRequirments = [10, 15, 20, 25];
let buffForRebith = [1.5, 2.0, 2.5, 3.0];
let giftForRebith = [500, 1000, 1500, 2000];
let xpRequirements = [
  100, 250, 500, 1000, 1500, 2500, 3500, 5000, 7500, 10000, 20000, 30000, 50000,
  100000, 120000, 150000, 200000, 250000, 325000, 400000, 500000, 600000,
  700000, 850000, 1000000,
];
let giftForLevel = [
  0, 50, 70, 100, 100, 150, 250, 350, 500, 750, 1000, 2000, 3000, 5000, 10000,
  12000, 15000, 20000, 25000, 32500, 40000, 50000, 60000, 70000, 85000, 100000,
];

let name = "";
let skins = JSON.parse(localStorage.getItem("skins")) || ["ak47.png"];

let allSkins = [
  "images/ak47_TheEmpress.png",
  "images/ak47_Bloodsport.png",
  "images/ak47_CraneFlight.png",
  "images/ak47_FireSerpent.png",
  "images/ak47_NeonRider.png",
];

let skinClasses = [
  "TheEmpress",
  "Bloodsport",
  "CraneFlight",
  "FireSerpent",
  "NeonRider",
];

let currentSkin = Number(localStorage.getItem("currentSkin")) || 0;

//загрузка данных
function loadGame() {
  balanceNumber = Number(localStorage.getItem("balance")) || 0;
  level = Number(localStorage.getItem("level")) || 1;
  xpNumber = Number(localStorage.getItem("xpNumber")) || 0;
  upgrading = Number(localStorage.getItem("upgrading")) || 1;
  upgradingScore = Number(localStorage.getItem("upgradingScore")) || 10;
  name = localStorage.getItem("name") || "";
  rebith = Number(localStorage.getItem("rebith")) || 0;
  click = Number(localStorage.getItem("click")) || 0;
  xpQuestNum = Number(localStorage.getItem("xpQuestNum")) || 0;
  boughtUpg = Number(localStorage.getItem("boughtUpg")) || 0;
}
function checkQuestDate() {
  localStorage.removeItem("claimRewardButton");
  localStorage.removeItem("claimRewardButton1");
  localStorage.removeItem("claimRewardButton2");

  click = 0;
  xpQuestNum = 0;
  boughtUpg = 0;

  localStorage.setItem("click", click);
  localStorage.setItem("xpQuestNum", xpQuestNum);
  localStorage.setItem("boughtUpg", boughtUpg);
}
function gettoday() {
  return new Date().toLocaleDateString();
}
function newQuest() {
  if (savedDay !== gettoday()) {
    console.log("hello");

    checkQuestDate();
  }

  questsScreen.style.display = "flex";

  // остальной твой код

  questsScreen.style.display = "flex";
  if (click >= 100) {
    questScore.textContent = "100 / 100";
    questProgress.style.width = (100 / 100) * 100 + "%";
    questNumber = 0;
  } else {
    questScore.textContent = click + " / 100";
    questProgress.style.width = (click / 100) * 100 + "%";
  }
  if (localStorage.getItem("claimRewardButton") === "true") {
    claimRewardButton.disabled = true;
    claimRewardButton.textContent = "Выполнено";
    claimRewardButton.classList.add("active");
  }

  if (xpQuestNum >= 1000) {
    questScore1.textContent = "1000 / 1000";
    questProgress1.style.width = (1000 / 1000) * 100 + "%";
    upgradingForQ = 0;
  } else {
    questScore1.textContent = xpQuestNum + " / 1000";
    questProgress1.style.width = (xpQuestNum / 1000) * 100 + "%";
  }
  if (localStorage.getItem("claimRewardButton1") === "true") {
    claimRewardButton1.disabled = true;
    claimRewardButton1.textContent = "Выполнено";
    claimRewardButton1.classList.add("active");
  }

  if (boughtUpg >= 5) {
    questScore2.textContent = "5 / 5";
    questProgress2.style.width = (5 / 5) * 100 + "%";
  } else {
    questScore2.textContent = boughtUpg + " / 5";
    questProgress2.style.width = (boughtUpg / 5) * 100 + "%";
  }
  if (localStorage.getItem("claimRewardButton2") === "true") {
    claimRewardButton2.disabled = true;
    claimRewardButton2.textContent = "Выполнено";
    claimRewardButton2.classList.add("active");
  }
}

//кнопка новой игры
newGameButton.addEventListener("click", function () {
  name = nickname.value;
  showName.textContent = name;
  personName.textContent = name;
  startScreen.style.display = "none";
  localStorage.setItem("name", name);
  saveGame();
});

profileButton.addEventListener("click", function () {
  balance1.textContent = "Баланс: " + balanceNumber;
  levelNumber1.textContent = level;
  strengthNumber1.textContent = upgrading;

  rebithNumber1.textContent = rebith;

  profileScreen.style.display = "flex";
});
questsButton.addEventListener("click", function () {
  newQuest();
});
//quest
claimRewardButton.addEventListener("click", function () {
  if (click >= 100) {
    balanceNumber += 500;
    balance.textContent = "Баланс: " + balanceNumber;
    alert("Ежедневное задание выполнено. Твоя награда: 500 монет");
    claimRewardButton.disabled = true;
    claimRewardButton.textContent = "Выполнено";
    claimRewardButton.classList.toggle("active");

    localStorage.setItem("claimRewardButton", "true");
  } else {
    alert("Задание еще не выполнено");
    return;
  }
});
claimRewardButton1.addEventListener("click", function () {
  if (xpQuestNum >= 1000) {
    balanceNumber += 1000;
    balance.textContent = "Баланс: " + balanceNumber;
    alert("Ежедневное задание выполнено. Твоя награда: 1000 монет");
    claimRewardButton1.disabled = true;
    claimRewardButton1.textContent = "Выполнено";
    claimRewardButton1.classList.toggle("active");
    localStorage.setItem("claimRewardButton1", "true");
  } else {
    alert("Задание еще не выполнено");
    return;
  }
});
claimRewardButton2.addEventListener("click", function () {
  if (boughtUpg >= 5) {
    balanceNumber += 500;
    balance.textContent = "Баланс: " + balanceNumber;
    alert("Ежедневное задание выполнено. Твоя награда: 500 монет");
    claimRewardButton2.disabled = true;
    claimRewardButton2.textContent = "Выполнено";
    claimRewardButton2.classList.toggle("active");
    localStorage.setItem("claimRewardButton2", "true");
  } else {
    alert("Задание еще не выполнено");
    return;
  }
});
changeNameButton.addEventListener("click", function () {
  if ((changeName.style.display = "none")) {
    changeName.style.display = "block";
    personName.style.display = "none";
    changeNameButton.style.display = "none";
    changeButton.style.display = "block";
    changeName.value = "";
  }
});

changeButton.addEventListener("click", function () {
  if (changeName.value.trim() === "") {
    alert("Введите никнейм");
    return;
  }

  if (changeName.value.length > 15 || changeName.value.length < 3) {
    alert("Ник должен содержать от 3 до 15 символов");
    return;
  }
  name = changeName.value;
  personName.textContent = name;
  showName.textContent = name;
  changeNameButton.style.display = "block";
  changeName.style.display = "none";
  personName.style.display = "block";
  changeButton.style.display = "none";

  localStorage.setItem("name", name);
  saveGame();
});

changeAvatarButton.addEventListener("click", function () {
  avatarInput.click();
});

avatarInput.addEventListener("change", function () {
  let file = avatarInput.files[0];

  if (file) {
    let reader = new FileReader();

    reader.onload = function () {
      avatar.src = reader.result;
      localStorage.setItem("avatar", reader.result);
    };

    reader.readAsDataURL(file);
  }
});

//кнопка для смены темы
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

//кнопка для открытия магаза
shopButton.addEventListener("click", function () {
  shopScreen.style.display = "flex";
  balanceShop.textContent = "Баланс: " + balanceNumber;
});

//кнопка для покупки скины
buySkinButtons.forEach(function (bought) {
  bought.addEventListener("click", function () {
    let skinsPrice = bought.dataset.price;
    let skinsIndex = bought.dataset.index;

    if (Number(skinsPrice) <= balanceNumber) {
      balanceNumber -= Number(skinsPrice);

      localStorage.setItem("balance", balanceNumber);
      balance.textContent = "Баланс: " + balanceNumber;
      balanceShop.textContent = "Баланс: " + balanceNumber;
      bought.textContent = "Куплено";
      bought.disabled = true;
      purchasedSkins.push(allSkins[skinsIndex]);

      localStorage.setItem("purchasedSkins", JSON.stringify(purchasedSkins));
    } else {
      alert("Недостаточно средств");
    }
  });
});

//кнопка для открытия инвентаря
inventoryButton.addEventListener("click", function () {
  inventoryScreen.style.display = "flex";
  skinButtons.forEach(function (button) {
    let numberSkins = button.dataset.index;
    let isPurchased = purchasedSkins.includes(allSkins[numberSkins]);

    button.disabled = !isPurchased;
    button.textContent = isPurchased ? "Экипировать" : "Не куплено";
    let isEquipped = skins.includes(allSkins[numberSkins]);

    if (!isPurchased) {
      button.textContent = "Не куплено";
    } else if (isEquipped) {
      button.textContent = "Снять";
    } else {
      button.textContent = "Экипировать";
    }
  });
});
//кнопка экипировки
skinButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let numberSkins = button.dataset.index;
    if (!purchasedSkins.includes(allSkins[numberSkins])) {
      return;
      button.disabled = true;
    }

    if (!skins.includes(allSkins[numberSkins])) {
      skins.push(allSkins[numberSkins]);
      localStorage.setItem("skins", JSON.stringify(skins));
      button.textContent = "Снять";
      button.classList.add("active");
      localStorage.setItem("skins", JSON.stringify(skins));
    } else {
      let removedSkin = allSkins[numberSkins];
      let isCurrentSkin = ak47.src.endsWith(removedSkin);
      skins.splice(skins.indexOf(allSkins[numberSkins]), 1);
      localStorage.setItem("skins", JSON.stringify(skins));

      if (isCurrentSkin) {
        currentSkin = 0;
        localStorage.setItem("currentSkin", currentSkin);
        ak47.src = skins[currentSkin];

        ak47.classList.remove(...skinClasses);
        let skinIndex = allSkins.indexOf(skins[currentSkin]);

        if (skinIndex !== -1) {
          ak47.classList.add(skinClasses[skinIndex]);
        }
      }
      button.textContent = "Экипировать";
      button.classList.remove("active");
    }
  });
});

//кнопки для закрытия
comeBackButton.addEventListener("click", function () {
  shopScreen.style.display = "none";
});
comeBackButton1.addEventListener("click", function () {
  inventoryScreen.style.display = "none";
});
comeBackButton2.addEventListener("click", function () {
  profileScreen.style.display = "none";
});
comeBackButton3.addEventListener("click", function () {
  questsScreen.style.display = "none";
  savedDay = gettoday();
  localStorage.setItem("savedDay", gettoday);
});
//кнопка для смены скина
changeSkinButton.addEventListener("click", function () {
  currentSkin += 1;

  if (currentSkin >= skins.length) {
    currentSkin = 0;
  }

  ak47.src = skins[currentSkin];
  localStorage.setItem("currentSkin", currentSkin);

  ak47.classList.remove(...skinClasses);
  let skinIndex = allSkins.indexOf(skins[currentSkin]);

  if (skinIndex !== -1) {
    ak47.classList.add(skinClasses[skinIndex]);
  }
});

//функция обновления уровня
function updateLevel() {
  let requiredXP = xpRequirements[level - 1];
  let giftForLevelNumber = giftForLevel[level - 1];

  xpNumber -= requiredXP;
  level += 1;
  xpScore.textContent = xpNumber + "/" + xpRequirements[level - 1];
  expProgress.style.width = (xpNumber / xpRequirements[level - 1]) * 100 + "%";

  levelNumber.textContent = level;

  balanceNumber += giftForLevel[level - 1];
  balance.textContent = "Баланс: " + balanceNumber;

  alert(
    "Ты достиг " +
      level +
      " уровня! Награда: " +
      giftForLevel[level - 1] +
      " монет",
  );
  if (level >= levelRequirments[rebith - 0]) {
    alert("Перерождение доступно!");
    rebithButton.disabled = false;
  }

  saveGame();
}

rebithButton.addEventListener("click", function () {
  updateRebith();
});

function updateRebith() {
  alert(
    "Ты сделал перерождение, твой множитель теперь " +
      buffForRebith[rebith - 0] +
      " а твоя награда " +
      giftForRebith[rebith - 0] +
      " монет",
  );
  balanceNumber = giftForRebith[rebith - 0];
  upgrading = Number((buffX * buffForRebith[rebith - 0]).toFixed(2));
  rebith += 1;
  rebithNumber.textContent = rebith;
  level = 1;

  xpNumber = 0;
  xpScore.textContent = xpNumber + "/" + xpRequirements[level - 1];
  expProgress.style.width = (xpNumber / xpRequirements[level - 1]) * 100 + "%";
  upgradingScore = 10;
  strengthNumber.textContent = Number(upgrading.toFixed(2));
  price.textContent = "Цена: " + upgradingScore + " монет";
  levelNumber.textContent = level;
  balance.textContent = "Баланс: " + balanceNumber;

  rebithButton.disabled = true;

  saveGame();
}

//функция игры
clickButton.addEventListener("click", function () {
  xpNumber = Number((xpNumber + upgrading).toFixed(2));
  balanceNumber = Number((balanceNumber + upgrading).toFixed(2));
  xpScore.textContent = xpNumber + "/" + xpRequirements[level - 1];
  balance.textContent = "Баланс: " + balanceNumber;
  expProgress.style.width = (xpNumber / xpRequirements[level - 1]) * 100 + "%";

  if (xpNumber >= xpRequirements[level - 1]) {
    updateLevel();
  }

  xpQuestNum = upgradingForQ + xpQuestNum;
  click = click + questNumber;

  saveGame();
});

//функция улучшения
buttonBuy.addEventListener("click", function () {
  if (balanceNumber >= upgradingScore) {
    balanceNumber -= upgradingScore;
    balance.textContent = "Баланс: " + balanceNumber;
    upgrading += 1;
    //quest

    boughtUpg += boughtForUpgQ;
    upgradingForQ += 1;
    strengthNumber.textContent = upgrading;

    upgradingScore += 20;

    price.textContent = "Цена: " + upgradingScore + " монет";
  } else {
    alert("Недостаточно средств");
  }

  saveGame();
});

//сохранение игрs
function saveGame() {
  localStorage.setItem("balance", balanceNumber);
  localStorage.setItem("level", level);
  localStorage.setItem("xpNumber", xpNumber);
  localStorage.setItem("upgrading", upgrading);
  localStorage.setItem("upgradingScore", upgradingScore);
  localStorage.setItem("name", name);
  localStorage.setItem("rebith", rebith);
  localStorage.setItem("click", click);
  localStorage.setItem("xpQuestNum", xpQuestNum);
  localStorage.setItem("boughtUpg", boughtUpg);
}

//загрузка игры
loadGame();

balance.textContent = "Баланс: " + balanceNumber;
balance1.textContent = "Баланс: " + balanceNumber;
levelNumber.textContent = level;
levelNumber1.textContent = level;
strengthNumber.textContent = upgrading;
strengthNumber1.textContent = upgrading;
price.textContent = "Цена: " + upgradingScore + " монет";
xpScore.textContent = xpNumber + "/" + xpRequirements[level - 1];
expProgress.style.width = (xpNumber / xpRequirements[level - 1]) * 100 + "%";
personName.textContent = name;
showName.textContent = name;
shopScreen.style.display = "none";
inventoryScreen.style.display = "none";
balanceShop.textContent = "Баланс: " + balanceNumber;
rebithNumber.textContent = rebith;
rebithNumber1.textContent = rebith;
rebithButton.disabled = true;

//quest
savedDay = gettoday();
xpQuestNum = upgradingForQ + xpQuestNum;
click = click + questNumber;

questsScreen.style.display = "none";
profileScreen.style.display = "none";
if (name) {
  startScreen.style.display = "none";
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

buySkinButtons.forEach(function (button) {
  let skinsIndex = button.dataset.index;

  if (purchasedSkins.includes(allSkins[skinsIndex])) {
    button.textContent = "Куплено";
    button.disabled = true;
  }
});

skinButtons.forEach(function (button) {
  let skinsIndex = button.dataset.index;
  let skin = allSkins[skinsIndex];
  let isPurchased = purchasedSkins.includes(skin);
  let isEquipped = skins.includes(skin);

  button.disabled = !isPurchased;

  if (isEquipped) {
    button.textContent = "Снять";
    button.classList.add("active");
  } else if (isPurchased) {
    button.textContent = "Экипировать";
    button.classList.remove("active");
  } else {
    button.textContent = "Не куплено";
    button.classList.remove("active");
  }
});

if (skins[currentSkin]) {
  ak47.src = skins[currentSkin];

  ak47.classList.remove(...skinClasses);

  let classIndex = allSkins.indexOf(skins[currentSkin]);

  if (classIndex !== -1) {
    ak47.classList.add(skinClasses[classIndex]);
  }
}

skinButtons.forEach(function (button) {
  let index = button.dataset.index;
  let skin = allSkins[index];
  let purchased = purchasedSkins.includes(skin);
  let equipped = skins.includes(skin);

  button.disabled = !purchased;
  button.classList.toggle("active", equipped);

  if (!purchased) {
    button.textContent = "Не куплено";
  } else if (equipped) {
    button.textContent = "Снять";
  } else {
    button.textContent = "Экипировать";
  }
});

if (localStorage.getItem("avatar")) {
  avatar.src = localStorage.getItem("avatar");
}
