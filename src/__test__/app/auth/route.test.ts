/**
 * @jest-environment node
 */
import { NextRequest } from "next/server";

import { GET } from "@/app/api/auth/callback/route";

const mockExchangeCodeForSession = jest.fn();

jest.mock("@/shared/lib/supabase", () => ({
  createServerSupabaseClient: jest.fn(() =>
    Promise.resolve({
      auth: { exchangeCodeForSession: mockExchangeCodeForSession },
    })
  ),
}));

describe("GET /api/auth/callback", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("code가 있으면 exchangeCodeForSession을 호출하고 /session으로 리다이렉트한다", async () => {
    const request = new NextRequest("https://example.com/api/auth/callback?code=test-code");

    const response = await GET(request);

    expect(mockExchangeCodeForSession).toHaveBeenCalledWith("test-code");
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://example.com/session");
  });

  it("code가 없으면 exchangeCodeForSession을 호출하지 않고 /session으로 리다이렉트한다", async () => {
    const request = new NextRequest("https://example.com/api/auth/callback");

    const response = await GET(request);

    expect(mockExchangeCodeForSession).not.toHaveBeenCalled();
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://example.com/session");
  });
});
