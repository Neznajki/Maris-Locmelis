
import React, { useState } from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import sunFlight from '@/assets/sunFlight.jpg'
import { fetchMenuItems, redirectToFallback } from '@/api/client'
import {ApiMenuEntry} from "@/contract/ApiMenuEntry";

export const Home: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
  const [apiResult, setApiResult] = useState<ApiMenuEntry[] | null>(null)
  const [loading, setLoading] = useState(false)

  const loadMenu = async () => {
    try {
      setLoading(true)
      const data = await fetchMenuItems()
      setApiResult(data)
    } catch (e) {
      redirectToFallback(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageContainer title={title ?? null}>
      <Paragraph>Hello there I'm Māris Ločmelis and this is page about my self</Paragraph>
      <a href="https://github.com/Neznajki" target="_blank" rel="noopener noreferrer">
        <img src={sunFlight} alt="Sunny Day !!" />
      </a>
      <div className="mt-6 space-y-2">
        <button onClick={loadMenu} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50" disabled={loading}>
          {loading ? 'Loading…' : 'Fetch Menu (API)'}
        </button>
        {apiResult && (
          <pre className="mt-2 p-3 rounded bg-gray-100 overflow-auto text-sm">
            {JSON.stringify(apiResult, null, 2)}
          </pre>
        )}
      </div>
    </PageContainer>
  )
}
export default Home
