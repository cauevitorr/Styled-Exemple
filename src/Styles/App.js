import styled from "styled-components"

// const cor = '	#00FFFF'

export const cores = {
 preto:'#000',
 branco:'#fff',
 rosa:'#e01e8f',
 amarelo:'#eed200'
}

const cordiv = '#00FFFF'

export const Titulo = styled.h1`color:red; cursor:pointer;`

export const Titulo2 = styled.h1`color:${cores.rosa}; cursor:pointer;`

 export const Card = styled.div`
text-align: center;
width:200px;
height:100px;
background-color:${cordiv};
border-radius:10px;
margin:0 auto;
&:hover{
 background-color: black;
}
`

export const Text = styled.p`color:blue`
