function getHtml(question, answers) {
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
    `;

    // Adding answers as buttons
    answers.forEach(answer => {
        html += `<button>${answer}</button>`;
    });

    // Closing HTML tags
    html += `
        </body>
        </html>
    `;

    return html;
}

export { getHtml };
