import userData from "../data/user.json";
let mockUser = { ...userData }; 
const API_URL = "http://localhost:5000/user";
 

export const fetchUserProfileInfo = async () => {
    const res = await fetch(API_URL);
    return res.json();
  };
  
  export const updateUserProfileInfo = async (data) => {
    const res = await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  };

  export const updateUserInfo = (updatedUser) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockUser = { ...mockUser, ...updatedUser };
        resolve(mockUser);
      }, 300);
    });
  };

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
                name: "Jessica Pearson",
                expiry: "05/24",
                number: "4485 **** **** 9876",
                balance: "$3,245",
                dark: false,
              },
              {
                id: 3,
                name: "Harvey Specter",
                expiry: "09/25",
                number: "5531 **** **** 4321",
                balance: "$12,903",
                dark: true,
              },
              {
                id: 4,
                name: "Rachel Zane",
                expiry: "03/23",
                number: "6011 **** **** 7645",
                balance: "$8,120",
                dark: false,
              },
              {
                id: 5,
                name: "Louis Litt",
                expiry: "11/24",
                number: "5105 **** **** 3322",
                balance: "$2,870",
                dark: true,
              }
        ]);
      }, 500)
    );

    export const fetchUsers = () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve([
                { name: "Livia Bator", role: "CEO",img: "https://i.pravatar.cc/150?img=32" },
                { name: "Marcus Chen", role: "Product Manager",img: "https://i.pravatar.cc/150?img=12" },
                { name: "Sophie Dubois", role: "UX Designer" ,img: "https://i.pravatar.cc/150?img=5" },
                 { name: "Ethan Walker", role: "Software Engineer" ,img: "https://i.pravatar.cc/150?img=5" },
                { name: "Aisha Rahman", role: "Data Analyst",img: "https://i.pravatar.cc/150?img=32" },
           
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
            color: "#FF4B4A",
          },
          {
            name: "Deposit Paypal",
            date: "25 January 2021",
            amount: "+$2,500",
            icon: "paypal",
            color: "#41D4A8",
          },
          {
            name: "Jemi Wilson",
            date: "21 January 2021",
            amount: "+$5,400",
            icon: "user",
            color: "#41D4A8",
          },
          {
            name: "Deposit Paypal",
            date: "18 January 2021",
            amount: "-$15",
            icon: "card",
            color: "#41D4A8",
          },
          {
            name: "Deposit from my Card",
            date: "15 January 2021",
            amount: "+$1,200",
            icon: "paypal",
            color: "#FF4B4A",
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
  