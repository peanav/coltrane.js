describe "Coltrane.barChart", ->
  data = [
    { 'Houston'  : '$24,328,538'},
    { 'Oakland'  : '$68,577,000'},
    { 'Seattle'  : '$84,295,952'},
    { 'Texas'    : '$127,197,575'},
    { 'LA Angels': '$142,165,250'}
  ]

  it "should take in an element", ->
    ele = document.createElement 'p'
    bar = Coltrane.barChart ele, { data: data}

    expect(bar.rootElement).toBe ele
    expect(bar.querySelector).toBe undefined

  it "should take in a query selector", ->
    ele = document.write '<div class="test_bar_2"></div>'
    bar = Coltrane.barChart '.test_bar_2', { data: data}

    expect(bar.rootElement.className).toBe 'test_bar_2'
    expect(bar.querySelector).toBe '.test_bar_2'
