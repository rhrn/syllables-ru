<script>
  import { syllabify } from '../../'
	export let name;
  let text = `Привет! Как дела?!`;
  let hideTextbox = false
  let dotSeporator = false
  let hideSeporator = false

  $: fontSize = '20px'
  $: separator = hideSeporator ? '' : (dotSeporator ? '-': '·')

  const fontUp = () => {
    fontSize = Number(fontSize.match(/[0-9]+/)[0]) + 2 + 'px'
  }

  const fontDown = () => {
    fontSize = Number(fontSize.match(/[0-9]+/)[0]) - 2 + 'px'
  }
</script>

<main>
	<h1><a href="https://github.com/rhrn/syllables-ru">{name}</a></h1>
  <div>
    Разделитель тире: <input type=checkbox bind:checked={dotSeporator}>
    Скрыть разделитель: <input type=checkbox bind:checked={hideSeporator}>
    Размер шрифта:
    <button on:click={fontUp}>+</button>
    <button on:click={fontDown}>-</button>
    Скрыть ввод: <input type=checkbox bind:checked={hideTextbox}>
  </div>
  <textarea class:hideTextbox bind:value={text}></textarea>
  <pre class="display" style="--fontSize: {fontSize}">
    {syllabify(text, { separator })}
  </pre>
</main>

<style>
.hideTextbox {
  display: none;
}

main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

textarea {
  width: 100%;
  height: 30vh;
}

.display {
  font-size: var(--fontSize);
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 100;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>
