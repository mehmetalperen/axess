export class HttpClient {
    private baseUrl: string;
    private defaultConfig: any;
    private handleResponse: (...args: any) => any;

    constructor(
        options: {
            baseUrl?: string;
            defaultConfig?: any;
            handleResponse?: (...args: any) => any;
        } = {}
    ) {
        this.baseUrl = options.baseUrl || "";
        this.defaultConfig = options.defaultConfig || {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        this.handleResponse =
            options.handleResponse ||
            async function (response) {
                const data = await response.json();
                if (response.ok) {
                    return data;
                } else {
                    console.error(data);
                    return Promise.reject(data);
                }
            };
    }

    get(path: string, configOptions: any = {}): Promise<any> {
        return fetch(this.baseUrl + path, {
            ...this.defaultConfig,
            method: "GET",
            ...configOptions,
        }).then(this.handleResponse);
    }

    post(path: string, body: object, configOptions: any = {}): Promise<any> {
        return fetch(this.baseUrl + path, {
            ...this.defaultConfig,
            method: "POST",
            body: JSON.stringify(body),
            ...configOptions,
        }).then(this.handleResponse);
    }

    put(path: string, body: object, configOptions: any = {}): Promise<any> {
        return fetch(this.baseUrl + path, {
            ...this.defaultConfig,
            method: "PUT",
            body: JSON.stringify(body),
            ...configOptions,
        }).then(this.handleResponse);
    }

    patch(path: string, body: object, configOptions: any = {}): Promise<any> {
        return fetch(this.baseUrl + path, {
            ...this.defaultConfig,
            method: "PATCH",
            body: JSON.stringify(body),
            ...configOptions,
        }).then(this.handleResponse);
    }

    delete(path: string, configOptions: any = {}): Promise<any> {
        return fetch(this.baseUrl + path, {
            ...this.defaultConfig,
            method: "DELETE",
            ...configOptions,
        }).then(this.handleResponse);
    }
}

export const firebaseClient = new HttpClient({
    baseUrl: "https://axess-5b30b.firebaseio.com/",
});
