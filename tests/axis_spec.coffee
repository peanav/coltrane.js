describe "Coltrane.axis", ->
  homerun_data = [
    { 'Justin Upton': 12 }
    { 'John Buck': 9 }
    { 'Bryce Harper': 9 }
    { 'Dexter Fowler': 8 }
    { 'Anthony Rizzo': 8 }
    { 'Carlos Beltran': 7 }
    { 'Yuniesky Betancourt': 7 }
  ]

  describe "Coltrane.axis.max", ->
    it "should calculate the correct max value", ->
      axis = new coltrane.axis homerun_data
      expect(axis.max).toEqual 15
