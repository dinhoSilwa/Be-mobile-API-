import bcrypt from 'bcryptjs'

export class Encryption {
  static async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
  }

  static async compare(password: string, hashedPassword: string) {
    const isMatch = await bcrypt.compare(password, hashedPassword)
    return isMatch
  }
}
