function scuberGreetingForFeet(ride){
  // Write your code here!
  let message;
  if (ride > 2500) {
    message = "No can do.";
  }
  else if (ride > 2000) {
    message = 'I will gladly take your thirty bucks.';
  }
  else if (ride <=400) {
    message = "This one is on me!";
  }

  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  const message = city === 'NYC' ? ('Ok, sounds good.') : ('No go.');
  return message;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip){
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }
  return message;
}