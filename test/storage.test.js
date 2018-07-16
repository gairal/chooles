import Storage from '@/Storage';

describe('Storage', () => {
  const storage = new Storage();
  // Mock hasLocalStorage
  storage.hasLocalStorage = true;

  it('Has default properties', () => {
    expect(storage).toBeInstanceOf(Storage);
    expect(storage.key).toBe('CHOOLES');
  });

  it('Get key value', () => {
    const { value } = storage;
    expect(value).toBeFalsy();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Sets key value', () => {
    storage.value = {};
    expect(storage.value).toEqual({});
    expect(localStorage.setItem).toHaveBeenLastCalledWith(storage.key, {});
  });

  it('Remove key value', () => {
    storage.empty();
    expect(storage.value).toBeFalsy();
    expect(localStorage.removeItem).toHaveBeenLastCalledWith(storage.key);
  });
});
