"use strict";

let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");


let appData = {
    budget : money,
    timeData : time,
    expences : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");

alert("Бюджет на один день = " + appData.budget / 30);

appData.expences.a1 = a2;
appData.expences.a3 = a4;