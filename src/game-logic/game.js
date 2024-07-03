
export function shuffle(arr) {
    let array = [...arr];
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Check if the id clicked is unique
function checkRepeats( id, seenIdList ) {
    if (id in seenIdList) {
        return false
    } else {
        return true;
    }
}