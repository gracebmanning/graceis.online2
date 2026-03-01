// https://d1bvcrcr6a71bl.cloudfront.net/[bucket-name]/[asset-name]

export const url_base = "https://d1bvcrcr6a71bl.cloudfront.net";

export function getCloudFrontVideo(filename: string) {
    return url_base + "/videos/" + filename;
}
