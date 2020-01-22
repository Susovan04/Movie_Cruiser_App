export interface User {
    id?:number;
    username: string;
    password?: string;
    firstName: string;
    lastname: string;
    role?: string;
    accessToken?: string;
}