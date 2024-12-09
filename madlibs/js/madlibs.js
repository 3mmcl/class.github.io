

const madLibsForm = document.getElementById('madlibs-form');
const storySection = document.getElementById('completed-story');

const submitMadLibs = (event) => {
    event.preventDefault();
    madLibsForm.classList.add('hide');
    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = ` 
        <p><br clear="right"/><img class="squarecrop_para" style="float:right;" hspace="10" vspace="25" src="imgs/rose.jpeg">Her eyes were wet. Delicate raindrops of her sorrow rolling down her cheeks and splattering onto the dirt-caked table of the old diner. The melody of a ${userSubmission.musician} song from the well-loved jukebox became a droning mockery, broken only by the occasional sniffles as she tried, and failed, to keep her emotions confined.</p>

        <p>I pulled my hand back, abandoning the photo I had slid to her. Her beloved ${userSubmission.relationship}; unfaithfully entangled in the sheets with someone. A classic tale I witnessed every day, but it never really got easier to close the chapter.</p>

        <p>“What now, Mrs. ${userSubmission.name}?” I asked, keeping my tone as gentle as I could. Her eyes suddenly blink back into focus, slowly looking up at me. “What are you going to do about this?” She hesitates, her painted ${userSubmission.color} lips parting long before the words come out.</p>

        <p>“What… do I do?” She says ${userSubmission.adverb1}, her nose crinkling as another wave of ugly tears smear mascara down her face. Her ${userSubmission.adjective1} and ${userSubmission.adjective1} appearance, the kind you'd see in a picture show or on the front of a magazine, was quickly unraveling. Smeared makeup, disheveled curls, puffy eyes. You only saw women of her esteem like this when she was broken down.</p>

        <p>I was quiet. My eyes pull away from admiring her emotional unraveling manifest to stare at the old jukebox; ${userSubmission.musician} humming a broken tune. I was unable to prevent the small edges of a smile from pulling onto my lips. My gloved fingers curl onto my ${userSubmission.object}.</p>

        <p>“There's only one thing a man like that deserves…” I say ${userSubmission.adverb2}, pulling my attention back to her with an unabashed ${userSubmission.expression} on my face as I slide the ${userSubmission.object} across the table to her. <i>For</i> her. “Don't you agree, Mrs. ${userSubmission.name}?”</p>
    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `
        <button id="madlibs-reset" onclick="resetMadLibs()">Reset</button>
    `;
    storySection.innerHTML += resetButton;
}

const resetMadLibs = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    madLibsForm.reset();
    madLibsForm.classList.remove('hide');
}
