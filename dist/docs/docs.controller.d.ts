export declare class DocsController {
    private getOpenApiSpec;
    getOpenApiJson(): {
        openapi: string;
        info: {
            title: string;
            description: string;
            version: string;
            contact: {
                name: string;
                email: string;
            };
        };
        servers: {
            url: string;
            description: string;
        }[];
        tags: {
            name: string;
            description: string;
        }[];
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: string;
                    scheme: string;
                    bearerFormat: string;
                    description: string;
                };
            };
        };
        paths: {
            '/api/events': {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: any[];
                    responses: {
                        '200': {
                            description: string;
                            content: {
                                'application/json': {
                                    schema: {
                                        type: string;
                                        properties: {
                                            success: {
                                                type: string;
                                                example: boolean;
                                            };
                                            count: {
                                                type: string;
                                                example: number;
                                            };
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        _id: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        shortTitle: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        fullDate: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        month: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        day: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        status: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        category: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        location: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        time: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        description: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        shortTitle: {
                                            type: string;
                                            example: string;
                                        };
                                        fullDate: {
                                            type: string;
                                            example: string;
                                        };
                                        category: {
                                            type: string;
                                            example: string;
                                        };
                                        status: {
                                            type: string;
                                            example: string;
                                        };
                                        location: {
                                            type: string;
                                            example: string;
                                        };
                                        time: {
                                            type: string;
                                            example: string;
                                        };
                                        description: {
                                            type: string;
                                            example: string;
                                        };
                                        image: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                            'application/json': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        shortTitle: {
                                            type: string;
                                            example: string;
                                        };
                                        fullDate: {
                                            type: string;
                                            example: string;
                                        };
                                        category: {
                                            type: string;
                                            example: string;
                                        };
                                        status: {
                                            type: string;
                                            example: string;
                                        };
                                        location: {
                                            type: string;
                                            example: string;
                                        };
                                        time: {
                                            type: string;
                                            example: string;
                                        };
                                        description: {
                                            type: string;
                                            example: string;
                                        };
                                        image: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '201': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/events/upload': {
                post: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        file: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/events/{id}': {
                get: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                        description: string;
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '404': {
                            description: string;
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        shortTitle: {
                                            type: string;
                                            example: string;
                                        };
                                        fullDate: {
                                            type: string;
                                            example: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        image: {
                                            type: string;
                                            format: string;
                                        };
                                    };
                                };
                            };
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        title: {
                                            type: string;
                                        };
                                        shortTitle: {
                                            type: string;
                                        };
                                        fullDate: {
                                            type: string;
                                        };
                                        description: {
                                            type: string;
                                        };
                                        image: {
                                            type: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '404': {
                            description: string;
                        };
                    };
                };
                delete: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '404': {
                            description: string;
                        };
                    };
                };
            };
            '/api/competitions': {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: any[];
                    responses: {
                        '200': {
                            description: string;
                            content: {
                                'application/json': {
                                    schema: {
                                        type: string;
                                        properties: {
                                            success: {
                                                type: string;
                                                example: boolean;
                                            };
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        _id: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        icon: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        icon: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                            'application/json': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        icon: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '201': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/competitions/upload': {
                post: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        file: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '201': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/competitions/{id}': {
                get: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '404': {
                            description: string;
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        icon: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                            'application/json': {
                                schema: {
                                    type: string;
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        icon: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
                delete: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/auth/send-otp': {
                post: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        email: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                    };
                };
            };
            '/api/auth/verify-otp': {
                post: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        email: {
                                            type: string;
                                            example: string;
                                        };
                                        otp: {
                                            type: string;
                                            example: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                    };
                };
            };
            '/api/auth/me': {
                get: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/gallery': {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: any[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                            example: string;
                        };
                        description: string;
                    }[];
                    responses: {
                        '200': {
                            description: string;
                            content: {
                                'application/json': {
                                    schema: {
                                        type: string;
                                        properties: {
                                            success: {
                                                type: string;
                                                example: boolean;
                                            };
                                            count: {
                                                type: string;
                                                example: number;
                                            };
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        _id: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        title: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        category: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        shortDescription: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        image: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        date: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        category: {
                                            type: string;
                                            example: string;
                                            description: string;
                                        };
                                        shortDescription: {
                                            type: string;
                                            example: string;
                                        };
                                        date: {
                                            type: string;
                                            example: string;
                                        };
                                        image: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '201': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/gallery/upload': {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        file: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '400': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/gallery/{id}': {
                get: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '444': {
                            description: string;
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    properties: {
                                        title: {
                                            type: string;
                                            example: string;
                                        };
                                        category: {
                                            type: string;
                                            example: string;
                                        };
                                        shortDescription: {
                                            type: string;
                                            example: string;
                                        };
                                        date: {
                                            type: string;
                                            example: string;
                                        };
                                        image: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
                delete: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/committee': {
                get: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: any[];
                    responses: {
                        '200': {
                            description: string;
                            content: {
                                'application/json': {
                                    schema: {
                                        type: string;
                                        properties: {
                                            success: {
                                                type: string;
                                                example: boolean;
                                            };
                                            count: {
                                                type: string;
                                                example: number;
                                            };
                                            data: {
                                                type: string;
                                                items: {
                                                    type: string;
                                                    properties: {
                                                        _id: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        name: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        role: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        photo: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                        contact: {
                                                            type: string;
                                                            example: string;
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        name: {
                                            type: string;
                                            example: string;
                                        };
                                        position: {
                                            type: string;
                                            example: string;
                                            description: string;
                                        };
                                        role: {
                                            type: string;
                                            example: string;
                                        };
                                        contact: {
                                            type: string;
                                            example: string;
                                        };
                                        photo: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '201': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/committee/upload': {
                post: {
                    tags: string[];
                    summary: string;
                    description: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    required: string[];
                                    properties: {
                                        file: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '400': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/committee/{id}': {
                get: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '444': {
                            description: string;
                        };
                    };
                };
                put: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    requestBody: {
                        required: boolean;
                        content: {
                            'multipart/form-data': {
                                schema: {
                                    type: string;
                                    properties: {
                                        name: {
                                            type: string;
                                            example: string;
                                        };
                                        position: {
                                            type: string;
                                            example: string;
                                        };
                                        role: {
                                            type: string;
                                            example: string;
                                        };
                                        contact: {
                                            type: string;
                                            example: string;
                                        };
                                        photo: {
                                            type: string;
                                            format: string;
                                            description: string;
                                        };
                                    };
                                };
                            };
                        };
                    };
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
                delete: {
                    tags: string[];
                    summary: string;
                    security: {
                        bearerAuth: any[];
                    }[];
                    parameters: {
                        name: string;
                        in: string;
                        required: boolean;
                        schema: {
                            type: string;
                        };
                    }[];
                    responses: {
                        '200': {
                            description: string;
                        };
                        '401': {
                            description: string;
                        };
                    };
                };
            };
            '/api/health': {
                get: {
                    tags: string[];
                    summary: string;
                    security: any[];
                    responses: {
                        '200': {
                            description: string;
                        };
                    };
                };
            };
        };
    };
    getSwaggerUiHtml(): string;
}
