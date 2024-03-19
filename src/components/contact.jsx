import '../styles/contact.scss';
import ContactForm from './contactForm';

export default function Contact() {
    return (
        <section id="contact">
            <h2>Me Contacter</h2>
            <div className='contacter'>
                <ContactForm />
            </div>
        </section>
    )
}
