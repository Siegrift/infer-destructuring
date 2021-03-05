import { destructure } from '../src';
import { expectTypeOf } from 'expect-type';

describe('destructuring', () => {
  it('can parse url', () => {
    const testURL = 'https://google.com/pizza/pie';
    const res = destructure`https://${'host'}/${'path'}`(testURL);
    expect(res).toEqual({ host: 'google.com', path: 'pizza/pie' });
  });

  it('matches not eagerly', () => {
    const res = destructure`aa${'first'}aa${'second'}`('aaaaaaaaaaaaa');
    expect(res).toEqual({ first: '', second: 'aaaaaaaaa' });
  });

  it('throws on invalid pattern', () => {
    expect(() => destructure`abc${'x'}`('xyz')).toThrowError(
      'Invalid target for given pattern match'
    );
  });

  it('is typed', () => {
    const res = destructure`a${'x'}bb${'y'}ccc${'z'}`('aAAAbbBBBcccDDD');
    expectTypeOf(res).toEqualTypeOf<{ x: string; y: string; z: string }>();
  });
});
