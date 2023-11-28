import { html } from '../../lit-html/lit-html.js'
import { getQuizById } from '../api/data.js'

const detailsTemplate = (data) => html`
            <section id="details">
                <div class="pad-large alt-page">
                    <article class="details">
                        <h1>${data.title}</h1>
                        <span class="quiz-topic">A quiz by <a href="#">Peter</a> on the topic of ${data.topic}</span>
                        <div class="quiz-meta">
                            <span>15 Questions</span>
                            <span>|</span>
                            <span>Taken 189 times</span>
                        </div>
                        <p class="quiz-desc">Test your knowledge of XML by completing this medium-difficulty quiz.
                            Lorem ipsum dolor
                            sit amet consectetur adipisicing elit. Aliquam recusandae corporis voluptatum quibusdam
                            maxime similique reprehenderit rem, officia vero at.</p>

                        <div>
                            <a class="cta action" href="#">Begin Quiz</a>
                        </div>

                    </article>
                </div>
            </section>`

export async function detailsPage(ctx) {
    const quizId = ctx.params.id
    const quizData = await getQuizById(quizId);
    console.log(quizData)
    ctx.render(detailsTemplate(quizData))
}