/* eslint-disable react/jsx-key */
import { Button } from 'frames.js/next';
import { frames } from "../frames";

const handler = frames(async () => {


    return {
        image: "https://picsum.photos/seed/frames.js/1146/600",
        buttons: [
            <Button action="post" target="/images/rendered">
                Rendered Image
            </Button>,
            <Button action="post" target="/images/dynamic">
                Dynamic Images
            </Button>,
            <Button action="post" target="/">
                Back to Main Frame
            </Button>,
        ],
    };
});

export const GET = handler;
export const POST = handler;