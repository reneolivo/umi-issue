import useCustomHook from './useCustomHook';

describe('Custom Hooks', () => {
  let greeting;

  beforeEach(() => {
    greeting = useCustomHook();
  });

  it('sets a default greeting', () => {
    expect(greeting).toBe('Hello World');
  });
});
