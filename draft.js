<div>{CONTENT.INTRODUCTION.TITLE}</div>
{/* <div class="arrow-up"></div>
<div class="arrow-down"></div>
<div class="arrow-left"></div>
<div class="arrow-right"></div> */}

{CONTENT.INTRODUCTION.TEXT.map((content) => (
  <div>{content}</div>
))}
<Card
  key={
    Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100)
  }
  content={CONTENT.SHORTSTORY}
/>
{/* <div>
  {CONTENT.EDUCATION.TEXT.map((content) => (
    // <div key={text.TITLE}>{text.TITLE}</div>
    <Card
      key={
        Math.floor(Math.random() * 100) *
        Math.floor(Math.random() * 100)
      }
      content={content}
    />
  ))}
</div> */}

<button
  class="button"
  onClick={() => {
    this.updateSelectedSection("SHORTSTORY")
  }}
>
  {CONTENT.SHORTSTORY.TITLE}
  {/* {selectedSection === "SHORTSTORY" ? (
    <span class="pic arrow-left"></span>
  ) : (
    <span class="pic arrow-down"></span>
  )} */}
</button>

<div>
  {selectedSection === "SHORTSTORY"
    ? CONTENT.SHORTSTORY.TEXT.map((text) => (
        <div class="sectionText" key={1}>
          {text}
        </div>
      ))
    : null}
</div>
<div>{CONTENT.EDUCATION.TITLE}</div>
<div>
  {CONTENT.EDUCATION.TEXT.map((text) => (
    <div key={text.TITLE}>{text.TITLE}</div>
  ))}
</div>
<div>{CONTENT.WORKEXPERIENCE.TITLE}</div>
<div>
  {CONTENT.WORKEXPERIENCE.TEXT.map((text) => (
    <div key={text.TITLE}>{text.TITLE}</div>
  ))}
</div>
<div>{CONTENT.EVENTEXPERIENCE.TITLE}</div>
<div>
  {CONTENT.EVENTEXPERIENCE.TEXT.map((text) => (
    <div key={text.TITLE}>{text.TITLE}</div>
  ))}
</div>
<div>{CONTENT.RECOMMENDATION.TITLE}</div>
<div>
  {CONTENT.RECOMMENDATION.TEXT.map((text) => (
    <div key={text.TITLE}>{text.TITLE}</div>
  ))}
</div>
<div>{CONTENT.FEEDBACK.TITLE}</div>
<div>
  {CONTENT.FEEDBACK.TEXT.map((text) => (
    <div key={text.TITLE}>{text.TITLE}</div>
  ))}
</div>

{/* {(((obj !== null) !== obj) !== "" && typeof obj == "object") {
Object.entries(obj).forEach(([key, value]) => {
;<div key={key + 1}>{value} </div>
// key is either an array index or object key
traverse(value)
})
} else {
// obj is a number or string
}} */}