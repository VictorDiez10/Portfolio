import '../styles/contact.scss';
import contactForm from './contactForm';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Me Contacter</h2>
            <div className='contacter'>
                <contactForm />
            </div>
        </section>
    )
}
