export const request = async (url: string, method: string, body: any, contentType?: string) => {
    return  fetch(`${import.meta.env.VITE_SERVER_URL}${url}`, {
        method,
        headers: {
            "Content-Type": contentType ? contentType : 'application/json',

        }, 
        body: method === "GET" ? null : JSON.stringify(body)
    })
}