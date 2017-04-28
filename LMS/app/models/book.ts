export interface IBook {
    name: string;
    issueDate: Date;
    isAvailable: Boolean;
    memberID: number;
}

export class Book implements IBook {
    name: string;
    issueDate: Date;
    isAvailable: Boolean;
    memberID: number;
}