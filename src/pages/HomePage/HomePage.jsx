import './HomePage.css'

export default function Home() {
    return (
        <div id="intro" className="box animate fadeInUp one">
        <section>
        <h1>Welcome To SEI-Goodbye</h1>
        <h3>The browser to keep in touch with <br></br> students from General Assembly's SEIR-321!</h3>
        </section>
        <button id="aboutBtn"><a href="/about">About Our Cohort</a></button>
        </div>
    );
  }