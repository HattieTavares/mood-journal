function colorClass(n) {
  switch(n) {
    case '1':
      div.classList.add('bg-moodYellow');
      break;
    case '2':
      div.classList.add('bg-moodOrange');
      break;
    case '3':
      div.classList.add('bg-moodPink');
      break;
    case '4':
      div.classList.add('bg-moodPurple');
      break;
    case '5':
      div.classList.add('bg-moodBlue');
        break;
    default:
      div.classList.add('bg-bgColor')
      break;
  }
}