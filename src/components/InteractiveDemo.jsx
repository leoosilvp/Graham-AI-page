import { useState } from 'react';
import '../css/interactive-demo.css';
import icon from '../assets/img/icon-light.svg'

function InteractiveDemo() {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const examplePrompts = [
        "How can I optimize this Python code?",
        "Create a marketing plan for an AI startup",
        "Explain the concept of machine learning",
        "Help me debug this JavaScript error"
    ];

    const exampleResponses = {
        "How can I optimize this Python code?": "Here are some strategies to optimize Python code:\n\n1. **Use list comprehensions** instead of traditional loops\n2. **Implement caching** with @lru_cache for repetitive functions\n3. **Use NumPy** for intensive mathematical operations\n4. **Profile the code** with cProfile to identify bottlenecks\n\nDo you want me to analyze a specific piece of code?",
        
        "Create a marketing plan for an AI startup": "**Marketing Plan - AI Startup**\n\n**Phase 1: Positioning (Month 1-2)**\n• Define a unique value proposition\n• Identify a specific target audience\n• Create consistent messaging\n\n**Phase 2: Content (Month 2-4)**\n• Weekly technical blog\n• Educational webinars\n• Customer case studies\n\n**Phase 3: Growth (Month 4-6)**\n• Strategic partnerships\n• Referral program\n• SEO optimization\n\nEstimated budget: $15,000-25,000",
        
        "Explain the concept of machine learning": "**Machine Learning** is a subfield of artificial intelligence that enables computers to learn and improve automatically through experience.\n\n**Main types:**\n• **Supervised**: Learns from labeled data\n• **Unsupervised**: Finds patterns in unlabeled data\n• **Reinforcement**: Learns through trial and error\n\n**Common applications:**\n• Image recognition\n• Natural language processing\n• Recommendation systems\n• Fraud detection\n\nDo you want to explore a specific type?",
        
        "Help me debug this JavaScript error": "To help you debug JavaScript, I need more details. But here are the **most effective techniques**:\n\n**1. Strategic console.log**\n```javascript\nconsole.log('Variable value:', myVariable);\n```\n\n**2. Browser debugger**\n• F12 → Sources → Add breakpoints\n\n**3. Try-catch blocks**\n```javascript\ntry {\n  // problematic code\n} catch (error) {\n  console.error('Error:', error.message);\n}\n```\n\nShare the specific error for personalized help!"
    };

    const handlePromptClick = (examplePrompt) => {
        setPrompt(examplePrompt);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setIsLoading(true);
        setResponse('');

        setTimeout(() => {
            const matchedResponse = exampleResponses[prompt] || 
                "This is a demonstration of Graham AI. In the full version, you would receive a personalized and detailed response to your question. Graham can assist with programming, data analysis, content creation, and much more!";
            
            setResponse(matchedResponse);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <section className='interactive-demo' id="demo">
            <h1>Try Graham, Right Now</h1>
            <h2>Ask a question. Watch the magic happen in real-time. No login required.</h2>
            
            <div className="demo-container">
                <div className="demo-input-section">
                    <form onSubmit={handleSubmit} className="demo-form">
                        <div className="input-group">
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="Type your question here..."
                                className="demo-input"
                                rows="3"
                            />
                            <button 
                                type="submit" 
                                className="demo-submit"
                                disabled={isLoading || !prompt.trim()}
                            >
                                {isLoading ? (
                                    <>
                                        <i className="fa-solid fa-spinner fa-spin"></i>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-paper-plane"></i>
                                        Send
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                    
                    <div className="example-prompts">
                        <p>Or try one of these examples:</p>
                        <div className="prompt-buttons">
                            {examplePrompts.map((example, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePromptClick(example)}
                                    className="example-prompt-btn"
                                >
                                    {example}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="demo-response-section">
                    {isLoading && (
                        <div className="loading-animation">
                            <div className="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p>Graham is thinking...</p>
                        </div>
                    )}
                    
                    {response && !isLoading && (
                        <div className="demo-response">
                            <div className="response-header">
                                <img src={icon} />
                                <span>Graham AI</span>
                            </div>
                            <div className="response-content">
                                {response.split('\n').map((line, index) => (
                                    <p key={index}>{line}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {!response && !isLoading && (
                        <div className="demo-placeholder">
                            <i className="fa-solid fa-comments"></i>
                            <p>Graham's response will appear here...</p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="demo-note">
                <p>💡 This is a demo. In the full version, Graham offers even more detailed and personalized responses!</p>
            </div>
        </section>
    );
}

export default InteractiveDemo;
