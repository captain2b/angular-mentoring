import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });
  it('check ', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(130)).toBe('2h 10min');
  });
});
