import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const form = document.querySelector('#form')

form.addEventListener('submit', e =>{
    e.preventDefault()

const prompt =document.querySelector('#prompt').value



if(prompt.trim() === '') {
    alert('La consulta no puede estar vacía')
    return
}

console.log(prompt)

})