export interface IProduct {
    ID: number;
    Name: string;
    Quantity: number;
    Price: number;
    Img: string;
}

export interface ICategory {
    ID: number;
    Name: string;
}

export interface IPost {
    usreId: number;
    id: number;
    title: string;
    body: string;
}

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    }
};
export enum DiscountOffers {
    "No Discount",
    "10%",
    "15%"
}