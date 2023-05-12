import type ApiAccessToken from "@/types/api/access-token";
import AccessToken from "@/models/access-token";

class AccessTokenFactory {
  public static createFromApiAccessToken(apiAccessToken: ApiAccessToken): AccessToken {
    const expiresAt = new Date()
    expiresAt.setSeconds(expiresAt.getSeconds() + apiAccessToken.expiresIn + 10800)

    const refresh: string | null = apiAccessToken.refresh ? apiAccessToken.refresh : null

    return new AccessToken(apiAccessToken.token, expiresAt, apiAccessToken.type, refresh)
  }

  public static createFromLocalStorageAccessTokenString(localStorageAccessTokenString: string): AccessToken {
    const localStorageAccessToken: any = JSON.parse(localStorageAccessTokenString)

    const token: string = localStorageAccessToken.token
    const expiresAt: Date = new Date(localStorageAccessToken.expiresAt)
    const type: string = localStorageAccessToken.type
    const refresh: string | null = localStorageAccessToken.refresh ? localStorageAccessToken.refresh : null
    expiresAt.setSeconds(expiresAt.getSeconds())

    return new AccessToken(
      token,
      expiresAt,
      type,
      refresh
    )
  }
}

export default AccessTokenFactory