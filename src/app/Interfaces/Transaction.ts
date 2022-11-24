import { Toy } from "./Toy";
import { User } from "./User";

export interface Transaction {
    id: number;
    toyOwnerId: number;
    tradedToy: Toy;
    toyTaker: User;
}