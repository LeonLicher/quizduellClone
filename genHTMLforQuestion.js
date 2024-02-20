function getHtml(question, answer1,answer2,answer3,answer4) {
    let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dynamic HTML Example</title>
        </head>
        
        <body>
            <h1>${question}</h1>
    <button>${answer1}</button>
    <button>${answer2}</button>
    <button>${answer3}</button>
    <button>${answer4}</button>
        </body>
        </html>
    `;

    return html;
}

export { getHtml };
