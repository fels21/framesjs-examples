import { createFrames } from "frames.js/next";
import { farcasterHubContext } from "frames.js/middleware";

export type State = {
    count: number;
};

export const frames = createFrames({
    initialState: {
        count: 1,
        pageIndex: 0,
    },
    middleware: [farcasterHubContext()],
    basePath: "/frames",
});