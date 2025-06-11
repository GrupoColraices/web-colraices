import dynamic from 'next/dynamic'

const CampaignLeadForm = dynamic(
  () => import('../../components/CampaignLeadForm'),
  { ssr: false }
)

export default function CampaingFormPage() {
  return <CampaignLeadForm />
}
