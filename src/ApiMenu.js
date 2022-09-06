import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMenu } from "./Redusers/Reduser";

function ApiMenu() {
  // Это Обэкты для создания продуктов и я отрпавил это к редукс оно работант как Api
  const [menuKFC, setMenuKFC] = useState([
    {
      id: 1,
      category: "Баскеты",
      menuName: "Баскет 10 ножек",
      price: 133000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/03/10-%D0%BD%D0%BE%D0%B6%D0%B5%D0%BA-300x300.png",
      amout: 1,
    },
    {
      id: 2,
      category: "Баскеты",
      menuName: "Баскет L (26 крыльев)",
      price: 133000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/28-%D0%BA%D1%80%D1%8B%D0%BB%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 3,
      category: "Баскеты",
      menuName: "Баскет M (18 крыльев)",
      price: 107000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/20-%D0%BA%D1%80%D1%8B%D0%BB%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 4,
      category: "Баскеты",
      menuName: "Баскет S (12 крыльев)",
      price: 76000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/12-%D0%BA%D1%80%D1%8B%D0%BB%D0%B0-300x300.png",
      amout: 1,
     
    },
    {
      id: 5,
      category: "Баскеты",
      menuName: "Баскет-Дует оргин",
      price: 85000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%94%D1%83%D0%B5%D1%82-300x300.png",
      amout: 1,
      
    },
    {
      id: 6,
      category: "Баскеты",
      menuName: "Баскет-Дует острый",
      price: 85000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%94%D1%83%D0%B5%D1%82-300x300.png",
      amout: 1,
      
    },
    {
      id: 7,
      category: "Баскеты",
      menuName: "Микс Бокс",
      price: 26500 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%9C%D0%98%D0%BA%D1%81-%D0%91%D0%BE%D0%BA%D1%81-300x300.png",
      amout: 1,
      
    },
    {
      id: 8,
      category: "Баскеты",
      menuName: "Наггетс Бокс",
      price: 25000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%9D%D0%B0%D1%88%D0%B5%D1%82%D1%81-%D0%91%D0%BE%D0%BA%D1%81-300x300.png",
      amout: 1,
      
    },
    {
      id: 9,
      category: "Баскеты",
      menuName: "Пати Баскет",
      price: 25500,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/03/%D0%9F%D0%B0%D1%82%D0%B8-%D0%91%D0%BE%D0%BA%D1%81-300x300.png",
      amout: 1,
      
    },
    {
      id: 10,
      category: "Баскеты",
      menuName: "Сандерс-Баскет",
      price: 43500 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/03/%D0%A1%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%81-%D0%91%D0%B0%D1%81%D0%BA%D0%B5-300x300.png",
      amout: 1,
     
    },
    {
      id: 11,
      category: "Баскеты",
      menuName: "Френдс Бокс Ассорти",
      price: 199000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%84%D1%80%D0%B5%D0%BD%D0%B4-%D0%B1%D0%BE%D0%BA%D1%81-300x300.png",
      amout: 1,
     
    },
    {
      id: 12,
      category: "Бургеры",
      menuName: "Дабл Шефбургер",
      price: 39000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%94%D0%B0%D0%B1%D0%BB-%D0%A8%D0%B5%D1%84%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-300x300.png",
      amout: 1,
    },
    {
      id: 13,
      category: "Бургеры",
      menuName: "Дабл Шефбургер Острый",
      price: 39000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%94%D0%B0%D0%B1%D0%BB-%D0%A8%D0%B5%D1%84%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-300x300.png",
      amout: 1,
      
    },
    {
      id: 14,
      category: "Бургеры",
      menuName: "Острый Шефбургер",
      price: 26000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%9E%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D0%A8%D0%B5%D1%84%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-300x300.png",
      amout: 1,
      
    },
    {
      id: 15,
      category: "Бургеры",
      menuName: "Чизбургер",
      price: 22500,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%A7%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-300x300.png",
      amout: 1,
    },
    {
      id: 16,
      category: "Бургеры",
      menuName: "Чизбургер Де Люкс",
      price: 26000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%A7%D0%B8%D0%B7%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-%D0%B4%D0%B5-%D0%BB%D1%8E%D0%BA%D1%81-300x300.png",
      amout: 1,
     
    },
    {
      id: 17,
      category: "Бургеры",
      menuName: "Шеф Тауэр",
      price: 32000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%A8%D0%B5%D1%84-%D0%A2%D0%B0%D1%83%D0%B5%D1%80-300x300.png",
      amout: 1,
     
    },
    {
      id: 18,
      category: "Бургеры",
      menuName: "Шеф Тауэр Острый",
      price: 32000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%A8%D0%B5%D1%84-%D0%A2%D0%B0%D1%83%D0%B5%D1%80-300x300.png",
      amout: 1,
    
    },
    {
      id: 19,
      category: "Бургеры",
      menuName: "Шефбургер",
      price: 26000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%9E%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D0%A8%D0%B5%D1%84%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80-300x300.png",
      amout: 1,
      
    },
    {
      id: 20,
      category: "Твистеры",
      menuName: "Боксмастер",
      price: 33500,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%91%D0%BE%D0%BA%D1%81%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80-300x300.png",
      amout: 1,
      
    },
    {
      id: 21,
      category: "Твистеры",
      menuName: "Лонгер",
      price: 17500 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%9B%D0%BE%D0%BD%D0%B3%D0%B5%D1%80-300x300.png",
      amout: 1,
      
    },
    {
      id: 22,
      category: "Твистеры",
      menuName: "Твистер Веджи",
      price: 26000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%A2%D0%B2%D0%B8%D1%81%D1%82%D0%B5%D1%80-%D0%B2%D0%B5%D0%B4%D0%B6%D0%B8-300x300.png",
      amout: 1,
      
    },
    {
      id: 23,
      category: "Твистеры",
      menuName: "Твистер Джуниор",
      price: 17500,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%A2%D0%B2%D0%B8%D1%81%D1%82%D0%B5%D1%80-%D0%94%D0%B6%D1%83%D0%BD%D0%B8%D0%BE%D1%80-300x300.png",
      amout: 1,
      
    },
    {
      id: 24,
      category: "Твистеры",
      menuName: "Твистер Оргинальный",
      price: 26000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%A2%D0%B2%D0%B8%D1%81%D1%82%D0%B5%D1%80-%D0%BE%D1%81%D1%82%D1%80%D1%8B%D0%B9-300x300.png",
      amout: 1,
      
    },
    {
      id: 25,
      category: "Курица",
      menuName: "Наггетсы 6 шт",
      price: 15000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2022/04/nagets6-300x300.png",
      amout: 1,
      
    },
    {
      id: 26,
      category: "Курица",
      menuName: "Наггетсы 8 шт",
      price: 20000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2022/04/nagets88-300x300.png",
      amout: 1,
   
    },
    {
      id: 27,
      category: "Курица",
      menuName: "3 Крыля",
      price: 23000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/3%D0%BA%D1%80%D1%8B%D0%BB%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 28,
      category: "Курица",
      menuName: "1 Ножка",
      price: 15000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/1-%D0%BD%D0%BE%D0%B6%D0%BA%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 29,
      category: "Курица",
      menuName: "2 Ножки",
      price: 55000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/2-%D0%BD%D0%BE%D0%B6%D0%BA%D0%B8-300x300.png",
      amout: 1,
      
    },
    {
      id: 30,
      category: "Курица",
      menuName: "3 Ножки",
      price: 34000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/3%D0%BD%D0%BE%D0%B6%D0%BA%D0%B8-300x300.png",
      amout: 1,
      
    },
    {
      id: 31,
      category: "Курица",
      menuName: "3 Стрипса оригин",
      price: 24000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/3-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D1%81%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 32,
      category: "Курица",
      menuName: "3 Стрипса острые",
      price: 15000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/3-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D1%81%D0%B0-300x300.png",
      amout: 1,
     
    },
    {
      id: 33,
      category: "Курица",
      menuName: "5 Стрипсов острые",
      price: 43000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/6-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D1%81%D0%BE%D0%B2-300x300.png",
      amout: 1,
      
    },
    {
      id: 34,
      category: "Курица",
      menuName: "5 Стрипсов оригин",
      price: 43000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/6-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D1%81%D0%BE%D0%B2-300x300.png",
      amout: 1,
     
    },
    {
      id: 35,
      category: "Курица",
      menuName: "5 Крыльев",
      price: 39000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/6%D0%BA%D1%80%D1%8B%D0%BB%D1%8C%D0%B5%D0%B2-300x300.png",
      amout: 1,
      
    },
    {
      id: 36,
      category: "Курица",
      menuName: "8 Крыльев",
      price: 52000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/9-%D0%BA%D1%80%D1%8B%D0%BB%D1%8C%D0%B5%D0%B2-300x300.png",
      amout: 1,
      
    },
    {
      id: 37,
      category: "Курица",
      menuName: "8 Стрипсов оригин",
      price: 56000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/9-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D1%81%D0%BE%D0%B2-300x300.png",
      amout: 1,
      
    },
    {
      id: 38,
      category: "Курица",
      menuName: "8 Стрипсов острых",
      price: 56000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/9-%D1%81%D1%82%D1%80%D0%B8%D0%BF%D1%81%D0%BE%D0%B2-300x300.png",
      amout: 1,
      
    },
    {
      id: 39,
      category: "Курица",
      menuName: "Байтсы большие",
      price: 41000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B1%D0%B0%D0%B9%D1%82%D1%81%D1%8B-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%B5-300x300.png",
      amout: 1,
      
    },
    {
      id: 40,
      category: "Курица",
      menuName: "Байтсы малые",
      price: 18000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B1%D0%B0%D0%B9%D1%82%D1%81%D1%8B-%D0%BC%D0%B0%D0%BB%D1%8B%D0%B5-300x300.png",
      amout: 1,
      
    },
    {
      id: 41,
      category: "Курица",
      menuName: "Байтсы Средние",
      price: 26000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B1%D0%B0%D0%B9%D1%82%D1%81%D1%8B-%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B5-300x300.png",
      amout: 1,
      
    },
    {
      id: 42,
      category: "Курица",
      menuName: "Наггетсы 18 шт",
      price: 42000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/%D0%9D%D0%90%D0%93%D0%95%D0%A2%D0%A1%D0%AB-300x300.png",
      amout: 1,
      
    },
    {
      id: 43,
      category: "Картофель фри",
      menuName: "Баскет фри",
      price: 26500 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%91%D0%B0%D1%81%D0%BA%D0%B5%D1%82-300x300.png",
      amout: 1,
     
    },
    {
      id: 44,
      category: "Картофель фри",
      menuName: "Булочка",
      price: 7000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B1%D1%83%D0%BB%D0%BE%D1%87%D0%BA%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 45,
      category: "Картофель фри",
      menuName: "Картофель по-деревенски",
      price: 19000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B4%D0%B5%D1%80-%D0%B1%D0%BE%D0%BB-300x300.png",
      amout: 1,
      
    },
    {
      id: 46,
      category: "Картофель фри",
      menuName: "Баскет фри  малый ",
      price: 14000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%BC%D0%B0%D0%BB%D1%8B%D0%B9-300x300.png",
      amout: 1,
   
    },
    {
      id: 47,
      category: "Картофель фри",
      menuName: "Картофель фри стандартный",
      price: 20000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%81%D1%82%D0%B0%D0%BD%D0%B4-300x300.png",
      amout: 1,
      
    },
    {
      id: 48,
      category: "Картофель фри",
      menuName: "Хашбраун",
      price: 8000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%85%D1%8D%D1%88%D0%B1%D1%80%D0%B0%D1%83%D0%BD-300x300.png",
      amout: 1,
    
    },
    {
      id: 49,
      category: "Соусы",
      menuName: "Кетчуп томатный",
      price: 5000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%82%D0%BE%D0%BC%D0%B0%D1%82-300x300.png",
      amout: 1,
      
    },
    {
      id: 50,
      category: "Соусы",
      menuName: "Соус Сырный",
      price: 5000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%81%D1%8B%D1%80%D0%BD%D1%8B%D0%B9-300x300.png",
      amout: 1,
      
    },
    {
      id: 51,
      category: "Соусы",
      menuName: "Соус кисло-сладкий Чили",
      price: 5000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%BA%D0%B8%D1%81%D0%BB%D0%BE-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D1%87%D0%B8%D0%BB%D0%B8-300x300.png",
      amout: 1,
    },
    {
      id: 52,
      category: "Соусы",
      menuName: "Соус Чесночный",
      price: 5000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D0%BA-300x300.png",
      amout: 1,
      
    },
    {
      id: 53,
      category: "Напитки",
      menuName: "Fanta 0.5",
      price: 12000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/12/491556143_w500_h500_fanta-05l-pet-300x300.jpg",
      amout: 1,
      
    },
    {
      id: 54,
      category: "Напитки",
      menuName: "BonAqua не газированная 0.5",
      price: 7000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B2%D0%BE%D0%B4-%D0%BD%D0%B5%D0%B3%D0%B0%D0%B7-300x300.png",
      amout: 1,
      
    },
    {
      id: 55,
      category: "Напитки",
      menuName: "Coca-cola 0.5",
      price: 12000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%BA%D0%BE%D0%BB%D0%B0-300x300.png",
      amout: 1,
      
    },
    {
      id: 56,
      category: "Напитки",
      menuName: "BonAqua газированная 0.5",
      price: 7000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D0%B2%D0%BE%D0%B4-%D0%B3%D0%B0%D0%B7-300x300.png",
      amout: 1,
      
    },
    {
      id: 57,
      category: "Напитки",
      menuName: "Сок апельсиновый 0,2л",
      price: 7000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%81%D0%BE%D0%BA-%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD-300x300.png",
      amout: 1,
    },
    {
      id: 58,
      category: "Напитки",
      menuName: "Сок яблочный 0,2л",
      price: 7000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/04/%D1%81%D0%BE%D0%BA-%D1%8F%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE-300x300.png",
      amout: 1,
      
    },
    {
      id: 59,
      category: "Десерты",
      menuName: "Донат Ореховый",
      price: 17000 ,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/10/product_2122_17736390-300x300.png",
      amout: 1,

    },
    {
      id: 60,
      category: "Десерты",
      menuName: "Пирожок Вишневый",
      price: 15000,
      photo:
        "https://tashkentkfc.me/wp-content/uploads/2021/10/product_2118_1755635174-300x300.png",
      amout: 1,
     
    },
  ]);
  // const [newUser, setNewUser] = useState({});
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  //   dispatch(addUser(newUser));
  //   setNewUser("");
  //   navigate("/");

  useEffect(() => {
    dispatch(addMenu(menuKFC), setMenuKFC(""));
  }, []);
  return null;
}

export default ApiMenu;