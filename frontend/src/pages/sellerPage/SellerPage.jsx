import React from 'react'
import InputBox from '../../components/ui/inputBox/InputBox'

export default function SellerPage() {



  return (
     <form action="multipart/form-data" >

      <InputBox
       type="file"
       name="folder"
       required
      />


     </form>
  )
}
