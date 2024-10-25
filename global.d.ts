// global.d.ts
declare global {
  interface Window {
    Telegram: {
      WebApp: {
        onEvent: (event: string, callback: (data) => void) => void;
        initData: () => void;
      };
    };
  }
}

// Убедитесь, что файл является модулем
export {};
