/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "../frames";

const handleRequest = frames(async (ctx) => {
    const message = ctx.message;

    return {
        image: message ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <p>GM, {message.requesterUserData?.displayName || "anonymous"}! Your FID is{" "} {message.requesterFid},{" "}</p>
                <p>Username: {message.requesterUserData?.username || "no username"}</p>
                <p>Bio: {message.requesterUserData?.bio || "no bio"}</p>
                <p>
                    Profile pic:
                    {message.requesterUserData?.profileImage ? (
                        <img
                            src={message.requesterUserData.profileImage}
                            alt="Profile Pic"
                            style={{ width: 50, height: 50, borderRadius: "50%" }}
                        />
                    ) : (
                        "no image"
                    )}
                </p>
                <p>Location: {message.requesterUserData?.location || "no location"}</p>
            </div>
        ) : (
            <div>Say GM</div>
        ),
        buttons: [
            <Button action="post" target="/userData">Say GM</Button>,
            <Button action="post" target="/">Back to Main Frame</Button>,
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;
