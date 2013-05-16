describe "coltrane.data", ->
  data = [
    { 'Houston'  : '$24,000,000'}
    { 'Texas'    : '$127,000,000'}
    { 'Oakland'  : '$68,000,000'}
    { 'LA Angels': '$142,000,000'}
    { 'Seattle'  : '$84,000,000'}
  ]

  describe "coltrane.data.parseValue", ->
    it "should be able to parse a number", ->
      expect(coltrane.data.parseValue(10)).toEqual 10

    it "should be able to parse a number", ->
      expect(coltrane.data.parseValue(10)).toEqual 10

    it "should parse a string into a number", ->
      expect(coltrane.data.parseValue("10")).toEqual 10

    it "should parse percentages", ->
      expect(coltrane.data.parseValue "10%").toEqual 10

    it "should parse currency", ->
      expect(coltrane.data.parseValue "$10").toEqual 10

  describe "coltrane.data.calculate", ->
    results = undefined
    beforeEach ->
      results = coltrane.data.calculate(data)

    it "should return an array the same amout of items", ->
      expect(results.length).toEqual 5

    it "should sort based on value", ->
      expected = ['Houston', 'Oakland', 'Seattle', 'Texas', 'LA Angels']
      results = _.map(results, "label")
      expect(results).toEqual expected

    it "should return value and valueLabel", ->
      expected = ['$24,000,000', '$68,000,000', '$84,000,000', '$127,000,000', '$142,000,000']
      results = _.map(results, "valueLabel")
      expect(results).toEqual expected

    it "should be calculate percentages", ->
      expected = [.054, .153, .189, .285, .319]
      results = _.map(results, "percentage")
      expect(results).toEqual expected
