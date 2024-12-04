import { useState } from "react";

export default function useLoading<TReturn>(
    asyncCallback:(...args:Parameters<(...args:any) => any>) => Promise<TReturn>,
    onError?:(err:Error) => void
) {

    const [loading, setLoading] = useState(false);

    const loadCallback = async (...args:Parameters<typeof asyncCallback>): Promise<TReturn | undefined> => {
        setLoading(true);
        try {
            const response = await asyncCallback(...args);
            return response;
        } catch (error) {
            if(onError && error instanceof Error)
                onError(error)
        } finally {
            setLoading(false);
        }
        return;
    }

    return { loading, loadCallback }
}