

const enlishDay = 'g';

let koreanDay;


switch(enlishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;

    default:
        koreanDay = '주말';
        break;
}

console.log(koreanDay);