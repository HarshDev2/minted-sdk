import { Schema } from "./schema";

export class Collection {
    collection: string;
    schema: Schema;
    constructor(collection: string, schema: Schema){
        this.collection = collection;
        this.schema = schema;
    }

    
}