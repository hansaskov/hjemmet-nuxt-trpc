import { Prisma } from '@prisma/client'




export interface UserPersonalData {
    email: string
    firstName: string
    middleName?: string | null
    lastName: string
    imageUrl?: string | null
}
