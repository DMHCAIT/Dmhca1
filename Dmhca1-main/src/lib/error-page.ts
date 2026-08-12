export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        color: #1a202c;
        display: grid;
        place-items: center;
        min-height: 100vh;
        padding: 1.5rem;
      }
      
      .container {
        max-width: 32rem;
        width: 100%;
        background: white;
        border-radius: 1rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        padding: 3rem 2rem;
        text-align: center;
      }
      
      .icon {
        width: 4rem;
        height: 4rem;
        margin: 0 auto 1.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }
      
      h1 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      p {
        font-size: 1rem;
        color: #4a5568;
        margin-bottom: 2rem;
        line-height: 1.6;
      }
      
      .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      button, a {
        padding: 0.75rem 1.75rem;
        border-radius: 0.5rem;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        border: 2px solid transparent;
        transition: all 0.3s ease;
        font-size: 1rem;
      }
      
      .primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
      }
      
      .primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
      }
      
      .secondary {
        background: transparent;
        color: #667eea;
        border-color: #667eea;
      }
      
      .secondary:hover {
        background: #f0f4ff;
        transform: translateY(-2px);
      }
      
      @media (max-width: 640px) {
        .container {
          padding: 2rem 1.5rem;
        }
        
        h1 {
          font-size: 1.5rem;
        }
        
        .actions {
          flex-direction: column;
        }
        
        button, a {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="icon">⚠️</div>
      <h1>Oops! Something went wrong</h1>
      <p>We encountered an unexpected error. Don't worry—it's not your fault. Try refreshing the page or head back to the home page.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">↻ Try again</button>
        <a class="secondary" href="/">← Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
