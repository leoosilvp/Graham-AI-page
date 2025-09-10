import '../css/plans.css'

function Plans() {
    return (
        <section className='ctn-plans'>
            <h1>Plans</h1>
            <div className="plans">
                <article className='plan'>
                    <h1>Basic</h1>
                    <p>$00,00</p>
                    <h2>Benefícios</h2>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>Gerar e análisar textos</li>
                        <li><i class="fa-solid fa-check"></i>Comunicação por voz</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Gerar códigos</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Análisar planilhas</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Cálculos complexos</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Gerar imagens</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Gerar videos</li>
                    </ul>
                    <button>Buy</button>
                </article>

                <article className='plan'>
                    <h1>Premiun</h1>
                    <p>$14,99</p>
                    <h2>Benefícios</h2>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>Gerar e análisar textos</li>
                        <li><i class="fa-solid fa-check"></i>Comunicação por voz</li>
                        <li><i class="fa-solid fa-check"></i>Gerar códigos</li>
                        <li><i class="fa-solid fa-check"></i>Análisar planilhas</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Cálculos complexos</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Gerar imagens</li>
                        <li><span><i class="fa-solid fa-xmark"></i></span>Gerar videos</li>
                    </ul>
                    <button>Buy</button>
                </article>

                <article className='plan'>
                    <h1>Professional</h1>
                    <p>$19,99</p>
                    <h2>Benefícios</h2>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>Gerar e análisar textos</li>
                        <li><i class="fa-solid fa-check"></i>Comunicação por voz</li>
                        <li><i class="fa-solid fa-check"></i>Gerar códigos</li>
                        <li><i class="fa-solid fa-check"></i>Análisar planilhas</li>
                        <li><i class="fa-solid fa-check"></i>Cálculos complexos</li>
                        <li><i class="fa-solid fa-check"></i>Gerar imagens</li>
                        <li><i class="fa-solid fa-check"></i>Gerar videos</li>
                    </ul>
                    <button>Buy</button>
                </article>
            </div>
        </section>
    )
}

export default Plans
