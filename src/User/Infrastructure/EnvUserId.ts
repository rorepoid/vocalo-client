export class EnvUserId {
  private readonly userId: number

  constructor () {
    const riipahUserId = '12'
    const userId = Number.parseInt(process.env.VOCADB_USER_ID ?? riipahUserId)

    if (isNaN(userId)) {
      throw new Error('Invalid user id')
    }

    this.userId = userId
  }

  get value (): number {
    return this.userId
  }
}
