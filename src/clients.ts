import { Base64 } from 'js-base64';

/**
 * An application making protected resource requests on behalf of the
 * resource owner and with its authorization.  The term "client" does
 * not imply any particular implementation characteristics (e.g.,
 * whether the application executes on a server, a desktop, or other
 * devices).
 * @see https://tools.ietf.org/html/rfc6749#section-2.3.1
 */
export interface Client {

    /**
     * The client identifier issued to the client during
     * the registration process.
     */
    id: string,

    /**
     * The client secret. The client MAY omit the
     * parameter if the client secret is an empty string.
     */
    secret: string,

    /**
     * Authorization string for HTTP Basic authentication scheme
     * for authenticating clients that were issued a client password.
     */
    authorization(): string,
}

export class Basic implements Client {

    /**
     * The client identifier issued to the client during
     * the registration process.
     */
    id: string;

    /**
     * The client secret. The client MAY omit the
     * parameter if the client secret is an empty string.
     */
    secret: string;

    /**
     * Ctor.
     * @param id The client identifier
     * @param secret The client secret
     */
    constructor(id: string, secret: string) {
        this.id = id;
        this.secret = secret;
    }

    /**
     * Authorization string for HTTP Basic authentication scheme
     * for authenticating clients that were issued a client password.
     */
    authorization(): string {
        return `Basic ${Base64.encode(`${this.id}:${this.secret}`)}`;
    }
}
