import api from '@/axios/axios-provider'
import useAlert, { AlertStatus } from '@/hooks/useAlert'
import { HomeTemplate } from '@/templates/Home'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export default function Home() {
  const [homeData, setHomeData] = useState([])
  const [error, setError] = useState(false)
  const { notify } = useAlert()

  useEffect(() => {
    async function fetchData() {
      const empresas = await api.getEmpresas()

      setHomeData(empresas)
    }

    try {
      fetchData()
    } catch (error) {
      notify(AlertStatus.ERROR, 'Não foi possível se conectar a api')
      console.error(error)
      setError(true)
    }
  }, [])

  return (
    <>
      <ToastContainer />
      {!error && homeData && homeData.length > 0 ? (
        <HomeTemplate data={homeData} />
      ) : (
        <h1>Ocorreu um erro :(</h1>
      )}
    </>
  )
}
