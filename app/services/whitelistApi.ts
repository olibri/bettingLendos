const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export interface WhitelistUser {
  id: number;
  email: string;
  twitter: string | null;
  created_at: string;
}

export interface WhitelistResponse {
  success: boolean;
  data?: WhitelistUser;
  error?: string;
}

export interface CheckResponse {
  success: boolean;
  exists: boolean;
  data: WhitelistUser | null;
}

// Додати юзера до whitelist
export async function joinWhitelist(email: string, twitter?: string): Promise<WhitelistResponse> {
  try {
    const response = await fetch(`${API_URL}/api/whitelist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, twitter }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}

// Перевірити чи email вже в whitelist
export async function checkWhitelist(email: string): Promise<CheckResponse> {
  try {
    const response = await fetch(`${API_URL}/api/whitelist/check/${encodeURIComponent(email)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      exists: false,
      data: null,
    };
  }
}

// Отримати статистику
export async function getWhitelistStats(): Promise<{ success: boolean; total_users?: number; error?: string }> {
  try {
    const response = await fetch(`${API_URL}/api/stats`);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
}
