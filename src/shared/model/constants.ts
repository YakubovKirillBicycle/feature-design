export const APP_NAVIGATOR = {
    HOME: '/',
    LOGIN: '/login',
    ADMIN: {
        HOME: '/admin',
        USERS: '/admin/users',
        USER_BY_ID: '/admin/users/:id'
    },
    ANY_PAGE: '*',
}

export const ERROR = {
    '404': 'Page not found',
    '500': 'Server error',
}