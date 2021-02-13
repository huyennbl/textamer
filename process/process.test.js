const process = require('./process');

describe('capitalizeWords', () => {
  const { capitalizeWords } = process;

  test('at start', () => {
    expect(capitalizeWords('CAP lorem ipsum', 'cap')).toBe('Cap lorem ipsum');
    expect(capitalizeWords('cap lorem ipsum', 'cap')).toBe('Cap lorem ipsum');
    expect(capitalizeWords('Cap lorem ipsum', 'cap')).toBe('Cap lorem ipsum');
    expect(capitalizeWords('cAp lorem ipsum', 'cap')).toBe('Cap lorem ipsum');
    expect(capitalizeWords('caP lorem ipsum', 'cap')).toBe('Cap lorem ipsum');
  });
  test('at end', () => {
    expect(capitalizeWords('lorem ipsum cap', 'cap')).toBe('lorem ipsum Cap');
    expect(capitalizeWords('lorem ipsum Cap', 'cap')).toBe('lorem ipsum Cap');
    expect(capitalizeWords('lorem ipsum cAp', 'cap')).toBe('lorem ipsum Cap');
    expect(capitalizeWords('lorem ipsum caP', 'cap')).toBe('lorem ipsum Cap');
    expect(capitalizeWords('lorem ipsum CAP', 'cap')).toBe('lorem ipsum Cap');
  });
  describe('next to punc', () => {
    test('comma', () => {
      expect(capitalizeWords('lorem ipsum cap,', 'cap')).toBe(
        'lorem ipsum Cap,'
      );
    });
    test('dot', () => {
      expect(capitalizeWords('lorem ipsum cap.', 'cap')).toBe(
        'lorem ipsum Cap.'
      );
    });
    test('questionMark', () => {
      expect(capitalizeWords('lorem ipsum cap?', 'cap')).toBe(
        'lorem ipsum Cap?'
      );
    });
    test('exclamationMark', () => {
      expect(capitalizeWords('lorem ipsum cap!', 'cap')).toBe(
        'lorem ipsum Cap!'
      );
    });
    test('semicolon', () => {
      expect(capitalizeWords('lorem ipsum cap;', 'cap')).toBe(
        'lorem ipsum Cap;'
      );
    });
    test('colon', () => {
      expect(capitalizeWords('lorem ipsum cap:', 'cap')).toBe(
        'lorem ipsum Cap:'
      );
    });
    test('ellipsis', () => {
      expect(capitalizeWords('lorem ipsum cap...', 'cap')).toBe(
        'lorem ipsum Cap...'
      );
    });
  });
  test('next to newline', () => {
    expect(
      capitalizeWords(
        `lorem ipsum cap
`,
        'cap'
      )
    ).toBe(`lorem ipsum Cap
`);
  });
});
