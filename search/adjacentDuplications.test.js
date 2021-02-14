const adjacentDuplications = require('./adjacentDuplications');

describe('adjacentDuplications()', () => {
  const text = 'the the cat Cat Catherine is a nice cat';
  const text2 = 'the cat catherine is nice';
  test('default', () => {
    const result = adjacentDuplications(text);
    expect(JSON.stringify(result)).toEqual(JSON.stringify(['the the']));
    expect(adjacentDuplications(text2)).toBe(null);
  });
  test('ignoreCase', () => {
    const result = adjacentDuplications(text, { ignoreCase: true });
    expect(JSON.stringify(result)).toEqual(
      JSON.stringify(['the the', 'cat Cat'])
    );
  });
});
