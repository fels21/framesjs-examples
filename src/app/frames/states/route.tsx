/* eslint-disable react/jsx-key */
import { Button } from 'frames.js/next';
import { frames } from "../frames";

const handler = frames(async (ctx) => {
    let state = ctx.state;

    // Update the state
    switch (
    ctx.searchParams.action
    ) {
        case "increment":
            state = { ...state, count: state.count + 1 };
            break;
        case "decrement":
            state = { ...state, count: state.count - 1 };
            break;
    }

    return {
        image: <div tw="flex">Count: {state.count}</div>,
        buttons: [
            <Button action="post"
                target={{ pathname: "/states", query: { action: "increment" } }}
            >
                Increment
            </Button>,
            <Button action="post"
                target={{ pathname: "/states", query: { action: "decrement" } }}
            >
                Decrement
            </Button>,
            <Button action="post" target="/">
                Back to Main Frame
            </Button>,
        ],
        state,
    };
});

export const GET = handler;
export const POST = handler;