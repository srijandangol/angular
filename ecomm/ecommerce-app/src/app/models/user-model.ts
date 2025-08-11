export interface User {
  userName: string;
  password: string;
  email?: string;
  fullName?: string;
  role?: string;
}

export interface LoginCredentials {
  userName: string;
  password: string;
}
