export type Role = "landlord" | "tenant" | "agent";

export type Account = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: Role;
  password: string;
};

const ACCOUNT_KEY = "ept-account";
const SESSION_KEY = "ept-session";

export function saveAccount(account: Account) {
  sessionStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(account));
}

export function readAccount(): Account | null {
  return readKey(ACCOUNT_KEY);
}

export function readSession(): Account | null {
  return readKey(SESSION_KEY);
}

export function setSession(account: Account) {
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(account));
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_KEY);
}

function readKey(key: string): Account | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Account;
  } catch {
    return null;
  }
}
