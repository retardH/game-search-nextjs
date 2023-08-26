"use client"
import {useEffect, useState} from "react";
import {AxiosRequestConfig, CanceledError} from "axios";
import apiClient from "@/services/api-client";

export default function useRequestApi(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();
        apiClient.get(endPoint, { signal: controller.signal, ...requestConfig })
            .then((response) => {
                setData(response.data.results);
            })
            .catch((error) => {
                if (error instanceof CanceledError) {
                    return;
                }
                setError(error.message);
            })
    }, deps ? [...deps] : [])

    return { data, error };
}