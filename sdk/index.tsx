import Contentstack from 'contentstack'
import ContentstackLivePreview from "@contentstack/live-preview-utils";

export const Stack = Contentstack.Stack({
    api_key: process.env.API_KEY as string,
    delivery_token: process.env.DELIVERY_TOKEN as string,
    environment: process.env.ENVIRONMENT as string,
    "live_preview": {
        enable: true,
        host: "api.contentstack.io",
        management_token: process.env.MANAGEMENT_TOKEN as string
    }
});


export async function getEntry() {
    let entry = await Stack.ContentType(process.env.CONTENT_TYPE as string).Entry(process.env.ENTRY_UID as string).toJSON().fetch();
    return entry;
}