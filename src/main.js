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

const promptInput = document.querySelector('#prompt')
const roleSelect = document.querySelector('#role')
const prompt =document.querySelector('#prompt').value
const system = roleSelect.value



if(prompt.trim() === '') {
    alert('La consulta no puede estar vacía')
    return
}

// Borra el contenido del input después de leer el valor
 promptInput.value = ''
 submitBtn.disabled = true

 const result = streamText({
       model: openrouter('meta-llama/llama-4-maverick:free'),
      // model: openrouter('google/gemini-2.5-pro-exp-03-25:free'),
      // model: openrouter('deepseek/deepseek-chat-v3-0324:free'),
      // model: openrouter('google/gemma-3-4b-it:free'),
      // model: openrouter('moonshotai/kimi-vl-a3b-thinking:free'),
      //  model: openrouter('nousresearch/deephermes-3-mistral-24b-preview:free'),
      prompt,
       ...(system && { system }),
      temperature: 0
  })

app.innerHTML = '<p class="text-gray-400">Generando respuesta...</p>'


for await (const text of result.textStream ) {
   
   app.append(text)
}

app.innerHTML = '' // limpia el contenido anterior


for await (const text of result.textStream ) {
   app.append(text)
}


submitBtn.disabled = false

})