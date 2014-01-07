describe "Coltrane.barChart", ->
  data = [
    { 'Houston'  : '$24,328,538'},
    { 'Oakland'  : '$68,577,000'},
    { 'Seattle'  : '$84,295,952'},
    { 'Texas'    : '$127,197,575'},
    { 'LA Angels': '$142,165,250'}
  ]

  it "should take in an element", ->
    ele = $('<p>')[0]
    bar = coltrane.barChart ele, { data: data}

    expect(bar.rootElement).toBe ele
    expect(bar.querySelector).toBe undefined

  it "should take in a query selector", ->
    ele = document.write '<div class="test_bar_1"></div>'
    bar = coltrane.barChart '.test_bar_1', { data: data}

    expect(bar.rootElement.className).toBe 'test_bar_1'
    expect(bar.querySelector).toBe '.test_bar_1'

  it "should add an svg inside of the element", ->
    ele = $ '<div></div>'
    bar = coltrane.barChart ele[0], { data: data}
    expect(ele.children()[0].tagName).toBe 'svg'

  it "should add an svg the same size as the container element", ->
    ele = $ '<div style="width:300px; height:400px;"></div>'
    $('body').append ele
    bar = coltrane.barChart ele[0], { data: data}
    svg = ele.children(':first')
    expect(svg.width()).toBe 300
    expect(svg.height()).toBe 400

  it "should add the correct number of bars", ->
    ele = $ '<div></div>'
    bar = coltrane.barChart ele[0], { data: data}
    expect(ele.find('rect').length).toBe 5


