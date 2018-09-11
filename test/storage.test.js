import Storage from '@/storage';

describe('Storage', () => {
  const storage = new Storage();
  // Mock hasLocalStorage
  storage.hasLocalStorage = true;

  it('Has default properties', () => {
    expect(storage).toBeInstanceOf(Storage);
    expect(storage.key).toBe('CHOOLES');
  });

  it.skip('Get key value', () => {
    const { value } = storage;
    expect(value).toBeFalsy();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it.skip('Sets key value', () => {
    storage.value = 1;
    expect(storage.value).toEqual(1);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(storage.key, '1');
  });

  it.skip('Remove key value', () => {
    storage.empty();
    expect(storage.value).toBeFalsy();
    expect(localStorage.removeItem).toHaveBeenLastCalledWith(storage.key);
  });
});
