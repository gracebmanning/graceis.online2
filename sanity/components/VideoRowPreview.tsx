import { type PreviewProps } from "sanity";
import { Stack, Flex, Text, Box, Card } from "@sanity/ui";
import { VideoIcon } from "@sanity/icons";

type VideoRowPreviewProps = PreviewProps & {
    videos?: Array<{
        _key?: string;
        videoSource?: "url" | "cloudfront";
        videoURL?: string;
        videoFileName?: string;
        caption?: string;
    }>;
};

export function VideoRowPreview({ videos = [] }: VideoRowPreviewProps) {
    if (videos.length === 0) {
        return (
            <Box padding={2}>
                <Text muted>Empty video row</Text>
            </Box>
        );
    }
    return (
        <Stack space={2} padding={2}>
            {videos.map((video, i) => (
                <Flex key={video._key ?? i} align="center" gap={3}>
                    <Card
                        tone="transparent"
                        radius={1}
                        style={{
                            width: 32,
                            height: 32,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <Text size={3}>
                            <VideoIcon />
                        </Text>
                    </Card>
                    <Text size={1}>{video.caption || <em>(no caption)</em>}</Text>
                </Flex>
            ))}
        </Stack>
    );
}
