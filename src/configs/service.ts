import axios, {
    type AxiosInstance,
    type AxiosRequestConfig,
    type Method,
} from 'axios';

import { AUTH_TOKEN } from '@constants/index';

// axios
axios.defaults.headers.post['Content-Type'] = 'application/json';

export interface ServiceOptions {
    namespace?: string;
}

export default class Service {
    private axios: AxiosInstance;

    private headers: any;

    private baseURL: string = '';

    private defaultOptions: ServiceOptions = {
        namespace: undefined,
    };

    private token: string | null;

    /**
     * Creates an instance of Service.
     *
     * @memberOf Service
     */
    constructor(options?: ServiceOptions) {
        this.defaultOptions = { ...this.defaultOptions, ...options };

        // Accept */*
        axios.defaults.headers.common.Accept = '*/*';

        // this.baseURL = process.env.NEXT_PUBLIC_BASE_API_URL || '';
        this.token = localStorage.getItem(AUTH_TOKEN);
        const headers = {
            Authorization: this.token ? `Bearer ${this.token}` : '',
        };

        this.axios = axios.create({
            baseURL: this.baseURL,
            responseType: 'json',
            headers,
        });
        this.axios.interceptors.response.use(undefined, (err) => {
            if (err.response.status === 401) {
                localStorage.clear();
                window.location.href = '/login';
            }
            return Promise.reject(err);
        });
    }

    private toQueryString(params: { [key: string]: any }) {
        const keys = Object.keys(params);
        const segments = keys.map(
            (k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`
        );
        return segments.join('&');
    }

    /**
     * Call a service action via REST API
     *
     * @param {any} action  name of action
     * @param {any} params  parameters to request
     * @returns  {Promise}
     *
     * @memberOf Service
     */
    public async rest(
        action: string,
        params?: any,
        options = {
            headers: {},
            method: 'post',
        }
    ) {
        const { headers } = options;
        try {
            const opts: AxiosRequestConfig = {
                url: action,
                method: options.method as Method,
                data: params,
                headers: {
                    ...(this.headers || {}),
                    ...headers,
                },
            };
            this.axios.defaults.baseURL = this.baseURL;
            const response = await this.axios.request(opts);
            return response.data;
        } catch (err: any) {
            throw err.response;
        }
    }

    public postFormData(action: string, data: any) {
        const headers = {
            'Content-Type': 'multipart/form-data',
        };
        return this.rest(action, data, {
            method: 'post',
            headers,
        });
    }

    public get(
        action: string,
        options: { queryStringParameters?: any; headers?: any } = {}
    ) {
        const { headers, queryStringParameters } = options;
        const query = !!queryStringParameters ? this.toQueryString(queryStringParameters) : "";
        const path = query ? `${action}?${query}` : action;
        return this.rest(
            path,
            {},
            {
                method: 'get',
                headers,
            }
        );
    }

    public post(action: string, options: any = {}) {
        const { headers = {}, params = {} } = options;
        return this.rest(action, params, {
            method: 'post',
            headers,
        });
    }

    public put(action: string, options: any = {}) {
        const { headers = {}, params = {} } = options;
        return this.rest(action, params, {
            method: 'put',
            headers,
        });
    }

    public delete(action: string, options: any = {}) {
        const { headers, queryStringParameters } = options;
        const query = this.toQueryString(queryStringParameters);
        const path = query ? `${action}?${query}` : action;
        return this.rest(
            path,
            {},
            {
                method: 'delete',
                headers,
            }
        );
    }

    public patch(action: string, options: any = {}) {
        const { headers = {}, params = {} } = options;
        return this.rest(action, params, {
            method: 'patch',
            headers,
        });
    }
}
