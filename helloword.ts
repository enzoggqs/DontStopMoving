type User = {
    name: string;
    age: string;
    adress: {
        city: string;
        uf: string;
    }
}

function showUserInfo(user: User) {
    return `Welcome, ${user.name} - ${user.age}. Cidade: ${user.adress.city}`;
}

showUserInfo({


})