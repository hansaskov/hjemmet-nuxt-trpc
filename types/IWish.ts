import { Wish } from '.prisma/client';


export interface WishPersonalData {
    name: string;
    description?: string | null;
    price?: number | null;
    link?: string | null;
    imageUrl?: string | null;
}