const capitalizeAllFirstLetters = require('./capitalizeAllFirstLetters');

describe('capitalizeAllFirstLetters()', () => {
  test('general text', () => {
    const text = `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
This book is a treatise on the theory of ethics, very popular during the Renaissance.`;
    expect(capitalizeAllFirstLetters(text))
      .toBe(`Lorem Ipsum Comes From Sections 1.10.32 And 1.10.33 Of "De Finibus Bonorum Et Malorum" (The Extremes Of Good And Evil) By Cicero, Written In 45 Bc.
This Book Is A Treatise On The Theory Of Ethics, Very Popular During The Renaissance.`);
  });
  test('text with abnormal spacing', () => {
    expect(capitalizeAllFirstLetters('   space ')).toBe('   Space ');
    expect(capitalizeAllFirstLetters('\t\ttab')).toBe('\t\tTab');
  });
  test('in square brackets', () => {
    expect(capitalizeAllFirstLetters('[FoO]')).toBe('[Foo]');
  });

  test('keep uppercase', () => {
    expect(capitalizeAllFirstLetters('foo bAR', { keepUppercase: true })).toBe(
      'Foo BAR'
    );
  });
});
