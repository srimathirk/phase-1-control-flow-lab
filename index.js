function scuberGreetingForFeet(distanceRide){
  // Write your code here!
  let result ;
  if(distanceRide <= 400){
   result = `This one is on me!`;
  } else if (distanceRide < 2000 && distanceRide > 400){
    result = `That will be twenty bucks.`;
  } else if (distanceRide < 2500 && distanceRide >= 2000) {
    result = 'I will gladly take your thirty bucks.';
  } else {
    result = 'No can do.'
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  let isCity;
  city === 'NYC'? (isCity = "Ok, sounds good."):(isCity = "No go.");
  return isCity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let state;
  switch(tip){
    case 'generous':
      state = "Thank you so much.";
      break;
    case 'not as generous':
      state = "Thank you.";
      break;
    default:
      state = "Bye.";
      break;
  }
  return state;
}