import { defineField } from 'sanity'

import { TextAreaInput } from '../../components/TextAreaInput'
import { TextInput } from '../../components/TextInput'

export const getSeoFields = ({
  group,
  fieldset = 'seo',
}: {
  group?: string
  fieldset?: string
}) => [
  defineField({
    type: 'string',
    name: 'meta_title',
    title: 'Titel voor SEO en social media (meta_title)',
    validation: (rule) => rule.min(5),
    description:
      'Maak de titel zo interessant mogelijk om bezoekers op Google en social media te overtuigen deze website te bezoeken, ideale lengte van tussen 15 en 70 karakters',
    components: {
      input: (props) => <TextInput {...props} min={15} max={70} />,
    },
    group,
    fieldset,
  }),
  defineField({
    type: 'text',
    name: 'meta_description',
    title: 'Korte paragraaf voor SEO en social media (meta_description)',
    validation: (rule) => rule.min(15),
    description:
      'Een beknopte samenvatting die zoekmachines en gebruikers helpt te begrijpen waar de pagina over gaat, ideale lengte van tussen 70 en 160 karakters',
    components: {
      input: (props) => <TextAreaInput {...props} min={70} max={160} />,
    },
    group,
    fieldset,
  }),
  defineField({
    type: 'image',
    name: 'meta_image',
    title: 'Social sharing afbeelding',
    description:
      'De afbeelding die wordt weergegeven wanneer de pagina op sociale media wordt gedeeld, wat de zichtbaarheid en aantrekkingskracht van de gedeelde link vergroot.',
    group,
    fieldset,
  }),
]
