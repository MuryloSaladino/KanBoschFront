import { useState } from "react";

export default function useLoading<TReturn>(asyncCallback:(...args:any[]) => Promise<TReturn>) {

    const [loading, setLoading] = useState(false);

    const loadCallback = async () => {
        setLoading(true);
        const response = await asyncCallback();
        setLoading(false);
        return response;
    }

    return { loading, loadCallback }
}