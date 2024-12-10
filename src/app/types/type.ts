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

export type TTelegramState = {
  userTelegram: TTelegramData | null;
};
export type TTelegramData = {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
};

export type TRegisterRequest = {
  full_name: string;
  phone: string;
  email: string;
  user_type: "APPLICANT" | "OTHER_TYPE"; // Замените "OTHER_TYPE" на другие возможные значения
  password: string;
  birth_date: string; // Формат даты (ISO 8601)
  region: string;
  experience: boolean;
  marketplaces: string[]; // Список строк
  inn: string;
};

// type TOwnerProfile = {
//   inn: string; // ИНН
//   region: string; // Регион
//   id: number; // ID профиля
//   user_id: number; // ID пользователя
// };

// export type TRegisterResponse = {
//   id?: number; // ID пользователя
//   full_name: string; // Полное имя
//   phone: string; // Телефон
//   email: string; // Email
//   user_type: "APPLICANT" | "OWNER"; // Тип пользователя
//   created_at?: string; // Дата создания
//   applicant_profile?: TApplicantProfile; // Профиль заявителя (если тип APPLICANT)
//   owner_profile?: TOwnerProfile; // Профиль владельца (если тип OWNER)
// };

export type TRegistrationState = {
  activeTab: "APPLICANT" | "OWNER";
  experience: boolean;
  marketplaces: string[];
  userData: TUserData | null;
  applicantData: TApplicantProfile;
};

export type TUserData = {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  user_type: string;
  created_at: string;
  applicant_profile: {
    birth_date?: string;
    region?: string;
    experience?: boolean;
    marketplaces?: string[];
    id?: number;
    user_id?: number;
  };
  owner_profile: null;
};

export type TApplicantProfile = {
  birth_date: string;
  experience: boolean;
  id: number;
  marketplaces: string[];
  region: string;
  user_id: number;
};
