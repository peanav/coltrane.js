describe "Coltrane.data", ->
  data = [
    { 'Houston'  : '$24,000,000'}
    { 'Texas'    : '$127,000,000'}
    { 'Oakland'  : '$68,000,000'}
    { 'LA Angels': '$142,000,000'}
    { 'Seattle'  : '$84,000,000'}
  ]

  describe "Coltrane.data.parseValue", ->
    it "should be able to parse a number", ->
      expect(Coltrane.data.parseValue(10)).toEqual 10

    it "should be able to parse a number", ->
      expect(Coltrane.data.parseValue(10)).toEqual 10

    it "should parse a string into a number", ->
      expect(Coltrane.data.parseValue("10")).toEqual 10

    it "should parse percentages", ->
      expect(Coltrane.data.parseValue "10%").toEqual 10

    it "should parse currency", ->
      expect(Coltrane.data.parseValue "$10").toEqual 10

  describe "Coltrane.data.calculate", ->
    results = undefined
    beforeEach ->
      results = Coltrane.data.calculate(data)

    it "should return an array the same amout of items", ->
      expect(results.length).toEqual 5

    it "should sort based on value", ->
      expected = ['Houston', 'Oakland', 'Seattle', 'Texas', 'LA Angels']
      results = _.map(results, "label")
      expect(results).toEqual expected

    #it "should return value and valueLabel", ->


    it "should be calculate percentages", ->
      expect(results[0].percentage).toEqual .054
      expect(results[4].percentage).toEqual .319
