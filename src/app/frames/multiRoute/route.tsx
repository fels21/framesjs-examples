/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

const multiRoute = frames(async () => {
    return {
        image: <div tw="flex">MultiRoutes Example</div>,
        buttons: [
            // With query params
            <Button
                action="post"
                target={{ pathname: "/multiRoute/route1", query: { foo: "bar" } }}
            >
                Route 1 with param
            </Button>,
            // Without query params
            <Button action="post" target="/multiRoute/route2">
                Route 2 no param
            </Button>,
            <Button action="post" target="/">
                Main Frame
            </Button>,
        ],
    };
});

export const GET = multiRoute;
export const POST = multiRoute;