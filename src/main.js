import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const openrouter = createOpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

const app = document.querySelector('#app')
const submitBtn = document.querySelector('#submit')
const form = document.querySelector('#form')

form.addEventListener('submit', async e =>{
    e.preventDefault()

const prompt =document.querySelector('#prompt').value



if(prompt.trim() === '') {
    alert('La consulta no puede estar vacía')
    return
}
 submitBtn.disabled = true
 const result = streamText({
      // model: openrouter('google/gemini-2.5-pro-exp-03-25:free'),
      // model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
      // model: openrouter('google/gemma-3-4b-it:free'),
      // model: openrouter('meta-llama/llama-3.3-70b-instruct:free'),
        model: openrouter('nousresearch/deephermes-3-mistral-24b-preview:free'),
      prompt,
      // system: 'Eres un niño de 3 años',
      // system: 'Eres un abuelo de 90 años',
      // system: 'Eres un ejecutivo de una empresa transnacional'
      // system: 'Eres un gato',
      system: 'Eres un experto en informatica con 30 años de experiencia en Microsoft',
      temperature: 0
  })


for await (const text of result.textStream ) {
    //console.log(text)
   app.append(text)
}

submitBtn.disabled = false

})