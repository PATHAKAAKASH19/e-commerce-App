import React from 'react'
import Container from '../ui/container/Container'
import Title from '../ui/title/Title'
import InputBox from '../ui/inputBox/InputBox'

export default function FilterComponent() {
  return (

    
    <Container className= 'filter-sec'>

         <Title title="filter"/>
      <Container className='filters'>
          <Title title="size"/>
          <Container>
             <Container>
                <InputBox type="checkbox" id="S" value="S" name={`${"size"}`}></InputBox>
                <label htmlFor="S">S</label>
             </Container>

             <Container>
                <InputBox type="checkbox" id="M" value="M" name={`${"size"}`}></InputBox>
                <label htmlFor="M">M</label>
             </Container>

             <Container>
                <InputBox type="checkbox" id="L" value="L" name={`${"size"}`}></InputBox>
                <label htmlFor="L">L</label>
             </Container>

             <Container>
                <InputBox type="checkbox" id="XL" value="XL" name={`${"size"}`}></InputBox>
                <label htmlFor="XL">XL</label>
             </Container>

             <Container>
                <InputBox type="checkbox" id="XLL" value="XLL" name={`${"size"}`}></InputBox>
                <label htmlFor="XLL">XLL</label>
             </Container>
          </Container>
      </Container>
</Container>
    
     
   
  )
}

