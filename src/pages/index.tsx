import api from '@/axios/axios-provider'
import { HomeTemplate } from '@/templates/Home'
import { useEffect, useState } from 'react'

export default function Home() {
  const [homeData, setHomeData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const empresas = await api.getEmpresas()

      setHomeData(empresas)
    }
    try {
      fetchData()
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }, [])

  return (
    <>
      {!error && homeData && homeData.length > 0 ? (
        <HomeTemplate data={homeData} />
      ) : (
        <h1>Ocorreu um erro :(</h1>
      )}
    </>
  )
}
