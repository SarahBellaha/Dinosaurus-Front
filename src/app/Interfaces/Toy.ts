import { User } from "./User";

export interface Toy {
    id: number;
    name: string;
    description: string;
    picture: string;
    available: boolean;
    user: User;
}