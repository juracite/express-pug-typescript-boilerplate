import { CorsOptions } from "cors";
import { ContentSecurityPolicyOptions } from "helmet/dist/types/middlewares/content-security-policy";

export const corsOptions: CorsOptions = {
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "X-Api-Key",
    ],
    exposedHeaders: ["X-Api-Key"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    origin: "*",
    preflightContinue: false,
};

export const helmetOptions: Readonly<ContentSecurityPolicyOptions> = {
    directives: {
        defaultSrc: ["'self'"],
        imgSrc: [
            "'self' 'unsafe-inline' data:",
            "cdn.pixabay.com"
        ],
        scriptSrc: [
            "'self' 'unsafe-inline'",
            "code.jquery.com",
            "stackpath.bootstrapcdn.com",
            "cdnjs.cloudflare.com",
        ],
        styleSrc: [
            "'self' 'unsafe-inline'",
            "stackpath.bootstrapcdn.com",
            "fonts.googleapis.com",
            "*.typekit.net",
            "*.jsdelivr.net",
        ],
        fontSrc: [
            "'self' data:",
            "stackpath.bootstrapcdn.com",
            "fonts.gstatic.com",
            "fonts.googleapis.com",
            "*.typekit.net",
            "*.jsdelivr.net",
        ],
    },
};
