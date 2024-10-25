export interface User {
  id: string;
  username: string;
}

export interface TelegramContextType {
  user: User | null;
}
export interface Window {
    Telegram?: {
      WebApp: {
        // добавьте методы и свойства, которые вы собираетесь использовать
        init: () => void;
        // и т.д.
      };
    };
  }