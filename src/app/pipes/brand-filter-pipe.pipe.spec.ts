import { BrandFilterPipe } from './brand-filter-pipe.pipe';

describe('BrandPipe', () => {
  it('create an instance', () => {
    const pipe = new BrandFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
