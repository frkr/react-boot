let apiBaseUrl = "";
try {
    if (process.env.NODE_ENV === 'development') {
        apiBaseUrl = "http://localhost:8080";
    }
} catch (e) {
}

export const CONTEXT = apiBaseUrl;
