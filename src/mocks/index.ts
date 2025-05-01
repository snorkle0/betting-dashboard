export const enableMocking = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import('./browser');
    return worker.start({ onUnhandledRequest: 'bypass' });
  }

  return Promise.resolve();
};
