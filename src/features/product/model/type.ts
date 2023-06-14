export type Category = 'producto' | 'servicio';
export type Area = 'ceja' | 'pestaña' | 'manicura';

export type ProtoProductI = {
    id?: string;
    name?: string;
    image?: string;
    price?: number;
    category?: Category;
    area?: Area;
    description?: string;
    isAvailable?: boolean;
    clients?: Array<string>;
};

export type ProductI = {
    id?: string;
    name: string;
    image: string;
    price: number;
    category: Category;
    area: Area;
    description: string;
    isAvailable: boolean;
    clients: Array<string>;
};
