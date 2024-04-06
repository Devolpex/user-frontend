// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useClientFormContext } from "../../context/ClientFormContext";


function HeaderClientForm({idClient}) {
  const {_setClient,client} = useClientFormContext();
  

  return (
    <div className="w-auto h-20  justify-between items-center inline-flex">
      <div className="text-black text-5xl font-bold font-['Roboto'] leading-[62.40px]">
        {idClient && (
          <h1>
            Update Client: {client.first_name} {client.last_name}{" "}
          </h1>
        )}
        {!idClient && <h1>New Client</h1>}
      </div>
    </div>
  );
}

export default HeaderClientForm;
