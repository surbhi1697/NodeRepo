
//Word Relations
describe("Related Words", function() {
  beforeEach(function() {
    document.body.innerHTML =
      '<div class="container"><div class="row"><div align="center" class="col-xl-9 mx-auto"><h1 style="margin-bottom: 1rem!important;" class="mb-5">Word Relations</h1></div><div class="col-md-10 col-lg-8 col-xl-7 mx-auto"><form><div class="form-row"><div class="col-12 col-md-9 mb-2 mb-md-0"><input type="word" id="word" class="form-control form-control-lg" placeholder="Type the word"></div><div class="col-12 col-md-3"><button type="button" class="btn btn-block btn-lg btn-primary" id="ButtonValue" onclick="relateDworD()">Find</button></div></div></form></div></div></div><div class="container"><div class="row"><div class="col-xl-12 mx-auto" id="defenit" style="display: none; padding-top: 10px;"><h2>Definition</h2><p id="deFenition"></p></div></div><div class="row" style="display: none;" id="syntext"><div class="col-sm-6"><h2>Synonyms</h2><p id="textSynon"></p></div><div class="col-sm-6"><h2>Related Words</h2><p id="textRelated"></p></div></div></div>';
  });

  
  describe("Testing function call", function() {
    it("Testing function call", function() {
      $("#word").val("world");
      $.ajaxSetup({
        async: false
      });
      $("#ButtonValue").trigger("click");
      expect(document.getElementById("textSynon").innerHTML).toContain("Earth");
      expect(document.getElementById("textRelated").innerHTML).toContain("country");
    });
  });
});

