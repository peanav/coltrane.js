describe "Coltrane.data", ->
  data = [
    { 'Houston'  : '$24,328,538'}
    { 'Oakland'  : '$68,577,000'}
    { 'Seattle'  : '$84,295,952'}
    { 'Texas'    : '$127,197,575'}
    { 'LA Angels': '$142,165,250'}
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

  describe "Coltrane.data.isPercentage", ->
    it "should know if a string is a percentage or not", ->
      expect(Coltrane.data.isPercentage "10").toBe false
      expect(Coltrane.data.isPercentage "1%0").toBe false
      expect(Coltrane.data.isPercentage "10%").toBe true
