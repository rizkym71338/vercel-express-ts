import { Prisma } from '@prisma/client'

import { prisma } from '../libs'

export class UserService {
  static async findMany() {
    return await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })
  }

  static async findById(id: string) {
    return await prisma.user.findFirst({ where: { id } })
  }

  static async findByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } })
  }

  static async create(data: Prisma.UserCreateInput) {
    return await prisma.user.create({ data })
  }

  static async update(id: string, data: any) {
    return await prisma.user.update({ where: { id }, data })
  }
}
