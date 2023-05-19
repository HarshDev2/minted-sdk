export class Minted {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    collection(name: string) {
        return new Collection(name, this.url)
    }
}
class Collection {
    collection: string;
    url: string;
    constructor(name: string, url: string) {
        this.collection = name;
        this.url = url;
    }
    async create(obj: object){
        let response = await fetch(`${this.url}/api/create`, {
            method: 'POST',
            body: JSON.stringify(obj)
        });

        let data = await response.json();

        return new Document(data, this.url);
    }
    async find(obj: object) {
        let response = await fetch(`${this.url}/api/find`, {
            body: JSON.stringify(obj)
        });

        let data = await response.json();

        return data;
    }
}
class Document {
    obj: object;
    url: string;
    constructor(obj: object, url: string){
        this.obj = obj;
        this.url = url;
    }
    async delete(){
        let response = await fetch(`${this.url}/api/delete`, {
            method: "DELETE",
            body: JSON.stringify(this.obj)
        });

        let data = await response.json();

    }
}