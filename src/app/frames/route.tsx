/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const frameHandler = frames(async () => {
    return {
        image: <div tw="flex">
            <p>Frame.js Examples</p>
            <p>By Fels</p>
        </div>,
        buttons: [
            // Without query params
            <Button action="post" target="/multiRoute">
                MultiRoutes
            </Button>,
            <Button action="post" target="/states">
                States
            </Button>,
            <Button action="post" target="/images">
                Images
            </Button>,
            <Button action="post" target="/userData">
                User Data
            </Button>,
        ],
    };
});

export const GET = frameHandler;
export const POST = frameHandler;