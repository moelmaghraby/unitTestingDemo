import { HoverDirectiveDirective } from './hover-directive.directive';

fdescribe('HoverDirectiveDirective', () => {
  let directive :HoverDirectiveDirective
  beforeEach(()=>{
    directive = new HoverDirectiveDirective();
  })
  it('should create an instance', () => {
    const directive = new HoverDirectiveDirective();
    expect(directive).toBeTruthy();
  });

  it('should set the hovering flag to true',()=>{
    directive.onMouseOver();
    expect(directive.ishovering).toBeTruthy();
  })
  it('should set the hovering flag to false',()=>{
    directive.onMouseOver();
    expect(directive.ishovering).toBeTruthy();
    directive.onMouseOut();
    expect(directive.ishovering).toBeFalsy();
  })
});
