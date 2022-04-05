let birthday_date = new Date(2022,5,11,00,00).getTime()
let test = new Date();
if (test.getMonth() == 5){
    if (test.getDate() > 9){
        birthday_date = new Date(test.getFullYear(),5,11,00,00).getTime()
    }
    else {
        
    }
}

else if (test.getMonth > 5) {
    birthday_date = new Date(test.getFullYear()+1,5,11,00,00).getTime()
}
else {
    birthday_date = new Date(test.getFullYear(),5,11,00,00).getTime()
}



setInterval(() => {
    let now = new Date().getTime();
    let difference = birthday_date - now;
    let days = Math.floor(difference/(1000*60*60*24));
    let hours = Math.floor((difference/(1000*60*60*24) - days) * 24);
    let minutes = Math.floor((((difference/(1000*60*60*24) - days) * 24)-hours) * 60);
    let seconds = Math.floor((((((difference/(1000*60*60*24) - days) * 24)-hours) * 60)-minutes) * 60)
    let times = {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
    let cards = [...document.querySelectorAll('.card')];
    cards.forEach(card => {
        let type = card.dataset.time;
        let timer_num = card.querySelector('.number');
        if (times[type] < 10) times[type] = '0' + times[type];
        timer_num.textContent = times[type];
    })
},1000)


