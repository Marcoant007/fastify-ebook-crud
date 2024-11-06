export class Product {
    id: number;
    name: string;
    price: number;
    description?: string | null;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number,
        name: string,
        price: number,
        description: string | null,
        categoryId: number,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description != null ? description : "Item sem descrição";
        this.categoryId = categoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}