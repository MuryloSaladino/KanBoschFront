export type TUserDetails = {
    birthdate: string;
    firstName: string;
    lastName: string;
    picture: string | null;
}

export type TUser = {
    id: string;
    email: string;
    details: TUserDetails;
}