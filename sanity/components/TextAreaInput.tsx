import {useCallback} from 'react'
import {Inline, Badge, Stack, Text, TextArea} from '@sanity/ui'
import {set, unset} from 'sanity'

export const TextAreaInput = (props: any) => {
  const {elementProps, onChange, value = '', min, max} = props

  const handleChange = useCallback(
    (event: any) => {
      const nextValue = event.currentTarget.value
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange],
  )

  return (
    <Stack space={2}>
      <Inline space={2}>
        <Badge
          padding={2}
          radius={0}
          tone={
            value?.length > 0
              ? value?.length < min || value?.length > max
                ? 'caution'
                : 'positive'
              : 'primary'
          }
        >
          <Text size={1}>
            {value.length}/{max}
          </Text>
        </Badge>
      </Inline>
      <TextArea {...elementProps} onChange={handleChange} value={value} />
    </Stack>
  )
}
