const ipv4 = require('./ipv4');

describe('ipv4()', () => {
  test('with starting/trailing spaces', () => {
    expect(ipv4('192.168.2.1 ')).toBe(true);
    expect(ipv4('192.168.2.1 \t')).toBe(true);
    expect(ipv4(' 192.168.2.1 ')).toBe(true);
    expect(ipv4(' 192.168.2.1')).toBe(true);
  });
  test('format', () => {
    expect(ipv4('')).toBe(false);
    expect(ipv4('0')).toBe(false);
    expect(ipv4('1.0')).toBe(false);
    expect(ipv4('1.1.0')).toBe(false);
    expect(ipv4('.1.1.0')).toBe(false);
    expect(ipv4('1.1.1.')).toBe(false);
    expect(ipv4('1.1.1.0')).toBe(true);
    expect(ipv4('0.1.1.1')).toBe(true);
    expect(ipv4('0.1.1.0')).toBe(true);
    expect(ipv4('1.1.1.1')).toBe(true);
    expect(ipv4('11.1.1.1')).toBe(true);
    expect(ipv4('11.11.1.1')).toBe(true);
    expect(ipv4('11.11.11.1')).toBe(true);
    expect(ipv4('11.11.11.11')).toBe(true);
    expect(ipv4('111.11.11.11')).toBe(true);
    expect(ipv4('111.111.11.11')).toBe(true);
    expect(ipv4('111.111.111.11')).toBe(true);
    expect(ipv4('111.111.111.111')).toBe(true);
    expect(ipv4('1111.111.111.111')).toBe(false);
    expect(ipv4('111.1111.111.111')).toBe(false);
    expect(ipv4('111.111.1111.111')).toBe(false);
    expect(ipv4('111.111.111.1111')).toBe(false);
  });
  test('octets', () => {
    expect(ipv4('12.34.56.78')).toBe(true);
    expect(ipv4('123.34.56.78')).toBe(true);
    expect(ipv4('312.34.56.78')).toBe(false);
    expect(ipv4('12.134.56.78')).toBe(true);
    expect(ipv4('12.334.56.78')).toBe(false);
    expect(ipv4('12.34.156.78')).toBe(true);
    expect(ipv4('12.34.356.78')).toBe(false);
    expect(ipv4('12.34.56.178')).toBe(true);
    expect(ipv4('12.34.56.378')).toBe(false);
    expect(ipv4('12.0.0.255')).toBe(true);
    expect(ipv4('255.0.0.255')).toBe(true);
    expect(ipv4('255.0.0.256')).toBe(false);
  });
});
