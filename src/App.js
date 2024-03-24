import TextExpander from './TextExpander';

export default function App() {
  return (
    <div className="App">
      <TextExpander contractedLength={32} btnTextColor="green">
        Space exploration, investigation, by means of crewed and uncrewed
        spacecraft, of the reaches of the universe beyond Earth’s atmosphere and
        the use of the information so gained to increase knowledge of the cosmos
        and benefit humanity. A complete list of all crewed spaceflights, with
        details on each mission’s accomplishments and crew, is available in the
        section Chronology of crewed spaceflights.
      </TextExpander>
      <TextExpander
        contractedLength={18}
        btnTextColor="red"
        btnColor="#fff"
        btnTextOpen="Hide"
        btnTextClosed="Click"
        expanded={true}
      >
        Humans have always looked at the heavens and wondered about the nature
        of the objects seen in the night sky.
      </TextExpander>
      <TextExpander contractedLength={74} btnTextClosed="Learn More">
        Space exploration is the use of astronomy and space technology to
        explore outer space. While the exploration of space is currently carried
        out mainly by astronomers with telescopes, its physical exploration is
        conducted both by uncrewed robotic space probes and human spaceflight.
        Space exploration, like its classical form astronomy, is one of the main
        sources for space science. While the observation of objects in space,
        known as astronomy, predates reliable recorded history, it was the
        development of large and relatively efficient rockets during the
        mid-twentieth century that allowed physical space exploration to become
        a reality. Common rationales for exploring space include advancing
        scientific research, national prestige, uniting different nations,
        ensuring the future survival of humanity, and developing military and
        strategic advantages against other countries.
      </TextExpander>
    </div>
  );
}
