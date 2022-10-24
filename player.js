class Player {
  name;

  sex;

  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
    if (this.sex !== 'male' && this.sex !== 'female') {
      this.sex = 'female';
    }
  }

  getSex() {
    return this.sex;
  }
}

module.exports = Player;
