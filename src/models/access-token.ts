class AccessToken {
  private token: string

  private expiresAt: Date

  private type: string

  private refresh: string | null

  constructor(token: string, expiresAt: Date, type: string, refresh: string | null) {
    this.token = token
    this.expiresAt = expiresAt
    this.type = type
    this.refresh = refresh
  }

  public getToken(): string {
    return this.token
  }

  public getExpiresAt(): Date {
    return this.expiresAt
  }

  public getType(): string {
    return this.type
  }

  public getRefresh(): string | null {
    return this.refresh
  }

  public refreshable(): boolean {
    return this.getRefresh() !== null
  }

  public tokenExpired(): boolean {
    return new Date() > this.getExpiresAt()
  }

  public toJson(): object {
    return {
      token: this.getToken(),
      type: this.getType(),
      expiresAt: this.getExpiresAt(),
      refresh: this.getRefresh()
    }
  }

  public toString(): string {
    return JSON.stringify(this.toJson())
  }
}

export default AccessToken