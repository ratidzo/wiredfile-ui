import useSWR from "swr"


const fetcher = (url:any) => fetch(url, {
    method: "GET",
    headers: {
        "Authorization": "Token a92723c4904a3b4a682cfaf800889c88c6e7a24d"
    }
}).then(res => res.json())

export function useStudents() {
    const { data, error, isLoading} = useSWR(`http://127.0.0.1:8000/students`,
    fetcher )

    return {
        students: data,
        isLoading,
        isError: error
    }
}