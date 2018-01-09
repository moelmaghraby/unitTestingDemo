import { CurrencyPipePipe } from './currency-pipe.pipe';

fdescribe('CurrencyPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return currency formatted value with $ incase no argument is passed',()=>{
    const pipe = new CurrencyPipePipe();

    const result = pipe.transform(200);

    const expectedResult = '$200.00'
    expect(result).toEqual(expectedResult);
  })
  it('should return currency formatted with Euro sign incase EUR is passed',()=>{
    const pipe = new CurrencyPipePipe();
    const result = pipe.transform(200,'EUR');
    const expectedResult = "€200.00"
    expect(result).toEqual(expectedResult);
  })
});
