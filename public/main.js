switch(models.scaleNumber) {
    case '1':
      div.classList.add('moodYellow');
      break;
    case '2':
      div.classList.add('moodOrange');
      break;
    case '3':
      div.classList.add('moodPink');
      break;
    case '4':
      div.classList.add('moodPurple');
      break;
    case '5':
      div.classList.add('moodBlue');
        break;
    default:
      div.classList.add('bgColor')
      break;
  }