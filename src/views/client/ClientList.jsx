// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import ClientTable from '../../components/table/ClientTable'
import clientInfos from '../../../test/data/clients.json'

function ClientList() {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setClients(clientInfos)
  }, [clientInfos])
  console.log("Client Infos",clients);


  const onDeleteClick = (client) => {}
  return (
    <div className='w-full flex flex-col justify-center items-center gap-8'>
      UserList
      <ClientTable clients={clients} loading={loading} onDeleteClick={onDeleteClick}/>
    </div>
  )
}

export default ClientList