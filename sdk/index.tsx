import Contentstack from 'contentstack'
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export const Stack = Contentstack.Stack({
    "api_key": 'blt8b5c412ea10365cd',
    "delivery_token": 'cs14c2da999578deaf5cbb51d8',
    "environment": 'production',
    "live_preview": {
        enable: true,
        host: "api.contentstack.io",
        management_token: 'cs73b5452671d257c2c83ddab3',
        //@ts-ignore
        ssr: true
    }
});

ContentstackLivePreview.init({
    enable: true,
    ssr: true,
    //@ts-ignore
    stack: Stack
});

export async function getEntry() {
    let entry = await Stack.ContentType('landing_page').Entry('blt077962ab041c4638').toJSON().fetch();
    return entry;
}