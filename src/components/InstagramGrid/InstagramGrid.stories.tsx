import { Grid } from "../Grid";
import InstagramEmbed from "react-instagram-embed";

export const InstagramGrid = () => {
    return (
        <>
            <InstagramEmbed
                url="https://instagr.am/p/Zw9o4/"
                clientAccessToken="123|456"
                maxWidth={320}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
            />
        </>
    );
};
