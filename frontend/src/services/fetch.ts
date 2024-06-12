interface FetchDataResponse {
    success: boolean;
    status?: number;
    message?: string;
    data?: any;
}

async function fetchData(url: string, method: string, body: any = null): Promise<FetchDataResponse> {
    try {
        const res = await fetch(url, 
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body ? JSON.stringify(body) : null,
                credentials: 'include',
            }
        );

        if (!res.ok) {
            return { success: false, status: res.status, message: res.statusText };
        }

        const data = await res.json();

        return { success: true, status: res.status, data: data };
    } catch (error : any) {
        return { success: false, message: error.message };
    }
}

export { fetchData };