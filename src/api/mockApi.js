// src/api/mockApi.js

export const fetchUserInfo = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          name: "Charlene Reed",
          email: "charlenereed@gmail.com",
          profileImage: "https://i.pravatar.cc/100?img=68",
        });
      }, 500)
    );
  
  export const fetchCards = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            id: 1,          
            name: "Eddy Cusuma",
            expiry: "12/22",
            number: "3778 **** **** 1234",
            balance: "$5,756",
            dark: true,
          },
          {
            id: 2,           
            name: "Eddy Cusuma",
            expiry: "12/22",
            number: "3778 **** **** 1234",
            balance: "$5,756",
            dark: false,
          },
          {
            id: 3,            
            name: "charlie Cusuma",
            expiry: "12/22",
            number: "3778 **** **** 1234",
            balance: "$5,756",
            dark: true,
          },
          {
            id: 4,            
            name: "charlie Cusuma",
            expiry: "12/22",
            number: "3778 **** **** 1234",
            balance: "$5,756",
            dark: false,
          },
          {
            id: 5,            
            name: "charlie Cusuma",
            expiry: "12/22",
            number: "3778 **** **** 1234",
            balance: "$5,756",
            dark: true,
          },
          {
            id: 6,            
            name: "charlie Cusuma",
            expiry: "12/22",
            number: "3778 **** **** 1234",
            balance: "$5,756",
            dark: false,
          },
        ]);
      }, 500)
    );

    export const fetchUsers = () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve([
                { name: "Livia Bator", role: "CEO", img: "https://i.pravatar.cc/150?img=32" },
                { name: "Randy Press", role: "Director", img: "https://i.pravatar.cc/150?img=12" },
                { name: "Workman", role: "Designer", img: "https://i.pravatar.cc/150?img=5" },
                { name: "Workwoman", role: "Designer", img: "https://i.pravatar.cc/150?img=5" },
                { name: "Livia Bator", role: "CEO", img: "https://i.pravatar.cc/150?img=32" },
                { name: "Randy Press", role: "Director", img: "https://i.pravatar.cc/150?img=12" },
                { name: "Workman", role: "Designer", img: "https://i.pravatar.cc/150?img=5" },
           
            ]);
          }, 500)
        );
  
  export const fetchTransactions = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            name: "Deposit from my Card",
            date: "28 January 2021",
            amount: "-$850",
            icon: "card",
            color: "red",
          },
          {
            name: "Deposit Paypal",
            date: "25 January 2021",
            amount: "+$2,500",
            icon: "paypal",
            color: "green",
          },
          {
            name: "Jemi Wilson",
            date: "21 January 2021",
            amount: "+$5,400",
            icon: "user",
            color: "green",
          },
          {
            name: "Jemi Wilson",
            date: "21 January 2021",
            amount: "+$5,400",
            icon: "user",
            color: "green",
          },
          {
            name: "Jemi Wilson",
            date: "21 January 2021",
            amount: "+$5,400",
            icon: "user",
            color: "green",
          },
        ]);
      }, 500)
    );
  
  export const fetchChartData = () =>
    new Promise((resolve) =>
      setTimeout(() => {
        resolve({
          weekly: {
            deposit: [200, 300, 250, 400, 300, 200, 350],
            withdraw: [100, 150, 200, 300, 250, 180, 270],
          },
          expense: {
            labels: ["Entertainment", "Bills", "Investment", "Others"],
            data: [30, 15, 20, 35],
          },
          balance: [200, 400, 300, 700, 350, 500, 650],
        });
      }, 500)
    );
  