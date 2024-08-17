import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import PrivacyPolicyPage from '@/components/pages/privacy-policy/PrivacyPolicyPage'
import { loadPrivacyPolicyPage } from '@/sanity/loader/loadQuery'

const PrivacyPolicyPagePreview = dynamic(
  () => import('@/components/pages/privacy-policy/PrivacyPolicyPagePreview'),
)

export default async function PrivacyPolicy() {
  const initial = await loadPrivacyPolicyPage()

  if (draftMode().isEnabled) {
    return <PrivacyPolicyPagePreview initial={initial} />
  }

  return <PrivacyPolicyPage data={initial.data} />
}
