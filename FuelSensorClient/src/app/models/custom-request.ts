export class CustomRequest {
    content?: string;
    clientId : number;
    uname? : string;
    role? : string;

    constructor(obj: any, clientId: number, userName: string, role: string) {
        this.content = this.buildContent(obj);
        this.uname = userName;
        this.clientId = clientId;
        this.role = role;
    }

    buildContent(obj: any): string {
        if(obj instanceof Object ){
            return JSON.stringify(obj);
        }
        return obj;
    }
}
