const { syllabify, syllabifyWord } = require('.')

describe('syllabify', () => {
  describe('base', () => {
    it('common', () => {
      expect(syllabify('каток')).toEqual('ка·ток')
      expect(syllabify('йогой')).toEqual('йо·гой')
      expect(syllabify('йогурт')).toEqual('йо·гурт')
      expect(syllabify('привет')).toEqual('при·вет')
      expect(syllabify('слияние')).toEqual('сли·я·ни·е')
      expect(syllabify('присоединились')).toEqual('при·со·е·ди·ни·лись')
      expect(syllabify('общественностью')).toEqual('о·бще·стве·нность·ю')
      expect(syllabify('газоэлектросварщик')).toEqual('га·зо·э·ле·ктро·свар·щик')
      expect(syllabify('художественный')).toEqual('ху·до·же·стве·нный')
    })

    it('ё', () => {
      expect(syllabify('всё')).toEqual('всё')
      expect(syllabify('амёбообразный')).toEqual('а·мё·бо·о·бра·зный')
    })
  })

  describe('sonoric', () => {
    it('р', () => {
      expect(syllabify('арлезианцы')).toEqual('ар·ле·зи·ан·цы')
      expect(syllabify('ария')).toEqual('а·ри·я')
      expect(syllabify('арендованный')).toEqual('а·рен·до·ва·нный')
      expect(syllabify('артельщик')).toEqual('ар·тель·щик')
      expect(syllabify('арлезианцы')).toEqual('ар·ле·зи·ан·цы')
    })

    it('ь', () => {
      expect(syllabify('листья')).toEqual('листь·я')
      expect(syllabify('обольстительность')).toEqual('о·боль·сти·тель·ность')
      expect(syllabify('рьяность')).toEqual('рья·ность')
      expect(syllabify('мультфильм')).toEqual('муль·тфильм')
      expect(syllabify('мультикультурность')).toEqual('муль·ти·куль·ту·рность')
      expect(syllabify('обезьяна')).toEqual('о·безь·я·на')
      expect(syllabify('болельщик')).toEqual('бо·лель·щик')
    })

    it('ъ', () => {
      expect(syllabify('объект')).toEqual('объ·ект')
    })

    it('й', () => {
      expect(syllabify('гайка')).toEqual('гай·ка')
      expect(syllabify('лайнер')).toEqual('лай·нер')
      expect(syllabify('дальнобойщик')).toEqual('даль·но·бой·щик')
      expect(syllabify('застройщик')).toEqual('за·строй·щик')
    })

    it('м', () => {
      expect(syllabify('лампа')).toEqual('лам·па')
      expect(syllabify('соломка')).toEqual('со·лом·ка')
      expect(syllabify('легкомыслие')).toEqual('ле·гко·мы·сли·е')
    })
  })

  describe('sentences', () => {
    it('symbols', () => {
      const symbols = '! @ # $ % ^ & * ( ) · +'
      expect(syllabify(symbols)).toEqual(symbols)
    })

    it('keep signs and case', () => {
      const source = 'Привет мой друг ! Как твои дела?'
      const expected = 'При·вет мой друг ! Как тво·и де·ла?'
      const syllabified = syllabify(source)
      expect(syllabified).toEqual(expected)
    })
  })

  describe('underscore', () => {
    it('base', () => {
      expect(syllabify('общественностью', { separator: '_' })).toEqual('о_бще_стве_нность_ю')
      expect(syllabify('арлезианцы', { separator: '_' })).toEqual('ар_ле_зи_ан_цы')
    })
  })

  describe('single word', () => {
    it('base', () => {
      expect(syllabifyWord('выпускница')).toEqual('вы·пу·скни·ца')
    })
  })
})
