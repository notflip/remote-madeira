import { Badge, Box, Flex } from '@sanity/ui'

export const SlugInput = (props: any) => {
  const urlPrefix = process.env.NEXT_PUBLIC_SANITY_STUDIO_SITE_URL
  const finalPrefix = `${urlPrefix}${
    // Add a slash if the prefix doesn't end with one and doesn't contain a hash or a query string
    !urlPrefix?.endsWith('/') &&
    !urlPrefix?.includes('#') &&
    !urlPrefix?.includes('?')
      ? '/'
      : ''
  }`

  return (
    <Flex>
      <Badge tone="default" radius={0} style={{ padding: '0.8em' }}>
        {finalPrefix}
      </Badge>
      <Box style={{ flex: 1 }}>{props.renderDefault({ ...props })}</Box>
    </Flex>
  )
}
