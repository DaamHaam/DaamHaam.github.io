document.getElementById('submit-btn').addEventListener('click', async () => {
    const question = document.getElementById('question').value;
    const responseText = document.getElementById('response-text');
  
    const apiKey = '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';
    const prompt = `You: ${question}\nJavaScript chatbot`;
  
    const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ['You:']
      })
    });
  
    const responseData = await response.json();
  
    if (responseData.choices) {
      const answer = responseData.choices[0].text.trim();
      responseText.innerText = answer;
    } else {
      responseText.innerText = 'Erreur: Impossible de récupérer la réponse.';
      console.error(responseData);
    }
  });
  