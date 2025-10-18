import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Footer from '../components/Footer'
import InteractiveDemo from '../components/InteractiveDemo'
import useInteractions from '../hooks/useInteractions'

import imgLoginInterface from '../assets/img/login-interface.png'
import imgInterface from '../assets/img/interface.png'
import Icon from '../components/Icon'
import colab from '../assets/img/deepseek-graham.png'
import deepseek from '../assets/img/deepseek.png'
import Plans from "../components/Plans";

function Home() {
    const location = useLocation();
    const hasScrolledRef = useRef(false);

    useInteractions();

    const scrollToPosition = (targetTop, duration = 1500) => {
        const start = window.scrollY;
        const distance = targetTop - start;
        let startTime = null;

        const easeInOutQuad = (t) =>
            t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, start + distance * easeInOutQuad(progress));
            if (progress < 1) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        if (location.state?.scrollTo && !hasScrolledRef.current) {
            const element = document.getElementById(location.state.scrollTo);
            if (!element) return;

            const viewportHeight = window.innerHeight;
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;

            let top;
            if (elementHeight > viewportHeight) {
                top = elementTop - 60;
            } else {
                top = elementTop - viewportHeight / 2 + elementHeight / 2;
            }

            scrollToPosition(top, 1500);

            hasScrolledRef.current = true;

            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <>
            <Header />
            <section className="content" id="home">
                <Presentation />
                <InteractiveDemo />

                <hr />

                <section className='use-cases' id="use-cases">
                    <h1>Specific Use Cases</h1>
                    <h2>See how Graham solves real problems for different user profiles</h2>
                    <div className="use-cases-tabs">
                        <div className="tab-buttons">
                            <button className="tab-btn active" data-tab="developers">For Developers</button>
                            <button className="tab-btn" data-tab="creators">For Creators</button>
                            <button className="tab-btn" data-tab="analysts">For Analysts</button>
                        </div>
                        <div className="tab-content">
                            <div className="tab-panel active" id="developers">
                                <div className="use-case-example">
                                    <h3>Prompt Example:</h3>
                                    <div className="prompt-box">
                                        "Create a Python function that uses the DeepSeek API to summarize a long text"
                                    </div>
                                    <h3>Graham's Output:</h3>
                                    <div className="result-box">
                                        <pre><code>{`import requests
import json

def summarize_text_deepseek(text, api_key):
    """
    Summarizes a text using the DeepSeek API
    
    Args:
        text (str): Text to summarize
        api_key (str): DeepSeek API key
    
    Returns:
        str: Summarized text
    """
    url = "https://api.deepseek.com/v1/chat/completions"
    
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "model": "deepseek-chat",
        "messages": [
            {
                "role": "user", 
                "content": f"Summarize the following text: {text}"
            }
        ],
        "max_tokens": 150
    }
    
    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()
        
        result = response.json()
        return result['choices'][0]['message']['content']
        
    except requests.exceptions.RequestException as e:
        return f"Request error: {e}"

# Example usage
if __name__ == "__main__":
    example_text = "Your long text here..."
    api_key = "your_api_key_here"
    
    summary = summarize_text_deepseek(example_text, api_key)
    print(f"Summary: {summary}")`}</code></pre>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-panel" id="creators">
                                <div className="use-case-example">
                                    <h3>Prompt Example:</h3>
                                    <div className="prompt-box">
                                        "Create a 7-day social media content plan about technology"
                                    </div>
                                    <h3>Graham's Output:</h3>
                                    <div className="result-box">
                                        <strong>Content Plan - Technology (7 days)</strong><br /><br />
                                        <strong>Day 1 - Monday:</strong> "5 AI trends that will dominate 2025"<br />
                                        <strong>Day 2 - Tuesday:</strong> "Tutorial: How to optimize your code with AI"<br />
                                        <strong>Day 3 - Wednesday:</strong> "Myths vs Reality: What AI can really do"<br />
                                        <strong>Day 4 - Thursday:</strong> "Free AI tools for developers"<br />
                                        <strong>Day 5 - Friday:</strong> "Case study: How AI transformed a startup"<br />
                                        <strong>Day 6 - Saturday:</strong> "Weekend project: Build a chatbot in 30 minutes"<br />
                                        <strong>Day 7 - Sunday:</strong> "Reflection: The future of work with AI"
                                    </div>
                                </div>
                            </div>
                            <div className="tab-panel" id="analysts">
                                <div className="use-case-example">
                                    <h3>Prompt Example:</h3>
                                    <div className="prompt-box">
                                        "Analyze this sales dataset and identify seasonal patterns and growth opportunities"
                                    </div>
                                    <h3>Graham's Output:</h3>
                                    <div className="result-box">
                                        <strong>Sales Pattern Analysis</strong><br /><br />
                                        <strong>Identified Patterns:</strong><br />
                                        • Sales peak in December (+45% vs annual average)<br />
                                        • Consistent drop in January (-30%)<br />
                                        • Gradual growth from March to November<br /><br />
                                        <strong>Opportunities:</strong><br />
                                        • Early campaigns in November can capture 15% more sales<br />
                                        • Promotions in January can reduce the drop to -15%<br />
                                        • Focusing on seasonal products can increase margin by 8%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className="plans" id="plans">
                    <h1>Plans</h1>
                    <h2>Choose the plan that unlocks your full creative potential.</h2>
                    <section className="content-plans">
                        <Plans />
                        <section className='sec-payment-methods'>
                            <div className="pay-met">
                                <i className='fa-solid fa-credit-card'></i>
                                <i className='fa-brands fa-paypal'></i>
                                <i className='fa-brands fa-pix'></i>
                                <i className='fas fa-coins'></i>
                            </div>
                            <h2>Pay by credit card in up to 12x, PayPal or Pix</h2>
                            <h3>We guarantee free cancellation within 7 days</h3>
                        </section>
                    </section>
                </section>

                <hr />

                <section className="interface">
                    <h1>Simplified Access</h1>
                    <h2>Simplified Login via GitHub. Just your username to get started.</h2>
                    <img src={imgLoginInterface} alt="interface" />
                    <div className="content-interface">
                        <p>Key Features That Make Graham Unique</p>
                        <section className="ctn-cards-interface">
                            <article className="card-interface">
                                <p><i className='fa-solid fa-hexagon-nodes'></i></p>
                                <h2>Adaptive Intelligence</h2>
                                <h3>Graham learns from your interactions, offering responses and solutions that become increasingly aligned with your needs.</h3>
                            </article>

                            <article className="card-interface">
                                <p><i className='fa-solid fa-network-wired'></i></p>
                                <h2>Continuous Integration</h2>
                                <h3>Connect Graham to your favorite tools. Automate tasks and centralize your workflow in one place.</h3>
                            </article>

                            <article className="card-interface">
                                <p><i className='fa-solid fa-layer-group'></i></p>
                                <h2>Comprehensive Capacity</h2>
                                <h3>From analyzing complex data to creating creative content, Graham is equipped to handle a wide range of tasks.</h3>
                            </article>
                        </section>
                    </div>
                    <h1>A Completely Intuitive Interface</h1>
                    <h2>Built to be powerful, designed to be simple. Get started in seconds, with no learning curves.</h2>
                    <img src={imgInterface} alt="interface" />
                </section>

                <hr />

                <section className='api' id="api">
                    <a href="https://www.deepseek.com/en" target='_blank'><img src={deepseek} /></a>
                    <div className="text-ali-right">
                        <h1>API DeepSeek</h1>
                        <p>We've integrated DeepSeek's cutting-edge models, recognized for their excellence in coding and logical reasoning,
                            to give Graham a powerful and efficient foundation.</p>
                        <a href="https://www.deepseek.com/en" target='_blank'>DeepSeek</a>
                    </div>
                </section>

                <hr />

                <section className='about' id="about">
                    <h1>About</h1>
                    <div className="content-about">
                        <h2>In a world saturated with information, clarity is the greatest power. Graham was born from the need for a
                            tool that not only processed data, but also understood it. Our mission is to transform complexity into simplicity,
                            allowing you to focus on what really matters: innovation.
                        </h2>
                        <h2>Conventional AI tools often require complex configurations and offer a fragmented experience.
                            Graham breaks that barrier. We built it on a foundation of user-centered design,
                            ensuring that every interaction is intuitive, efficient, and effortlessly produces meaningful results.
                        </h2>
                        <h2>We're committed to continuous evolution. Graham is more than a product; it's a growing partner,
                            constantly updated with the latest innovations in artificial intelligence to ensure
                            you're always one step ahead. The future of intelligent productivity starts here.
                        </h2>
                    </div>
                </section>

                <hr />

                <section className='colab' id="colab">
                    <div className="text-ali-left">
                        <h1>DeepSeek x Graham</h1>
                        <p>DeepSeek provides the high-performance open-source AI engine. Graham transforms this raw power into an exceptional
                            user experience, with an intuitive interface and tools focused on maximizing your productivity.</p>
                        <a href="https://graham-ai-kappa.vercel.app/" target='_blank'>Learn more</a>
                    </div>
                    <a href="https://graham-ai-kappa.vercel.app/" target='_blank'><img src={colab} /></a>
                </section>

                <hr />

                <section className='testimonials' id="testimonials">
                    <h1>What Users Say</h1>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Graham transformed the way I debug code. The interface is incredibly fast and the GitHub integration is brilliant."</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">AS</div>
                                <div className="author-info">
                                    <h4>Ana Silva</h4>
                                    <span>Full-Stack Developer</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Finally, an AI that understands the context of my work. Graham not only responds, it truly helps solve complex problems."</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">MC</div>
                                <div className="author-info">
                                    <h4>Miguel Costa</h4>
                                    <span>Software Architect</span>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"Graham's simplicity is its greatest asset. I can focus on what matters without getting lost in complex settings."</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">LF</div>
                                <div className="author-info">
                                    <h4>Luísa Fernandes</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className='comparison' id="comparison">
                    <h1>Why Choose Graham?</h1>
                    <div className="comparison-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Graham AI</th>
                                    <th>Other AIs</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Intuitive Interface</td>
                                    <td><span className="check">✅</span></td>
                                    <td><span className="partial">🟡</span></td>
                                </tr>
                                <tr>
                                    <td>Workflow Focused</td>
                                    <td><span className="check">✅</span></td>
                                    <td><span className="cross">❌</span></td>
                                </tr>
                                <tr>
                                    <td>DeepSeek Integration</td>
                                    <td><span className="check">✅</span></td>
                                    <td><span className="cross">❌</span></td>
                                </tr>
                                <tr>
                                    <td>GitHub Simplified Login</td>
                                    <td><span className="check">✅</span></td>
                                    <td><span className="cross">❌</span></td>
                                </tr>
                                <tr>
                                    <td>Data Anonymization</td>
                                    <td><span className="check">✅</span></td>
                                    <td><span className="partial">🟡</span></td>
                                </tr>
                                <tr>
                                    <td>Dynamic Contextual Engagement</td>
                                    <td><span className="check">✅</span></td>
                                    <td><span className="partial">🟡</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr />

                <section className='faq' id="faq">
                    <h1>Frequently Asked Questions</h1>
                    <div className="faq-container">
                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>Is Graham free?</h3>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer">
                                <p>Yes! Graham offers a robust free plan that allows you to try all the main features. For users with more advanced needs, we offer premium plans with additional capabilities.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>How is my data protected?</h3>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer">
                                <p>Privacy is our top priority. All conversations are encrypted and securely stored. We do not share your data with third parties, and you have full control over your information.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>What technology does Graham use?</h3>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer">
                                <p>Graham is built on DeepSeek AI models, recognized for their excellence in coding and logical reasoning. We combine this cutting-edge technology with an interface designed specifically to maximize productivity.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>Can I integrate Graham with other tools?</h3>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer">
                                <p>Graham's integration with other tools is not yet available. However, this is one of our next planned features, aiming to allow Graham to integrate in the future with platforms like GitHub, VS Code, and many other popular development tools, enhancing your workflow.</p>
                            </div>
                        </div>

                        <div className="faq-item">
                            <div className="faq-question">
                                <h3>Is technical support available?</h3>
                                <span className="faq-toggle">+</span>
                            </div>
                            <div className="faq-answer">
                                <p>Yes! We provide full technical support via chat, email, and comprehensive documentation. Our team is always available to help you get the most out of Graham.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className='roadmap' id="roadmap">
                    <h1>Product Roadmap</h1>
                    <h2>See what's coming and what's already released</h2>
                    <div className="roadmap-timeline">
                        <div className="roadmap-section">
                            <h3 className="roadmap-status launched">✅ Launched</h3>
                            <div className="roadmap-items">
                                <div className="roadmap-item">
                                    <h4>Intuitive Interface</h4>
                                    <p>Clean design focused on productivity</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>DeepSeek Integration</h4>
                                    <p>Access to the most advanced AI models</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>GitHub Login</h4>
                                    <p>Simplified and secure authentication</p>
                                </div>
                            </div>
                        </div>

                        <div className="roadmap-section">
                            <h3 className="roadmap-status next">🚀 Next</h3>
                            <div className="roadmap-items">
                                <div className="roadmap-item">
                                    <h4>VS Code Plugins</h4>
                                    <p>Direct integration into your favorite editor</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>Public API</h4>
                                    <p>Build your own integrations</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>Team Collaboration</h4>
                                    <p>Share projects and work together</p>
                                </div>
                            </div>
                        </div>

                        <div className="roadmap-section">
                            <h3 className="roadmap-status future">🔮 Coming Soon</h3>
                            <div className="roadmap-items">
                                <div className="roadmap-item">
                                    <h4>Custom Models</h4>
                                    <p>Train Graham with your specific data</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>Mobile App</h4>
                                    <p>Access Graham anywhere</p>
                                </div>
                                <div className="roadmap-item">
                                    <h4>Advanced Automation</h4>
                                    <p>Intelligent workflows and automatic triggers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr />

                <section className='final-cta' id="final-cta">
                    <div className="cta-content">
                        <h1>Start Building the Future, Today</h1>
                        <p>Instantly access the power of AI with an interface designed for maximum productivity. No hassle, no learning curve.</p>
                        <div className="cta-buttons">
                            <a href='https://graham-ai-kappa.vercel.app/' className="cta-primary">Start for Free</a>
                            <a href='#about' className="cta-secondary">Learn More</a>
                        </div>
                        <p className="cta-note">✨ No credit card required</p>
                    </div>
                </section>

                <hr />

            </section>
            <Icon />
            <Footer />
        </>
    )
}

export default Home;