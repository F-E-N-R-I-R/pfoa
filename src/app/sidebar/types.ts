export namespace SideBar {
    export interface File {
        title: string;
        description: string;
    }

    export interface Bla {
        name: string;
        files: File[];
    }

    export enum Access {
        ADMIN = '2'
    }

    export type asa = Access.ADMIN | Access.ADMIN;
}
