import { Button } from "@mui/material";
import { useState } from "react";

const HomePage = () => {

    const [started, setStarted] = useState<boolean>(false);

    const onStart = async () => {

        await push('start', { })
        
        setStarted(true);
    }

    const onStop = async () => {

        await push('stop', { })

        setStarted(false);
    }

    const push = async (msgType: string, payload: any) => {
        const request: RequestInit = {
            method: 'POST',
            body: JSON.stringify(payload)
        }

        await fetch(`api/push/${msgType}`, request);
    }

    return <div className="w-full h-full center-child">
        <div className="centered-row">
            <Button variant="outlined" size="large" onClick={async () => await onStart()} className="mx-4" disabled={started}>Start</Button>
            <Button variant="outlined" size="large" onClick={async () => await onStop()} disabled={!started}>Stop</Button>
        </div>
    </div>
}


export default HomePage;