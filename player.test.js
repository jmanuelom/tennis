const Player = require('./player');

test('Crear jugador debe ser instancia de Player', () => {
  const player1 = new Player();
  expect(typeof player1).toBe('object');
  expect(player1).toBeInstanceOf(Object);
  expect(player1).toBeInstanceOf(Player);
});

test('Crear jugador con nombre, se almacena nombre en propiedad name', () => {
  const player1 = new Player('Pepe');
  expect(player1.name).toBe('Pepe');
});

test('Añadir el atributo del sexo, que se almacena en propiedad sex', () => {
  const player1 = new Player('Pepe', 'male');
  const player2 = new Player('Pepe', 'female');
  const player3 = new Player('Pepe', 'hola');
  const player4 = new Player('Pepe');
  expect(player1.sex).toBe('male');
  expect(player2.sex).toBe('female');
  expect(player3.sex).toBe('female');
  expect(player4.sex).toBe('female');
});
