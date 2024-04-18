import api from '@/axios/axios-provider'
import { HomeTemplate } from '@/templates/Home'
import { useEffect, useState } from 'react'

export default function Home() {
  const [homeData, setHomeData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const empresas = await api.getEmpresas()

      setHomeData(empresas)
    }

    fetchData()
  }, [])

  return (
    <>{homeData && homeData.length > 0 && <HomeTemplate data={homeData} />}</>
  )
}
