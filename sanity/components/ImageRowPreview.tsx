import { type PreviewProps } from "sanity";
import { Stack, Flex, Text, Box } from "@sanity/ui";
import { urlFor } from "@/sanity/lib/image";

type ImageRowPreviewProps = PreviewProps & {
    images?: Array<{
        _key?: string;
        asset?: { _ref?: string };
        caption?: string;
    }>;
};

export function ImageRowPreview({ images = [] }: ImageRowPreviewProps) {
    if (images.length === 0) {
        return (
            <Box padding={2}>
                <Text muted>Empty image row</Text>
            </Box>
        );
    }
    return (
        <Stack space={2} padding={2}>
            {images.map((img, i) => (
                <Flex key={img._key ?? i} align="center" gap={3}>
                    {img.asset?._ref && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={urlFor(img).width(80).height(80).url()}
                            alt=""
                            style={{
                                width: 32,
                                height: 32,
                                objectFit: "cover",
                                borderRadius: 2,
                                flexShrink: 0,
                            }}
                        />
                    )}
                    <Text size={1}>{img.caption || <em>(no caption)</em>}</Text>
                </Flex>
            ))}
        </Stack>
    );
}
