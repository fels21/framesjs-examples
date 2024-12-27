/* eslint-disable react/jsx-key */
import { Button } from 'frames.js/next';
import { frames } from "../../frames";

const dynamicHandler = frames(async () => {
    return {
        image: (
            <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex text-[48px]">
                The current time is {new Date().toLocaleString()}
            </div>
        ),
        imageOptions: {
            dynamic: true,
            headers: {
                'Cache-Control': 'max - age=10',
            }
        },
        buttons: [
            <Button action="post" target="/images/dynamic" >Refresh</Button>,
            <Button action="post" target="/images">
                Back to back
            </Button>,
            <Button action="post" target="/">
                Back to Main Frame
            </Button>,
        ],
    };
});


export const GET = dynamicHandler;
export const POST = dynamicHandler;