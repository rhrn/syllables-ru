<script>
  import { syllabify } from '../../'
	export let name;
  let text = `Привет! Как дела?!`;
  let hideTextbox = false
  let hideSeporator = false
  let dotSeporator = false
  let fontFamilyDefault = true

  $: fontSize = '20px'
  $: fontFamily = fontFamilyDefault ? 'none': 'monospace'
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
    {#if !hideSeporator}
    <span>
      Тире <input type=checkbox bind:checked={dotSeporator}> |
    </span>
    {/if}
    <strike>Разделитель</strike> <input type=checkbox bind:checked={hideSeporator}> |
    Размер
    <button on:click={fontUp}>+</button>
    <button on:click={fontDown}>-</button> |
    Шрифт: <input type=checkbox bind:checked={fontFamilyDefault}> |
    Скрыть ввод <input type=checkbox bind:checked={hideTextbox}>
  </div>
  <textarea class:hideTextbox bind:value={text}></textarea>
  <pre class="display" style="--fontSize: {fontSize}; --fontFamily: {fontFamily}">
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
  font-family: var(--fontFamily);
  text-align: left;
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
