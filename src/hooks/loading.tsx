import { useState } from "react";

export default function useLoading(asyncCallback:() => Promise<void>) {

    const [loading, setLoading] = useState(false);

    const handleCallback = async () => {
        setLoading(true);
        await asyncCallback();
        setLoading(false);
    }

    return { loading, handleCallback }
}