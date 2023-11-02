function randomNum(min: number, max: number) {
    min = min || 0;
    max = max || 10;
    return Math.floor(Math.random() * (max - min) + min);
  }

export default randomNum;
