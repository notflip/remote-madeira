import PrivacyPolicyPage from '@/components/pages/privacy-policy/PrivacyPolicyPage'
import { privacyPolicyPageQuery } from '@/sanity/lib/queries'
import { loadQuery } from '@/sanity/loader/loadQuery'

export default async function PrivacyPolicy() {
  const initial = await loadQuery<any | null>(
    privacyPolicyPageQuery,
    {},
    { next: { tags: ['privacyPolicyPage'] } },
  )

  return <PrivacyPolicyPage data={initial.data} />
}
