export function create(message) {
  return {
    type: 'TEST',
    message: message
  };
}

export function testAsync(message) {
  return (dispatcher) => {
    setTimeout(() => {
      dispatcher({
        type: 'TEST_ASYNC',
        message: message
      });
    }, 2000);
  };
}
