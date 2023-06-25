'use client';

import { Button } from './ui/button';

const sendTokenToChromeExtension = ({ extensionId, jwt }: any) => {
    chrome.runtime.sendMessage(extensionId, { jwt }, (response) => {
        console.log('Sucesss ::: ', response.message);
    });
};

const SendTokenButton = () => {
    const handleSendToken = async () => {
        const req = await sendTokenToChromeExtension({
            extensionId: 'fmfpjbbemghjpeibbkklfficcaljbljg',
            jwt: 'jwt',
        });
        console.log('req ::: ', req);
    };

    return <Button onClick={handleSendToken}>Send Token</Button>;
};
export default SendTokenButton;
